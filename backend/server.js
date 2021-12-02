import express from 'express';
import connectDb from './config/db.js';
import todoRoutes from './routes/todoRoutes.js';
import userRoutes from './routes/userRoutes.js';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import colors from 'colors';
import { errorHandler, notFound } from './middleware/errorHandler.js';

dotenv.config();
const app = express();
connectDb();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

//Routes
app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
