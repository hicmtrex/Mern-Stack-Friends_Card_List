import asyncHandler from 'express-async-handler';
import User from '../model/userModel.js';
import jwt from 'jsonwebtoken';

export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  let user = new User({ name, email, password });

  if (user) {
    user = await user.save();
    res.status(201).json(user);
  } else {
    res.status(400);
    throw new Error('User not math');
  }
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
    expiresIn: '7d',
  });

  if (user && (await user.comparePassword(password))) {
    res.status(200).json({
      name: user.name,
      email: user.email,
      password: user.password,
      token,
    });
  } else {
    res.status(402);
    throw new Error('Email or Password is Not Valid');
  }
});
