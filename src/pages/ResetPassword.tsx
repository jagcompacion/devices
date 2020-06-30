import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const ResetPassword: React.FC = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col sm="4">
          <Form>
            <h4 className="mb-3">Reset Password</h4>
            <Form.Group>
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Retype Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="mt-4" type="submit" block>
              Reset Password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;
