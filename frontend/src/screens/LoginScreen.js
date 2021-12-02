import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { userLogin } from '../store/actions/userActions';

const LoginScreen = ({ history }) => {
  const { userInfo, error, loading } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  }, [history, userInfo]);

  return (
    <FormContainer>
      <h1 className='text-center'>Sign up</h1>
      {error && <Message>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
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

        <Button type='submit' className='col-12'>
          Sign in
        </Button>
      </Form>
    </FormContainer>
  );
};

export default LoginScreen;
