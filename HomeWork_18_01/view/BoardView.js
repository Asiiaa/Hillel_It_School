class BoardView {
    el = null;
    #config = null;

    static CLASSES = {
        STICKER_ITEM_CLASS: 'sticker-item',
        DELETE_BTN_CLASS: 'delete-btn',
        TEXTAREA_CLASS: 'textarea',
    }

    static boardStickersContainerTemplate = `
        <div class="row">
            <div class="container stickers"></div>
        </div>`;

    static stickerItemTemplate = `
        <div class="u-full-width sticker-item" data-todo-id="{{id}}">
            <div class="title">
                <span class="delete-btn">X</span>
            </div>
            <textarea id="area" class="textarea" placeholder="Text...">{{description}}</textarea>
        </div>`;

    static generateStickerItemHtml(sticker) {//передаем шаблон и объект, которым нужно заполнить шаблон//создаем тудушки
        return interpolate(BoardView.stickerItemTemplate, sticker)
        .replaceAll('{{description}}');
    };


    static getStickerId(el) {//принимаем DOM элемент ищем вверх ближайшего родителя берет у него dataset, а у него есть id
        return el.closest('.' + BoardView.CLASSES.STICKER_ITEM_CLASS).dataset
            .todoId;
    };
    
    constructor(config) {
        this.#config = config;
        this.#initView();
    };
    
    #initView() {
        const row = document.createElement('div');
        row.className = 'row';
    
        const div = document.createElement('div');
        div.className = 'container stickers';
      
        row.append(div);   

        row.addEventListener('click', (e) => {
            if (e.target.classList.contains(BoardView.CLASSES.DELETE_BTN_CLASS)) {
                const stickerId = BoardView.getStickerId(e.target);
                this.deleteTodo(stickerId);
            }
        });

        row.addEventListener('change', (e) => {
            if (e.target.classList.contains(BoardView.CLASSES.TEXTAREA_CLASS)) {
                this.updateItem(BoardView.getStickerId(e.target), e.target.value);
                console.log(BoardView.getStickerId(e.target), e.target.value)
              }
        })

    this.el = row; 
}

    updateItem(id, value) {
        console.log('update')
        this.#config.onEdit(id, value);
    }

    renderList(stickers) {
        this.el.children[0].innerHTML = stickers
            .map(BoardView.generateStickerItemHtml)
            .join('');
    };
    
    deleteTodo(id) {
        this.#config.onDelete(id);
    };
}


