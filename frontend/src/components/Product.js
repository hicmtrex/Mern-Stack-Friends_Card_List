import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ todo }) => {
  return (
    <Card className='my-3 p-2 rounded shadow' style={{ height: '430px' }}>
      <Link to={`/todo/${todo._id}`}>
        <Card.Img variant='top' style={{ height: '200px' }} src={todo.image} />
      </Link>
      <Card.Body>
        <Card.Title as='h5'>
          <strong>{todo.name}</strong>
        </Card.Title>
        <Card.Text as='div'> {todo.job}</Card.Text>
        <Card.Text as='div'>Phone: {todo.phone}</Card.Text>
        <Card.Text as='div' className='mt-2'>
          {todo?.description?.substring(0, 75)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
