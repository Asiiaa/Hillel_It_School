import React from 'react'

export default function ContactListItem({ contact, onDelete, onEdit }) {

    function deleteContact(e) {
        onDelete(contact.id);

        console.log('id', contact.id);
      }
    function editContact(e) {
        onEdit(contact.id);

        console.log('contact', contact.id);
    }

    return (
        <tr>
            <td>
                {contact.name}
            </td>
            <td>
                {contact.surname}
            </td>
            <td>
                {contact.email}
            </td>
            <td>
                <button className='delete-btn' onClick={deleteContact}>Delete</button>
                <button className='edit-btn' onClick={editContact}>Edit</button>
            </td>
        </tr>
    )
}

