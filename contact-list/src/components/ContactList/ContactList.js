import './ContactList.css'

import React, { Component } from 'react';

import ContactListItem from '..//ContactListItem/ContactListItem';

export class ContactList extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.list.map((item) => (
                        <ContactListItem
                            key={item.id}
                            contact={item}
                            onDelete={this.props.onDelete}
                            onEdit={this.props.updateContact}
                        />
                    ))}
                </tbody>
                
            </table>
        );
    }
}

export default ContactList;