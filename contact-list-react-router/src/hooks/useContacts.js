import { useEffect, useState } from 'react';

import api from '../api';

export default function useContacts() {
  const [contact, setContact] = useState([]);
  const [count, setCount] = useState(0);
  const [currentContact, setCurrentContact] = useState({});

  useEffect(() => {
    api.get().then(({ data }) => {
      console.log(data);
      setContact(data);
    });
  }, [count]);

  const onDelete = (id) => {
    api.delete(id).then(() => {
      setContact(contact.filter((item) => item.id !== id));
    });
  };

  const getContactData = (id) => {
    api.get(id).then(({ data }) => {
      console.log('currentContact', data);
      setCurrentContact(data);
    });
  };

  const saveContact = (contact) => {
    console.log('saveContact', contact);
    if (contact.id) {
      return api.put(contact.id, contact);
    } else {
      delete contact.id;
      return api.post('', contact);
    }
  };

  return {
    contact,
    count,
    setCount,
    onDelete,
    currentContact,
    getContactData,
    saveContact,
  };
}