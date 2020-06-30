import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, ProgressBar } from 'react-bootstrap';

const Orders: React.FC = () => {
  return (
    <>
      <div className="d-flex align-items-center mb-4">
        <h3 className="mb-0 mr-auto">Orders</h3>
        <Button as={Link} to="/orders/new">
          New Order
        </Button>
      </div>
      <Table striped hover>
        <thead>
          <tr>
            <th style={{ width: '10%' }}>Order No.</th>
            <th style={{ width: '50%' }}>Address</th>
            <th style={{ width: '15%' }}>Assigned</th>
            <th className="text-center" style={{ width: '15%' }}>
              Due Date
            </th>
            <th className="text-right">Price(PHP)</th>
            <th className="text-center" style={{ width: '10%' }}>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/orders/10010">10010</Link>
            </td>
            <td>
              Cecilia Chapman 711-2880 Nulla St.
              <br />
              Mankato Mississippi 96522
              <br />
            </td>
            <td>Marlon Pamisa</td>
            <td className="text-center">Dec 14, 2020</td>
            <td className="text-right">100.00</td>
            <td>
              <ProgressBar now={60} label="60%" variant="warning" />
            </td>
          </tr>
          <tr>
            <td>12562</td>
            <td>
              Cecilia Chapman 711-2880 Nulla St.
              <br />
              Mankato Mississippi 96522
            </td>
            <td>Jess Compacion</td>
            <td className="text-center">Dec 14, 2020</td>
            <td className="text-right">200.00</td>
            <td>
              <ProgressBar now={30} label="30%" variant="warning" />
            </td>
          </tr>
          <tr>
            <td>22213</td>
            <td>
              Iris Watson P.O. Box 283 8562 Fusce Rd.
              <br />
              Frederick Nebraska 20620
            </td>
            <td>Joniel Dy</td>
            <td className="text-center">Dec 14, 2020</td>
            <td className="text-right">50.00</td>
            <td>
              <ProgressBar now={10} label="10%" variant="warning" />
            </td>
          </tr>
          <tr>
            <td>35003</td>
            <td>
              Celeste Slater 606-3727 Ullamcorper. Street
              <br />
              Roseville NH 11523
              <br />
            </td>
            <td>Daryl Balangigue</td>
            <td className="text-center">Dec 14, 2020</td>
            <td className="text-right">35.00</td>
            <td>
              <ProgressBar now={90} label="90%" variant="success" />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Orders;
