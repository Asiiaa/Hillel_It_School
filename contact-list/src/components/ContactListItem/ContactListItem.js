import './ContactListItem.css';

import React, { Component } from 'react';

export class ContactListItem extends Component {
    onEditClick = (e) => {
        e.stopPropagation();

        this.props.onEdit(this.props.contact);
    }
    onDeleteClick = (e) => {
        e.stopPropagation();

        this.props.onDelete(this.props.contact.id);
    };

    render() {
        return (
                    <tr>
                        <td>{this.props.contact.name}</td>
                        <td>{this.props.contact.surname}</td>
                        <td>{this.props.contact.email}</td>
                        <td>
                        <button onClick={this.onEditClick}>Edit</button>
                        <button onClick={this.onDeleteClick}>Delete</button>
                        </td>
                    </tr>
        );
    }
}

export default ContactListItem;