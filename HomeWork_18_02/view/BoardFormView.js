class BoardFormView {
    elForm = null;
    #config = null;

    static todoFormTemplate = `
    <form id="newSticker" class="new-sticker">

    <input class="input-new-sticker" id="itemInp" type="text" placeholder="Enter Task Name" />
    <button id="createBtn" type="submit" class="create-btn">Create</button>

    </form>`;

    constructor(config) { //вызываем функции//с помощью config вызываем controller
        this.#config = config;
        this.#initView();
    }

    #initView() {
        const newSticker = document.createElement('form');
        newSticker.className = 'new-sticker';

        const input = document.createElement('input');
        input.className = 'input-new-sticker';
        input.placeholder = 'Enter Task Name';

        const buttonCreate = document.createElement('button');
        buttonCreate.className = 'create-btn';
        buttonCreate.textContent = 'Create'

        newSticker.append(input);
        newSticker.append(buttonCreate);

        newSticker.addEventListener('submit', (e) => {
            e.preventDefault();
            const newSticker = this.getFormValues();//записываем в переменную значение инпута
            if(newSticker.description === ''){//валидация
                input.classList.add('invalide-input');//если пустая строка, навешиваем класс и возвращаем;
                return;
            } else{
                this.addSticker(newSticker);//отправляем контроллеру, что нужно добавить
                input.classList.remove('invalide-input');//удаляем класс, если он есть
            } 
            this.resetInput();//очищаем инпут
        })

        this.elForm = newSticker;
    }

    getFormValues() { //возвращает значение инпута в виде объекта с title
        return {
            description: this.elForm.children[0].value
        };
    };

    addSticker(stickers) {//вызиваем метод onAdd в conroller
        this.#config.onCreate(stickers);
    };

    resetInput() {//очищаем поле инпута
        this.elForm.children[0].value = '';
    }
}