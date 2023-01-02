import '../css/ContactTitle.css'

import { Outlet, useNavigate } from 'react-router-dom';

import ContactList from './ContactList'
import useContacts from '../hooks/useContacts'

function AppContact() {
  const navigate = useNavigate();
  const { contact, count, setCount, onDelete } = useContacts();
    
    return (
      <>
          <ContactList contact={contact} onDelete={onDelete} onEdit={navigate}/>
          <button className='add-btn' onClick={() => navigate('create')}>Add</button>
          <Outlet context={[count, setCount]} />
      </>
    )
  }
  
export default AppContact