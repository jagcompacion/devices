import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const TopNavbar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg"
          width={30}
          height={30}
          alt="brand"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-collapse" />
      <Navbar.Collapse id="navbar-collapse">
        <Nav className="mr-auto" />
        <Nav>
          <Nav.Link as={Link} to="/wallet">
            PHP300.00
          </Nav.Link>
          <NavDropdown title="Jess Compacion " id="user-dropdown" alignRight>
            <NavDropdown.Item as={Link} to="/profile">
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/wallet">
              My Wallet
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/logout">
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
