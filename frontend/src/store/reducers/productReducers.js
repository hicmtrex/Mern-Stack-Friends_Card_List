import {
  DELETE_TODO_FAIL,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  EDIT_TODO_FAIL,
  EDIT_TODO_REQUEST,
  EDIT_TODO_RESET,
  EDIT_TODO_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_BYID_FAIL,
  GET_PRODUCT_BYID_REQUEST,
  GET_PRODUCT_BYID_SUCCESS,
  TODO_CREATE_FAIL,
  TODO_CREATE_REQUEST,
  TODO_CREATE_RESET,
  TODO_CREATE_SUCCESS,
} from '../constants/productConstants';

export const getTodosReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { loading: true, todos: [] };
    case GET_PRODUCTS_SUCCESS:
      return { loading: false, todos: action.payload };
    case GET_PRODUCTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getTodoDetailsReducer = (state = { todo: {} }, action) => {
  switch (action.type) {
    case GET_PRODUCT_BYID_REQUEST:
      return { ...state, loading: true };
    case GET_PRODUCT_BYID_SUCCESS:
      return { loading: false, todo: action.payload };
    case GET_PRODUCT_BYID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createTodoReducer = (state = { todo: {} }, action) => {
  switch (action.type) {
    case TODO_CREATE_REQUEST:
      return { loading: true };
    case TODO_CREATE_SUCCESS:
      return { loading: false, todo: action.payload, success: true };
    case TODO_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case TODO_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const editTodoReducer = (state = { todo: {} }, action) => {
  switch (action.type) {
    case EDIT_TODO_REQUEST:
      return { loading: true };
    case EDIT_TODO_SUCCESS:
      return { loading: false, todo: action.payload, success: true };
    case EDIT_TODO_FAIL:
      return { loading: false, error: action.payload };
    case EDIT_TODO_RESET:
      return { todo: {} };
    default:
      return state;
  }
};

export const deleteTodoReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_TODO_REQUEST:
      return { loading: true };
    case DELETE_TODO_SUCCESS:
      return { loading: false, success: true };
    case DELETE_TODO_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
