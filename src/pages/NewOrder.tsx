import React from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';

const Profile: React.FC = () => {
  return (
    <Row className="justify-content-center">
      <Col lg="7">
        <Form>
          <Row className="mb-3">
            <Col lg="7">
              <h5>Address information</h5>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="Enter address" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Country</Form.Label>
                <Form.Control placeholder="Enter country" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Company</Form.Label>
                <Form.Control placeholder="Enter company" />
              </Form.Group>
            </Col>
          </Row>

          <div>
            <h5 className="mb-3">Order type</h5>
            <Row>
              <Col xs="6" lg="4">
                <Card className="mb-3">
                  <Card.Body className="text-center">
                    <Card.Subtitle className="mb-2">Interior</Card.Subtitle>
                    <Card.Title as="h2">P7</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="6" lg="4">
                <Card className="mb-3">
                  <Card.Body className="text-center">
                    <Card.Subtitle className="mb-2">Exterior</Card.Subtitle>
                    <Card.Title as="h2">P10</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="6" lg="4">
                <Card className="mb-3">
                  <Card.Body className="text-center">
                    <Card.Subtitle className="mb-2">Data entry</Card.Subtitle>
                    <Card.Title as="h2">P14</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="6" lg="4">
                <Card className="mb-3">
                  <Card.Body className="text-center">
                    <Card.Subtitle className="mb-2">Condition report</Card.Subtitle>
                    <Card.Title as="h2">P20</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

          <div>
            <h5 className="mb-3">Rush type</h5>
            <Row>
              <Col xs="6" lg="4">
                <Card className="mb-3">
                  <Card.Body className="text-center">
                    <Card.Subtitle className="mb-2">Normal</Card.Subtitle>
                    <Card.Title as="h2">Free</Card.Title>
                    <Card.Text>Within 24 hours</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="6" lg="4">
                <Card className="mb-3">
                  <Card.Body className="text-center">
                    <Card.Subtitle className="mb-2">Rush</Card.Subtitle>
                    <Card.Title as="h2">P5</Card.Title>
                    <Card.Text>Estimated 6 hours</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="6" lg="4">
                <Card className="mb-3">
                  <Card.Body className="text-center">
                    <Card.Subtitle className="mb-2">Super Rush</Card.Subtitle>
                    <Card.Title as="h2">P10</Card.Title>
                    <Card.Text>Estimated 2 hours</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

          <h5 className="mb-0">Total</h5>
          <h1>P300</h1>

          <Button className="mt-4" type="submit" block>
            Create Order
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Profile;
