import React, { useEffect } from 'react';

import Form from './Form';
import useContacts from '../hooks/useContacts';
import { useParams } from 'react-router-dom';

function EditContact() {
  const { contactId } = useParams();
  const { currentContact, getContactData } = useContacts();

  useEffect(() => getContactData(contactId), [contactId]);

  return (
    <>
      <Form contact={currentContact} />
    </>
  );
}

export default EditContact;