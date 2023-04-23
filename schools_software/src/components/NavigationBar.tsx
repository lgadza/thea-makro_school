import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar(): JSX.Element {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">School Software</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/courses">Courses</Nav.Link>
          <Nav.Link href="/students">Students</Nav.Link>
          <Nav.Link href="/teachers">Teachers</Nav.Link>
          <Nav.Link href="/assignments">Assignments</Nav.Link>
          <Nav.Link href="/reports">Reports</Nav.Link>
          <Nav.Link href="/news">News</Nav.Link>
          <Nav.Link href="/catalog">Catalog</Nav.Link>
          <Nav.Link href="/myusosweb">My USOSWEB</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
