import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from '../store/actions/productActions';

const AddTodoScreen = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [img, setImg] = useState('');
  const [job, setJob] = useState('');
  const [phone, setPhone] = useState(216);
  const [description, setDescription] = useState('');
  const { success } = useSelector((state) => state.createTodo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      history.push('/');
    }
  }, [success]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(createTodo({ name, email, image, img, job, phone, description }));
  };

  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name' className='mb-2'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            value={name}
            type='text'
            placeholder='full name'
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
        <Form.Group controlId='image' className='mb-2'>
          <Form.Label>Image url</Form.Label>
          <Form.Control
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type='text'
            placeholder='image url'
            required
          />
        </Form.Group>
        <Form.Group controlId='image' className='mb-2'>
          <Form.Label>Image2 url</Form.Label>
          <Form.Control
            onChange={(e) => setImg(e.target.value)}
            value={img}
            type='text'
            placeholder='image2 url'
            required
          />
        </Form.Group>
        <Form.Group controlId='image' className='mb-2'>
          <Form.Label>Job</Form.Label>
          <Form.Control
            onChange={(e) => setJob(e.target.value)}
            value={job}
            type='text'
            placeholder='job'
            required
          />
        </Form.Group>
        <Form.Group controlId='phone' className='mb-2'>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type='number'
            placeholder='phone'
            required
          />
        </Form.Group>
        <Form.Group controlId='description' className='mb-3'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type='description'
            placeholder='description'
            required
          />
        </Form.Group>
        <Button type='submit' className='col-12'>
          Add Todo
        </Button>
      </Form>
    </FormContainer>
  );
};

export default AddTodoScreen;
