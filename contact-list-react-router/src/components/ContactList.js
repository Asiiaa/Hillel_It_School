import ContactListItem from './ContactListItem'
import React from 'react'

export default function ContactList({contact, onDelete, onEdit}) {
    console.log(contact)
    return (
        <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Surname</td>
            <td>Email</td>
            <td>Action </td>
          </tr>
        </thead>
        <tbody>
            {contact.map((item) => (
                <ContactListItem
                    key={item.id}
                    contact={item}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    />
            ))}
        </tbody>
      </table>
    )
}