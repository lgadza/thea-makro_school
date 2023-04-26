// import { useState } from 'react';
// import { Container, Row, Col, Navbar, Nav, ListGroup } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUserGraduate, faLevelUpAlt, faChalkboardTeacher, faUsers, faBook, faBed, faFileAlt, faIdCard,faBookOpen,faClipboard } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';

// const AdminSidebarMenu = (): JSX.Element  => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
    
//       <Container fluid>
//         <Row>
//           <Col sm={2} id="sidebar-menu" className={showMenu ? "active" : ""}>
//             <Nav className="flex-column">
//               <Link to="/" className="nav-link" onClick={toggleMenu}>
//                 <FontAwesomeIcon icon={faHome} className="mr-2" />
//                 Dashboard
//               </Link>
//               <Nav.Item>
//                 <Nav.Link onClick={toggleMenu}>
//                   <FontAwesomeIcon icon={faUserGraduate} className="mr-2" />
//                   Manage Session
//                 </Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link onClick={toggleMenu}>
//                   <FontAwesomeIcon icon={faUsers} className="mr-2" />
//                   Students
//                 </Nav.Link>
//                 <ListGroup>
//                   <Link to="/admit-student" className="list-group-item" onClick={toggleMenu}>
//                     <FontAwesomeIcon icon={faUserGraduate} className="mr-2" />
//                     Admit Student
//                   </Link>
//                   <Link to="/admit-bulk-student" className="list-group-item" onClick={toggleMenu}>
//                     <FontAwesomeIcon icon={faUserGraduate} className="mr-2" />
//                     Admit Bulk Student
//                   </Link>
//                   <Link to="/student-information" className="list-group-item" onClick={toggleMenu}>
//                     <FontAwesomeIcon icon={faUserGraduate} className="mr-2" />
//                     Student Information
//                   </Link>
//                 </ListGroup>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link onClick={toggleMenu}>
//                   <FontAwesomeIcon icon={faLevelUpAlt} className="mr-2" />
//                   Level
//                 </Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link onClick={toggleMenu}>
//                   <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2" />
//                   Teachers
//                 </Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link onClick={toggleMenu}>
//                   <FontAwesomeIcon icon={faUsers} className="mr-2" />
//                   Parents
//                 </Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link onClick={toggleMenu}>
//                   <Link to="librarians"><FontAwesomeIcon icon={faBook} className="mr-2" />
//                   <span>Librarians</span></Link>
//                 </Nav.Link>
//               </Nav.Item>
//               </Nav>
//               </Col>
//               <Col sm={10}></Col>
//               </Row>
//               </Container>
              
//   )}
//   export default AdminSidebarMenu
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const AdminSidebarMenu = () => {
  const [studentOpen, setStudentOpen] = useState(false);

  const toggleStudent = () => {
    setStudentOpen(!studentOpen);
  }

  return (
      <Container>
        <Row>
          <Col md={2}>
          <div className="sidebar">
            <div className="sidebar-toggle">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="sidebar-menu">
              <ListGroup>
                <ListGroup.Item>
                  <Link to="/librarians">
                    <FontAwesomeIcon icon={faBook} className="mr-2" />
                    Librarians
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/hostel">
                    <FontAwesomeIcon icon={faHome} className="mr-2" />
                    Hostel Manager
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/clubs">
                    <FontAwesomeIcon icon={faUsers} className="mr-2" />
                    School Clubs
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/exams">
                    <FontAwesomeIcon icon={faClipboard} className="mr-2" />
                    Exams
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/subjects">
                    <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
                    Subjects
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item onClick={toggleStudent}>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <FontAwesomeIcon icon={studentOpen ? faChevronDown : faChevronRight} className="mr-2" />
                      Students
                    </div>
                    <div className="badge badge-pill badge-primary">3</div>
                  </div>
                  {studentOpen && (
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <Link to="/admit-student">Admit Student</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/admit-bulk">Admit Bulk Student</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/student-info">Student Information</Link>
                      </ListGroup.Item>
                    </ListGroup>
                  )}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/id-cards">
                    <FontAwesomeIcon icon={faIdCard} className="mr-2" />
                    Generate ID Cards
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </div>
    </div>
          </Col>
          <Col md={10}>
            {/* Main Content */}
          </Col>
        </Row>
      </Container>
  );
};

export default AdminSidebarMenu;
