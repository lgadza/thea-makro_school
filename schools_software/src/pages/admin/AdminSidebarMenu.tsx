
import { faBars, faHome, faUserGraduate, faLevelUpAlt, faChalkboardTeacher, faUsers, faBook, faBed, faFileAlt,faInfo, faIdCard,faBookOpen,faClipboard, faGauge } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, ListGroup,Nav } from 'react-bootstrap';
import logo from "../../../assets/TM logo.png"
import NavigationBar from '../../components/NavigationBar';
import Image from '../../components/Image';
import md_logo_small from "../../assets/md_logo_small.png"

const AdminSidebarMenu = () => {
  const [studentOpen, setStudentOpen] = useState(false);

  const toggleStudent = () => {
    setStudentOpen(!studentOpen);
  }
  const [subjectsOpen, setSubjectsOpen] = useState(false);

  const toggleSubjects = () => {
    setSubjectsOpen(!subjectsOpen);
  }
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    

        
          <div className="content_bg sidebar">
            <div className='d-flex justify-content-between align-items-center'>
              <img
    src={md_logo_small}
    alt="makrodex_logo"
    style={{ width: `${50}px`, height: `${50}px`, borderRadius: "0%" }}
    className="img_component"
  />
              <FontAwesomeIcon icon={faBars} style={{fontSize:"1.2rem",color:"rgb(34, 52, 110)"}}/>
            </div>
            
            <div className="sidebar-menu">
            <Nav className="flex-column">
           
               <Link to="/" className="nav-link d-flex px-0 justify-content-between align-items-center" onClick={toggleMenu}>
                 <div>
                  <FontAwesomeIcon icon={faGauge} className="me-2" />
                 <span>Dashboard</span>
                 </div>
                 <FontAwesomeIcon icon={faChevronRight} className="me-2" />
               </Link>
               <Nav.Item>
                 <Nav.Link onClick={toggleMenu}>
                   <FontAwesomeIcon icon={faUserGraduate} className="me-2" />
                   Manage Session
                 </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                 <Nav.Link onClick={(e)=>{
                    e.stopPropagation()
                    toggleStudent()
                 }}>
                   <FontAwesomeIcon icon={faUsers} className="me-2" />
                   <span>

                   Students
                   </span>
                   <FontAwesomeIcon icon={studentOpen ? faChevronDown : faChevronRight} className="ms-2" />
                 </Nav.Link>
                
                   {studentOpen && (
                    <ListGroup variant="flush" className="flex-column align-items-start">
                      <ListGroup.Item>
                        <Link to="/admit-student">
                        <FontAwesomeIcon icon={faUserGraduate} className="me-2" />
                            Admit Student</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/admit-bulk" className='nowrap'><FontAwesomeIcon icon={faUsers} className="me-2" />Admit in-Bulk</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/student-info"> 
                        <FontAwesomeIcon icon={faInfo} className="me-2" />
                        Student Info</Link>
                      </ListGroup.Item>
                    </ListGroup>
                  )}
               </Nav.Item>
               <Nav.Item>
                 <Nav.Link onClick={toggleMenu}>
                   <FontAwesomeIcon icon={faLevelUpAlt} className="me-2" />
                   Level
                 </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                 <Nav.Link onClick={toggleMenu}>
                   <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2" />
                   Teachers
                 </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                 <Nav.Link onClick={toggleMenu}>
                   <FontAwesomeIcon icon={faUsers} className="me-2" />
                   Parents
                 </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                 <Nav.Link onClick={toggleMenu}>
                   <Link to="librarians"><FontAwesomeIcon icon={faBook} className="me-2" />
                   <span>Librarians</span></Link>
                 </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                 <Nav.Link onClick={toggleMenu}>
                 <Link to="/hostel">
                    <FontAwesomeIcon icon={faHome} className="me-2" />
                    Hostel Manager
                  </Link>
                 </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                 <Nav.Link onClick={toggleMenu}>
                 <Link to="/clubs">
                    <FontAwesomeIcon icon={faUsers} className="me-2" />
                    School Clubs
                  </Link>
                 </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                 <Nav.Link onClick={toggleMenu}>
                 <Link to="/exams">
                    <FontAwesomeIcon icon={faClipboard} className="me-2" />
                    Exams
                  </Link>
                 </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                 <Nav.Link onClick={toggleSubjects}>

                    <FontAwesomeIcon icon={faBookOpen} className="me-2" />
                    Subjects
                   <FontAwesomeIcon icon={subjectsOpen ? faChevronDown : faChevronRight} className="ms-2" />

            
                 </Nav.Link>
                 {subjectsOpen && (
                    <ListGroup variant="flush" className="flex-column align-items-start">
                      <ListGroup.Item>
                        <Link to="/maths">
                        <FontAwesomeIcon icon={faBook} className="me-2" />
                            Mathematics</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/chemistry"><FontAwesomeIcon icon={faBook} className="me-2" />Chemistry</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/biology"> 
                        <FontAwesomeIcon icon={faBook} className="me-2" />
                        Biology</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/physics"> 
                        <FontAwesomeIcon icon={faBook} className="me-2" />
                        Physics</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/history"> 
                        <FontAwesomeIcon icon={faBook} className="me-2" />
                        History</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/geology"> 
                        <FontAwesomeIcon icon={faBook} className="me-2" />
                        Geology</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/agriculture"> 
                        <FontAwesomeIcon icon={faBook} className="me-2" />
                        Agriculture</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/tg"> 
                        <FontAwesomeIcon icon={faBook} className="me-2" />
                        TG</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/fashion"> 
                        <FontAwesomeIcon icon={faBook} className="me-2" />
                        Fashion</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/woodwork"> 
                        <FontAwesomeIcon icon={faBook} className="me-2" />
                        Wood work</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/accounting"> 
                        <FontAwesomeIcon icon={faBook} className="me-2" />
                        Accounting</Link>
                      </ListGroup.Item>
                    </ListGroup>
                  )}
               </Nav.Item>
               <Nav.Item>
                 <Nav.Link onClick={toggleMenu}>
                 <Link to="/id-cards">
                    <FontAwesomeIcon icon={faIdCard} className="me-2" />
                    Generate ID Cards
                  </Link>
                 </Nav.Link>
               </Nav.Item>
               </Nav>
              
            </div>
    </div>
        
          
        
          
       
   
  );
};

export default AdminSidebarMenu;
