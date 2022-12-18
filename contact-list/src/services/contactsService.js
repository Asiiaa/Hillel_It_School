const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';

export function getContactList() {
    return fetch(API_URL).then((res) => res.json());
}

export function removeContact(id) {
    return fetch(API_URL + id, {
        method: 'DELETE',
    }).then((res) => res.json());
}

export function updateContact(contact) {
    return fetch(API_URL + contact.id, {
        method: 'PUT',
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

export function addContact(contact) {
    console.log(contact);
    return fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}