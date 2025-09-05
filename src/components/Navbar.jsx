import React from 'react';
import { Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <BootstrapNavbar.Brand as={Link} to="/">SIS</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Students</Nav.Link>
          <Nav.Link as={Link} to="/attendance">Attendance</Nav.Link>
          <Nav.Link as={Link} to="/grades">Grades</Nav.Link>
          <Nav.Link as={Link} to="/financial">Financial</Nav.Link>
          <Nav.Link as={Link} to="/parent-portal">Parent Portal</Nav.Link>
          <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default Navbar;