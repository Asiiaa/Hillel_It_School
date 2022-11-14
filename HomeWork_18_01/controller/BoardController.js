class BoardController {
    #boardView = null;
    #boardModell = null;
    #boardFormView = null;

    constructor(container) {
        this.#boardView = new BoardView({
            onDelete: (id) => this.delete(id),
            onEdit: (id, value) => this.edit(id, value),
        });
        container.append(this.#boardView.el);

        this.#boardModell = new BoardModel();
        this.#boardModell
            .fetchBoard()
            .then(() =>
                this.#boardView.renderList(this.#boardModell.stickers)
            );

        this.#boardFormView = new BoardFormView({
            onCreate: (stickers) => this.create(stickers),
        });
        container.prepend(this.#boardFormView.elForm)

    }

    delete(id) {
        this.#boardModell
            .delete(id)
            .then(() =>
                this.#boardView.renderList(this.#boardModell.stickers)
            );
    }

    create(stickers) {
        console.log(stickers)
        this.#boardModell
            .add(stickers)
            .then(() =>
                this.#boardView.renderList(this.#boardModell.stickers))
    }

    edit(id, value) {
        console.log('edit')
        this.#boardModell
          .update(id, value)
          .then(() => this.#boardView.renderList(this.#boardModell.stickers));
      };
}