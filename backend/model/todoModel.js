import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
