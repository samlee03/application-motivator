import axios from 'axios';

const API_URL = "https://application-motivator-backend.onrender.com";

export async function registerUser(email, password) {
  const response = await axios.post(`${API_URL}/register`, { email, password });
  return response.data;
}

export async function loginUser(email, password) {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
}