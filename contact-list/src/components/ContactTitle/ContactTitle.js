import './ContactTitle.css';

import React, { Component } from 'react';

import ContactList from '../ContactList/ContactList';
import Form from '../ContactForm/ContactForm';

class ContactTitle extends Component {
  state = {
    list: [
        { id: 1, name: 'Alex', surname: 'Smith', email: 'Arno.Schroeder63@gmail.com' },
        { id: 2, name: 'Josh', surname: 'Larson', email: 'sipka@gmail.com' },
    ],
};

deleteContact = (id) => {
  this.setState({
      list: this.state.list.filter((item) => item.id !== id),
  });
};

// updateContact = (id, contact) => {
//   this.setState({
//     list: this.state.list.find((item) => item.id === id)
//   })
// }

addContact = (newContact) => {
  this.setState({
      list: [
        ...this.state.list,
        {
          id: Date.now(),
          name: newContact.name.value,
          surname: newContact.surname.value,
          email: newContact.email.value
        }
      ]         
  })
}

render() {
  return (
      <>
          <ContactList
            list={this.state.list}
            onDelete={this.deleteContact}
            onEdit={this.updateContact}
          />
          
          <Form onSave={this.addContact}/> 
      </>
  );
}
}

export default ContactTitle;