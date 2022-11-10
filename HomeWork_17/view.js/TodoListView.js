class TodoListView {
    el = null;
    elForm = null;
    #config = null;

    static CLASSES = {
        TODO_ITEM_CLASS: 'todo-item',
        DONE_ITEM_CLASS: 'done',
        DELETE_BTN_CLASS: 'delete-btn',
        CREATE_BTN_CLASS: 'add-btn'
    };

    static todoListContainerTemplate = `
        <div class="row">
            <div class="twelve columns"></div>
        </div>`;

    static todoItemTemplate = `
        <div class="u-full-width todo-item {{doneClass}}" data-todo-id="{{id}}">
            {{title}}
            <span class="delete-btn">X</span>
        </div>`;

    static todoFormTemplate = `
        <form id="newTodoForm" class="new-todo-form">

        <input id="itemInp" type="text" placeholder="Enter Task Name" />
        <button id="addBtn" type="submit" class="add-btn">Create</button>

        </form>`;

    static generateTodoItemHtml(todo) {//передаем шаблон и объект, которым нужно заполнить шаблон//создаем тудушки
        return interpolate(TodoListView.todoItemTemplate, todo).replaceAll(
            '{{doneClass}}',
            todo.isDone ? TodoListView.CLASSES.DONE_ITEM_CLASS : ''
        );
    }
    static getTodoId(el) {//принимаем DOM элемент ищем вверх ближайшего родителя берет у него dataset, а у него есть id
        return el.closest('.' + TodoListView.CLASSES.TODO_ITEM_CLASS).dataset
            .todoId;
    }

    constructor(config) { //вызываем функции//с помощью config вызываем controller
        /// {onToggle: (id) => {}}
        this.#config = config;
        this.#initView();
    }

    #initView() {//создаем DOM элементы
        const row = document.createElement('div');
        row.className = 'row';

        const div = document.createElement('div');
        div.className = 'twelve columns';

//-----------------------
        const form = document.createElement('form');
        form.className = 'new-todo-form';

        const input = document.createElement('input');
        input.className = 'input-new-task';
        input.placeholder = 'Enter Task Name'

        const button = document.createElement('button');
        button.className = 'add-btn';
        button.innerText = 'Create';
        
//-----------------------

        row.append(div);
        form.append(input);
        form.append(button);

        row.addEventListener('click', (e) => {//обработчик событий по клику
            if (e.target.classList.contains(TodoListView.CLASSES.DELETE_BTN_CLASS)) {
                const todoId = TodoListView.getTodoId(e.target);
                console.log(todoId)
                this.deleteTodo(todoId);
            }
            if (e.target.classList.contains(TodoListView.CLASSES.TODO_ITEM_CLASS)) {
                const todoId = TodoListView.getTodoId(e.target);
                this.toggleTodo(todoId);
            }
        });
//----------------------------
        form.addEventListener('submit', (e) => {//обратотка событий по кнопке
            e.preventDefault();
            const newTodo = this.getFormValues();//записываем в переменную значение инпута
            if(newTodo.title === ''){//валидация
                input.classList.add('invalide-input');//если пустая строка, навешиваем класс и возвращаем;
                return
            } else{
                this.addTodo(newTodo);//отправляем контроллеру, что нужно добавить
                input.classList.remove('invalide-input');//удаляем класс, если он есть
            } 
            this.resetInput();//очищаем инпут
            })
//-----------------------------
        this.el = row; 
//-----------------------------
        this.elForm = form;//создаем форму, чтобы добавить через controller
    }

    getFormValues() { //возвращает значение инпута в виде объекта с title
        return {
            title: this.elForm.children[0].value
        };
    };

    addTodo(todo) {//вызиваем метод onAdd в conroller
        this.#config.onAdd(todo);
    };

    resetInput() {//очищаем поле инпута
        this.elForm.children[0].value = '';
    }
//-----------------------------

    renderList(list) {//принимаем данные и обновляем список
        this.el.children[0].innerHTML = list
            .map(TodoListView.generateTodoItemHtml)
            .join('');
    };

    toggleTodo(id) {
        this.#config.onToggle(id);//вызиваем onToggle с config который передал controller
    }

    deleteTodo(id) {
        this.#config.onDelete(id);
    }

//-----------------------
    addTodo(todo) {
        this.#config.onAdd(todo);
    }
//-----------------------
}