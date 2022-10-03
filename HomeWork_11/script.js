const ITEM_CLASS = 'todo-item';
const DELETE_BTN_CLASS = 'delete-btn';
const EDIT_BTN_CLASS = 'edit-btn';

const itemTemplate = document.querySelector('#liTemplate').innerHTML;

const todoForm = document.querySelector('#todoForm');
const inputEl = document.querySelector('#itemInp');
const editId = document.querySelector('#editId');
const listEl = document.querySelector('#uList');
const addBtm = document.querySelector('#addBtn');

let todoList = [
  { id: 1, task: 'Read a book', isChecked: false },
  { id: 2, task: 'Do homework', isChecked: true },
];

inputEl.addEventListener('input', onInputChange);
todoForm.addEventListener('submit', onSubmit);
listEl.addEventListener('click', onListItemClick);

init();
disableFormSubmit();

function init() {
  renderList(todoList);
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

function generateItemHtml({ id, task, isChecked }) {
  return itemTemplate
    .replaceAll('{itemId}', id)
    .replaceAll('{itemTask}', task)
    .replaceAll('{isChecked}', isChecked);
}

function isFormInvalid(el) {
  const isInvalid = el.value === null || el.value === '';
  el.setCustomValidity(isInvalid ? 'Please enter a task' : '');
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
      item.task = innerItem.task;
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
    item.isChecked = !item.isChecked;
    renderList(todoList);
  } else {
    setEditValues(item);
  }
}

function getFormItem() {
  return {
    id: +editId.value,
    task: inputEl.value,
    isChecked: false,
  };
}

function setEditValues({ id, task }) {
  editId.value = id;
  inputEl.value = task;
}

function disableFormSubmit() {
    addBtm.disabled = true;
}