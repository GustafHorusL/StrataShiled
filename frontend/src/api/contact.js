import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  headers: { 'Content-Type': 'application/json' },
});

export async function submitContact(payload) {
  const { data } = await api.post('/contact', payload);
  return data;
}
