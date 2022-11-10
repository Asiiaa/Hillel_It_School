class TodoController {
    #todoListView = null;
    #todosCollection = null;

    constructor(container) {
        this.#todoListView = new TodoListView({//создаем view для отображения списка и формы
            onToggle: (id) => this.toggle(id),//через view вызиваем внутренний метод
            onDelete: (id) => this.delete(id),
            //------------------
            onAdd: (todo) => this.add(todo),//через view вызиваем внутренний метод
            //--------------------
        });
        container.append(this.#todoListView.el);//отображаем div и form
        //-------------------
        container.append(this.#todoListView.elForm);
        //-----------------

        this.#todosCollection = new TodosCollection();//создаем колекцию..вызиваем TodoModel

        this.#todosCollection //"коллекция сходи за данными на сервер"
            .fetchList()
            .then(() =>//получаем данные и передаем вьюшке обновить список
                this.#todoListView.renderList(this.#todosCollection.list)
            );
    }

    toggle(id) {//переключить todo
        this.#todosCollection
            .toggle(id)//отправляем на сервер переключить по id
            .then(() =>//после переключения на сервере, обновляем список
                this.#todoListView.renderList(this.#todosCollection.list)
            );
    }

    delete(id) {//удалить todo
        this.#todosCollection
            .delete(id)//отправляем на сервер удалить по id
            .then(() =>//после удаления на сервере, обновить список
                this.#todoListView.renderList(this.#todosCollection.list)
            );
    }
//----------------------
    add(todo) {//добавить todo
        this.#todosCollection
            .add(todo)//отправляем на сервер добавить объект
            .then(() => //после добавления на сервере, обновляем список
                this.#todoListView.renderList(this.#todosCollection.list))
    }
//--------------------
}