import express from 'express';
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  uploadTodo,
} from '../controllers/todoControllers.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.route('/').post(protect, createTodo).get(getTodos);
router
  .route('/:id')
  .get(getTodoById)
  .delete(protect, deleteTodo)
  .put(protect, uploadTodo);

export default router;
