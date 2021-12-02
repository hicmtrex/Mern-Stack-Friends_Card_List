import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';
import { getProducts } from '../store/actions/productActions';

const HomeScreen = () => {
  const { todos, loading, error } = useSelector((state) => state.getTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) return <Loader />;
  return (
    <Row className='my-3'>
      <h1 className='text-center mb-3'>Friends Todolist </h1>
      {error && <Message>{error}</Message>}
      {todos.map((todo) => (
        <Col key={todo._id} sm={12} md={6} lg={4} xl={3}>
          <Product todo={todo} />
        </Col>
      ))}
    </Row>
  );
};

export default HomeScreen;
