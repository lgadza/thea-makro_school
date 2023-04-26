import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar(): JSX.Element {
  return (
    <Navbar bg="light" className='px-5' expand="lg">
      <Navbar.Brand href="/">
      <div className="sidebar-toggle d-flex justify-content-between">
        

             <div>
             <span></span>
              <span></span>
              <span></span>
             </div>
            </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/courses">Courses</Nav.Link>
          <Nav.Link href="/students">Students</Nav.Link>
          <Nav.Link href="/teachers">Teachers</Nav.Link>
          <Nav.Link href="/assignments">Assignments</Nav.Link>
          <Nav.Link href="/reports">Reports</Nav.Link>
          <Nav.Link href="/news">News</Nav.Link>
          <Nav.Link href="/tsss/catalog">Catalog</Nav.Link>
          <Nav.Link href="/myusosweb">My USOSWEB</Nav.Link>
          <Nav.Link href="/tsss/admin">Admin</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
