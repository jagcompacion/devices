import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const ForgotPassword: React.FC = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col sm="4">
          <Form>
            <h4 className="mb-3">Forgot Password</h4>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">We{"'"}ll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Button className="mt-4" type="submit" block>
              Send it to my email
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
