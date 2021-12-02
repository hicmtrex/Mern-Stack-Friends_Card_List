import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/actions/userActions';

const Header = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Friends-Todolist</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <LinkContainer to='/add_todo'>
              <Nav.Link>Add Todo</Nav.Link>
            </LinkContainer>
          </Nav>
          {userInfo ? (
            <Nav>
              <Nav.Link>{userInfo?.name}</Nav.Link>
              <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <LinkContainer to='/signup'>
                <Nav.Link>Sign up</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>Sign in</Nav.Link>
              </LinkContainer>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
