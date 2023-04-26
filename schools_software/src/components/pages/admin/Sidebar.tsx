import { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUserGraduate, faLevelUpAlt, faChalkboardTeacher, faUsers, faBook, faBed, faFileAlt, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AdminSidebarMenu = (): JSX.Element  => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="sidebar-menu" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>
          <Navbar.Brand href="/">School Software</Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid>
        <Row>
          <Col sm={2} id="sidebar-menu" className={showMenu ? "active" : ""}>
            <Nav className="flex-column">
              <Link to="/" className="nav-link" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Dashboard
              </Link>
              <Nav.Item>
                <Nav.Link onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faUserGraduate} className="mr-2" />
                  Manage Session
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faUsers} className="mr-2" />
                  Students
                </Nav.Link>
                <ListGroup>
                  <Link to="/admit-student" className="list-group-item" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faUserGraduate} className="mr-2" />
                    Admit Student
                  </Link>
                  <Link to="/admit-bulk-student" className="list-group-item" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faUserGraduate} className="mr-2" />
                    Admit Bulk Student
                  </Link>
                  <Link to="/student-information" className="list-group-item" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faUserGraduate} className="mr-2" />
                    Student Information
                  </Link>
                </ListGroup>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faLevelUpAlt} className="mr-2" />
                  Level
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2" />
                  Teachers
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faUsers} className="mr-2" />
                  Parents
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faBook} className="mr-2" />
                  Librarians
                </Nav.Link>
              </Nav.Item>
              </Nav>
              </Col>
              </Row>
              </Container>
              </>
  )}
  export default AdminSidebarMenu
