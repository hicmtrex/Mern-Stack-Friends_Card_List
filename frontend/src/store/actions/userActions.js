import axios from 'axios';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstants';

export const userLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const { data } = await axios.post(`/api/users/login`, {
      email,
      password,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('Crud-train-user', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userRegister = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const { data } = await axios.post(`/api/users`, {
      name,
      email,
      password,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    localStorage.setItem('Crud-train-user', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem('Crud-train-user');
  dispatch({ type: USER_LOGOUT });
  document.location.href = '/login';
};
