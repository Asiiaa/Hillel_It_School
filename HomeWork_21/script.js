const URL = 'wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self';

const chatTamplate = document.getElementById('chatFramework').innerHTML;

const chatEl = document.querySelector('#chat');
const inputName = document.querySelector('.input-name');
const inputMessage = document.querySelector('.input-message');
const btnSend = document.querySelector('.btn-send');

btnSend.addEventListener('click', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (inputName.value && inputMessage.value) {
        send(inputName.value, inputMessage.value)
    }
    else{
         alert('Ошибка при отправке данных, заполните поля');
    }
}

const socket = new WebSocket(URL);

socket.onopen = () => {
    console.log('socket connected');
}

socket.onclose = () => {
    console.log('socket closed');
}

socket.onmessage = ({data}) => {
    data = JSON.parse(data);
    if (data.payload) {
        action(data);
    }
}

socket.onerror = () => {
    console.log('socket error');
}

function send(author, message) {
const package = {
    type: 'message',
    payload: {
        author: author,
        message: message, 
    },
}
    socket.send(JSON.stringify(package))
}

function action({payload}) {
    chatEl.innerHTML += interpolate(chatTamplate, payload);
    clearInput();
}

function clearInput() {
    inputName.value = '';
    inputMessage.value = '';
}