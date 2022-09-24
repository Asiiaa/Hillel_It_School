const ToDoList = document.querySelector('#ToDoList');
const TaskInput = document.querySelector('#task');
const AddTaskBtn = document.querySelector('#AddTaskBtn');

AddTaskBtn.addEventListener("click", onAddTaskBtnClick);

function onAddTaskBtnClick() {
    if(!validateTask()){
        return;
    }
    const newTask = getTaskToday();
    addTask(newTask);
    
    // console.log(newTask);
    resetField();
};

function validateTask() {
    resetValidation();
    if(TaskInput.value === ''){
        TaskInput.classList.add('invalid-task')
        return false;
    }
    return true;
}

function resetValidation() {
    TaskInput.classList.remove('invalid-task')
}

function getTaskToday() {
    return  {taskValue: TaskInput.value}
}

function addTask(task){
    const taskEl = generateTaskElement(task);

    ToDoList.append(taskEl);
}

function generateTaskElement(task) {
    const trEl = document.createElement('tr');

    trEl.append(generateCell(task.taskValue));

    trEl.addEventListener('click', () => {
        trEl.classList.toggle('cros-out-string');
    })

    return trEl;
}

function generateCell(value) {
    const taskTd = document.createElement('td');
    taskTd.textContent = value;

    return taskTd;
}

function resetField() {
    TaskInput.value = '';
}

document.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
        onAddTaskBtnClick();
    }
  });

// if(TaskInput.classList.contains('invalid-task')) {
//     TaskInput.classList.remove('invalid-task');
// } else {
//     TaskInput.classList.add('invalid-task');
// }