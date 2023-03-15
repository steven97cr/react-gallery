import axios from 'axios'
import API_KEY from './API_KEY';

const API_URL_LOGIN = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+API_KEY;
const API_URL_REGISTER = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+API_KEY;

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL_REGISTER, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL_LOGIN, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
