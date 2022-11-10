class TodosCollection {
    #api = null;
    list = [];

    constructor() {
        this.#api = new RestApi(
            'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/'
        );
    }

    fetchList() {//забираем данные с сервера..сохраняет у себя локально в list
        return this.#api.getList().then((data) => (this.list = data));
    }

    toggle(id) {
        const item = this.list.find((item) => item.id === id);//ищем по id какой нужно переключить
        const updatedItem = {//переключенный item
            ...item,
            isDone: !item.isDone,
        };

        return this.#api.update(updatedItem).then(() => {
            this.list = this.list.map((item) =>
                item.id === updatedItem.id ? updatedItem : item
            );
        });
    }

    delete(id) {
        return this.#api.delete(id).then(() => {
            this.list = this.list.filter((item) => item.id !== id);
        });
    }
//------------------------
    add(todo) {
        return this.#api.create(todo).then((data) => {
            this.list = [...this.list, data];
        });
    }
//------------------------
}