import axios from 'axios';
import {
  DELETE_TODO_FAIL,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  EDIT_TODO_FAIL,
  EDIT_TODO_REQUEST,
  EDIT_TODO_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_BYID_FAIL,
  GET_PRODUCT_BYID_REQUEST,
  GET_PRODUCT_BYID_SUCCESS,
  TODO_CREATE_FAIL,
  TODO_CREATE_REQUEST,
  TODO_CREATE_SUCCESS,
} from '../constants/productConstants';

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });
  try {
    const { data } = await axios.get('/api/todos');

    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductById = (id) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_BYID_REQUEST });
  try {
    const { data } = await axios.get(`/api/todos/${id}`);

    dispatch({ type: GET_PRODUCT_BYID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_BYID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createTodo = (todo) => async (dispatch, getState) => {
  dispatch({ type: TODO_CREATE_REQUEST });
  try {
    const { data } = await axios.post(`/api/todos`, todo, {
      headers: {
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    });

    dispatch({ type: TODO_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TODO_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const editTodo = (todo) => async (dispatch, getState) => {
  try {
    dispatch({ type: EDIT_TODO_REQUEST });

    const { data } = await axios.put(`/api/todos/${todo._id}`, todo, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    });

    dispatch({ type: EDIT_TODO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: EDIT_TODO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletTodo = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_TODO_REQUEST });

    await axios.delete(`/api/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    });

    dispatch({ type: DELETE_TODO_SUCCESS });
  } catch (error) {
    dispatch({
      type: DELETE_TODO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
