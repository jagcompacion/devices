import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Profile: React.FC = () => {
  return (
    <Row className="justify-content-center">
      <Col lg="4">
        <Form>
          <h4 className="mb-3">Profile</h4>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" readOnly />
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

          <Button className="mt-4" type="submit" block>
            Save profile
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Profile;
