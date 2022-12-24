import { TODO_API_URL } from '../config'

export function getTodoList() {
    return fetch(TODO_API_URL).then((res) => res.json());
}

export function deleteTodo(id) {
    console.log(id)
    return fetch(TODO_API_URL + id, {
        method: 'DELETE',
    }).then((res) => res.json());
}

export function updateTodo(el) {
    console.log(el.id)
    return fetch(TODO_API_URL + el.id, {
        method: 'PUT',
        body: JSON.stringify(el),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

export function addTodo(el) {
    return fetch(TODO_API_URL, {
        method: 'POST',
        body: JSON.stringify(el),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}