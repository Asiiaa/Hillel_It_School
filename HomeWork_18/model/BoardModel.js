class BoardModel {
    #api = null;
    stickers = [];

    constructor() {
        this.#api = new RestApi(
            'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/'
        );
    };

    fetchBoard() {
        return this.#api.getList().then((data) => (this.stickers = data));
    }

    delete(id) {
        return this.#api.delete(id).then(() => {
            this.stickers = this.stickers.filter((item) => item.id !== id);
        });
    }

    add(stickers) {
        return this.#api.create(stickers).then((data) => {
            data.title = '';
            this.stickers = [...this.stickers, data];
            console.log(this.stickers, data.title)
        });
    }

    update(id, value) {
        console.log('model')
        console.log(id, value)
        const item = this.stickers.find((item) => item.id === id);
        const updatedItem = { ...item, title: value };
        console.log(updatedItem)
    
        return this.#api.update(updatedItem).then(() => {
          this.stickers = this.stickers.map((item) =>
            item.id === updatedItem.id ? updatedItem : item
          );
        });
      }
}