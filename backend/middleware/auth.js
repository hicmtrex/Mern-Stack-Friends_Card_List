import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import User from '../model/userModel.js';

export const protect = asyncHandler(async (req, res, next) => {
  const { authorization } = req.headers;
  let token;
  if (authorization && authorization.startsWith('Bearer')) {
    try {
      token = authorization.split(' ')[1];
      const decodedUser = jwt.verify(token, process.env.SECRET_KEY);
      req.user = await User.findById(decodedUser.id);
      next();
    } catch (error) {
      console.log(error.message);
      res.status(401);
      throw new Error('Not authorized');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('token failed');
  }
});
