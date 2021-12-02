import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../store/actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const RegisterScreen = ({ history }) => {
  const { userInfo, error, loading } = useSelector(
    (state) => state.userRegister
  );
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return alert('Password not match');
    dispatch(userRegister(name, email, password));
  };

  return (
    <FormContainer>
      <h1 className='text-center'>Sign up</h1>
      {error && <Message>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name' className='mb-2'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            value={name}
            type='text'
            placeholder='username'
            required
          />
        </Form.Group>
        <Form.Group controlId='email' className='mb-2'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='email'
            placeholder='email'
            required
          />
        </Form.Group>
        <Form.Group controlId='password' className='mb-2'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type='password'
            placeholder='password'
            required
          />
        </Form.Group>
        <Form.Group controlId='confirm password' className='mb-3'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type='password'
            placeholder='confirm password'
            required
          />
        </Form.Group>

        <Button type='submit' className='col-12'>
          Sing Up
        </Button>
      </Form>
    </FormContainer>
  );
};

export default RegisterScreen;
