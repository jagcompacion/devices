import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Register: React.FC = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col sm="4">
          <Form>
            <h4 className="mb-3">Register</h4>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">We{"'"}ll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Full name</Form.Label>
              <Form.Control placeholder="Enter fullname" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Retype Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group>
              <Form.Check type="checkbox" label="Accept terms and condition." />
            </Form.Group>
            <Button className="mt-4" type="submit" block>
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
