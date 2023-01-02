import axios from 'axios';

const CONTACTS_API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';
export default axios.create({
  baseURL: CONTACTS_API_URL,
});