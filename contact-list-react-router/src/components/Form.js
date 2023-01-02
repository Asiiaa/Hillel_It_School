import React from 'react';
import useForm from '../hooks/useForm';

function Form({ contact }) {
  const [onFormSubmit] = useForm();

  return (
    <div className="divTableFoot tableFootStyle">
      <form className="add-form" onSubmit={onFormSubmit}>
          <input name="id" type="hidden" defaultValue={contact && contact.id} />
          <input
            name="name"
            placeholder="name"
            type="text"
            defaultValue={contact && contact.name}
          />
          <input
            name="surname"
            placeholder="surname"
            type="text"
            defaultValue={contact && contact.surname}
          />
          <input
            name="email"
            placeholder="email"
            type="text"
            defaultValue={contact && contact.email}
          />
          <button className="save-btn">Save</button>
      </form>
    </div>
  );
}

export default Form;
