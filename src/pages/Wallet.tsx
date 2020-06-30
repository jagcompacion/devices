import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const Wallet: React.FC = () => {
  return (
    <Row className="justify-content-center">
      <Col lg="5">
        <div className="text-center mb-5">
          <div>Your Balance</div>
          <h1>P300.00</h1>
          <Button size="sm">Add more</Button>
        </div>
        <h4 className="mb-3">History</h4>
        <div className="px-3 py-2 d-flex align-items-center bg-light">
          <div className="text-center mr-3">
            <div>SEP</div>
            <h5 className="mb-0">30</h5>
          </div>
          <div className="mr-auto">
            <div>
              Order Complete
              <br />
              <small>0190290</small>
            </div>
          </div>
          <div>
            <h4 className="mb-0">
              <span className="text-danger">-</span>P18.00
            </h4>
          </div>
        </div>
        <div className="px-3 py-2 d-flex align-items-center">
          <div className="text-center mr-3">
            <div>JUN</div>
            <h5 className="mb-0">30</h5>
          </div>
          <div className="mr-auto">
            <div>
              Order Progress
              <br />
              <small>0190290</small>
            </div>
          </div>
          <div>
            <h4 className="mb-0">
              <span className="text-danger">-</span>P20.00
            </h4>
          </div>
        </div>
        <div className="px-3 py-2 d-flex align-items-center bg-light">
          <div className="text-center mr-3">
            <div>MAR</div>
            <h5 className="mb-0">30</h5>
          </div>
          <div className="mr-auto">
            <div>
              Paypal
              <br />
              <small>0190290</small>
            </div>
          </div>
          <div>
            <h4 className="mb-0">
              <span className="text-success">+</span>P300.00
            </h4>
          </div>
        </div>
        <Button className="mt-4" block>
          View all
        </Button>
      </Col>
    </Row>
  );
};

export default Wallet;
