import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import AddTodoScreen from './screens/AddTodoScreen';
import TodoScreen from './screens/TodoScreen';
import EditTodoScreen from './screens/EditTodoScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <main className='py-3'>
          <Container>
            <Route exact path='/' component={HomeScreen} />
            <Route path='/add_todo' component={AddTodoScreen} />
            <Route path='/todo/:id' component={TodoScreen} />
            <Route path='/edit-todo/:id' component={EditTodoScreen} />
            <Route path='/signup' component={RegisterScreen} />
            <Route path='/login' component={LoginScreen} />
          </Container>
        </main>
      </Switch>

      <footer className='text-center mt-5'>Hicmtrex &copy; 2021</footer>
    </Router>
  );
};

export default App;
