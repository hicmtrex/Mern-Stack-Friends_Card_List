import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  getTodosReducer,
  getTodoDetailsReducer,
  editTodoReducer,
  deleteTodoReducer,
  createTodoReducer,
} from './reducers/productReducers';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';

const reducers = combineReducers({
  //Todos Reducers CRUD
  getTodos: getTodosReducer,
  getTodoDetail: getTodoDetailsReducer,
  editTodo: editTodoReducer,
  deleteTodo: deleteTodoReducer,
  createTodo: createTodoReducer,
  //UserReducers Auth
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

const userInfoStorage = localStorage.getItem('Crud-train-user')
  ? JSON.parse(localStorage.getItem('Crud-train-user'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoStorage },
};

const middleware = [thunk];
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
