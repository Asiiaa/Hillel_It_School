const ITEM_CLASS = 'todo-item';
const DELETE_BTN_CLASS = 'delete-btn';
const EDIT_BTN_CLASS = 'edit-btn';

const itemFramework = document.querySelector('#liFramework').innerHTML;

const todoForm = document.querySelector('#todoForm');
const inputEl = document.querySelector('#itemInp');
const editId = document.querySelector('#editId');
const listEl = document.querySelector('#uList');
const addBtm = document.querySelector('#addBtn');

let todoList = [];

inputEl.addEventListener('input', onInputChange);
todoForm.addEventListener('submit', onSubmit);
listEl.addEventListener('click', onListItemClick);

init();
disableFormSubmit();

function init() {
    fetchContacts()
    renderList(todoList);
}

function fetchContacts() {
    fetch('https://jsonplaceholder.typicode.com/todos').then((resp) => {
        resp.json().then((data) => {
            todoList = data;
            renderList(todoList)
        })
    })
}

function onInputChange() {
    addBtm.disabled = isFormInvalid(inputEl);
}

function onSubmit(e) {
  e.preventDefault();
  if (isFormInvalid(inputEl)) {
    return;
  }
  const item = getFormItem();
  submitItem(item);
  clearInput();
}

function onListItemClick(e) {
  const itemId = getItemId(e.target);
  if (e.target.classList.contains(DELETE_BTN_CLASS)) {
    deleteItem(itemId);
  } else {
    editItem(itemId, e.target.classList.contains(ITEM_CLASS));
  }
}
function renderList(list) {
  listEl.innerHTML = list.map(generateItemHtml).join('');
}

function generateItemHtml({ id, title, completed }) {
  return itemFramework
    .replaceAll('{itemId}', id)
    .replaceAll('{title}', title)
    .replaceAll('{completed}', completed);
}

function isFormInvalid(el) {
  const isInvalid = el.value === null || el.value === '';
  el.setCustomValidity(isInvalid ? 'Please enter a title' : '');
  return isInvalid;
}

function getItemId(el) {
  return +el.closest('li').dataset.itemId;
}

function clearInput() {
  editId.value = '';
  inputEl.value = '';
  disableFormSubmit();
}

function submitItem(item) {
  if (item.id === 0) {
    insertItem(item);
  } else {
    updateItem(item);
  }
}

function insertItem(item) {
  item.id = Date.now();
  todoList.push(item);
  renderList(todoList);
}

function updateItem(innerItem) {
  todoList.forEach((item) => {
    if (item.id === innerItem.id) {
      item.title = innerItem.title;
    }
  });
  renderList(todoList);
}

function deleteItem(id) {
  if (id === +editId.value) {
    clearInput();
  }
  todoList = todoList.filter((item) => item.id !== id);
  renderList(todoList);
}

function editItem(id, isItemClick) {
  const item = todoList.find((item) => item.id === id);
  if (isItemClick) {
    item.completed = !item.completed;
    renderList(todoList);
  } else {
    setEditValues(item);
  }
}

function getFormItem() {
  return {
    id: +editId.value,
    title: inputEl.value,
    completed: false,
  };
}

function setEditValues({ id, title }) {
  editId.value = id;
  inputEl.value = title;
}

function disableFormSubmit() {
    addBtm.disabled = true;
}