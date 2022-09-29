const inputName = document.querySelector('#name');
const inputSurname = document.querySelector('#surname');
const inputPhone = document.querySelector('#phone');
const addContactBtn = document.querySelector('#addContactBtn');
const contactListEl = document.querySelector('#contactList');

addContactBtn.addEventListener("click", onAddContactBtnClick);

function onAddContactBtnClick() {
    if(!validateContact()){
        return;
    }
    const newContact = getValues(); //переменная которая будет в себе хранить новые контакты
    addContact(newContact);
    resetField();
}

function validateContact() {
    resetValidation();
    if (inputName.value === '' || inputSurname.value === '' || inputPhone.value === ''){ 
        if (inputName.value === '') {
            inputName.classList.add('invalid-contact');
        } else {
            inputName.classList.remove('invalid-contact');
        }
        if (inputSurname.value === '') {
            inputSurname.classList.add('invalid-contact');
        } else {
            inputSurname.classList.remove('invalid-contact');
        }
        if (inputPhone.value === '') {
            inputPhone.classList.add('invalid-contact');
        } else {
            inputPhone.classList.remove('invalid-contact');
        }
    } else {
        return true;
    }
}

function resetValidation() {
    inputName.classList.remove('invalid-contact');
    inputSurname.classList.remove('invalid-contact');
    inputPhone.classList.remove('invalid-contact');
}

function getValues() { //функция которая принимает значения инпутов
    return {
        name: inputName.value,
        surname: inputSurname.value,
        phone: inputPhone.value
    }
}

function addContact(contact) {
    const contactEl = generateContactElement(contact);

    contactListEl.append(contactEl);
}

function generateContactElement({name, surname, phone}) {//функция генерирует дом елемент для нового контакта
    const trEl = document.createElement('tr');
    const deleteBtn = document.createElement('span');
    // const editBtn = document.createElement('span');

    trEl.append(generateCell(name));
    trEl.append(generateCell(surname));
    trEl.append(generateCell(phone));
    
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');

    // editBtn.textContent = 'edit';
    // editBtn.classList.add('edit-btn');

    trEl.append(deleteBtn);
    // trEl.append(editBtn);

    deleteBtn.addEventListener('click', deleteContactBtn);
    // editBtn.addEventListener('click', editContactBtn);

    function deleteContactBtn() {
        trEl.remove();
    }

    // function editContactBtn() {
    //     return {
    //         inputName: this.name,
    //         surname: this.surname,
    //         phone: this.phone 

    //     }

    // }


    return trEl;
}


function generateCell(value) {
    const tdEl = document.createElement('td');

    tdEl.textContent = value;

    return tdEl;
}

function resetField() {
    inputName.value = '';
    inputSurname.value = '';
    inputPhone.value = '';
}