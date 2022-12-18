import './ContactForm.css';

import React, { Component } from 'react';

export class Form extends Component {

    onFormSubmit = (e) => {
        e.preventDefault();

        console.log(e.target.elements.name.value);
        console.log(e.target.elements.surname.value);
        console.log(e.target.elements.email.value);

        this.props.onSave(e.target.elements);
        
        e.target.reset();
    };

  render() {
    return (
          <form onSubmit={this.onFormSubmit}>
              <input name="name" placeholder="name" />
              <input name="surname" placeholder="surname" />
              <input name="email" placeholder="email" />
              <button>Save</button>
          </form>
    )
  }
}

export default Form;