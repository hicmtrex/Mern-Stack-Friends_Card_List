import React from 'react';
import { Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
  return (
    <Row className='justify-content-center mt-5'>
      <Col md={4}>{children}</Col>
    </Row>
  );
};

export default FormContainer;
