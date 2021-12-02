import React, { useEffect } from 'react';
import { Carousel, Col, Image, ListGroup, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletTodo, getProductById } from '../store/actions/productActions';
import Loader from '../components/Loader';

const TodoScreen = ({ match, history }) => {
  const { todo, loading } = useSelector((state) => state.getTodoDetail);
  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const { id } = match.params;

  useEffect(() => {
    dispatch(getProductById(id));
  }, [match]);

  const deleteTodoHandler = (todoId) => {
    if (window.confirm('Are you sure')) {
      dispatch(deletTodo(todoId));
      history.push('/');
    }
  };

  if (loading) return <Loader />;
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>

      <Row className='mt-2'>
        <Col md={6}>
          <Carousel>
            <Carousel.Item>
              <Image
                style={{ height: '350px' }}
                className='d-block w-100'
                src={todo?.image}
                alt='First slide'
                fluid
              />
              <Carousel.Caption>{todo?.name}</Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                style={{ height: '350px' }}
                className='d-block w-100'
                src={todo?.img}
                alt='First slide'
                fluid
              />
              <Carousel.Caption>{todo?.name}</Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={6}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{todo?.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>email : {todo?.email}</ListGroup.Item>
            <ListGroup.Item>phone : {todo?.phone}</ListGroup.Item>
            <ListGroup.Item>Job : {todo?.job}</ListGroup.Item>
            <ListGroup.Item>Description : {todo?.description}</ListGroup.Item>
            <ListGroup.Item>
              <Link
                to={userInfo ? `/edit-todo/${id}` : ''}
                className=' btn btn-info col-5 ms-2'
              >
                <i className='fas fa-edit'></i>
              </Link>

              <Button
                disabled={!userInfo}
                onClick={() => deleteTodoHandler(todo._id)}
                className=' btn btn-danger col-5 ms-2'
              >
                <i className='fas fa-trash'></i>
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default TodoScreen;
