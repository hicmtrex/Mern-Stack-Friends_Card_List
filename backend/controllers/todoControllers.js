import asyncHandler from 'express-async-handler';
import Todo from '../model/todoModel.js';

export const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({});

  if (todos) {
    res.status(200).json(todos);
  } else {
    res.status(404);
    throw new Error('todos Not Found');
  }
});

export const getTodoById = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404);
    throw new Error('todo Not Found');
  }
});

export const createTodo = asyncHandler(async (req, res) => {
  const { name, email, image, img, job, phone } = req.body;
  const todo = new Todo({ name, email, image, img, job, phone });

  if (todo) {
    await todo.save();
    res.status(201).json(todo);
  } else {
    res.status(500);
    throw new Error('You are not allowed!');
  }
});

export const uploadTodo = asyncHandler(async (req, res) => {
  const { name, email, image, img, job, phone, description } = req.body;
  const todo = await Todo.findById(req.params.id);

  if (todo) {
    (todo.name = name),
      (todo.email = email),
      (todo.image = image),
      (todo.img = img),
      (todo.job = job),
      (todo.phone = phone),
      (todo.description = description);
  } else {
    res.status(500);
    throw new Error('You are not allowed!');
  }
  const updatedTodo = await todo.save();
  res.status(201).json(updatedTodo);
});

export const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (todo) {
    await todo.remove();
    res.status(200).json('Todo removed');
  } else {
    res.status(500);
    throw new Error('You are not allowed!');
  }
});
