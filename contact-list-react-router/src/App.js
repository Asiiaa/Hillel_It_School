import { Navigate, Route, Routes } from 'react-router-dom';

import AppContact from './components/AppContact'
import EditContact from './components/EditContact';
import Form from './components/Form';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/contacts" element={<AppContact />}>
          <Route path=":contactId" element={<EditContact />} />
          <Route path="create" element={<Form />} />
        </Route>
        <Route path="/" element={<Navigate to="/contacts" />} />
      </Routes>
    </>
  );
}