
import { faBars, faHome, faUserGraduate, faLevelUpAlt, faChalkboardTeacher, faUsers, faBook, faBed, faFileAlt,faInfo, faIdCard,faBookOpen,faClipboard } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, ListGroup,Nav } from 'react-bootstrap';
import logo from "../../../assets/TM logo.png"
import NavigationBar from '../../components/NavigationBar';
import AdminSidebarMenu from './AdminSidebarMenu';

const Admin = () => {
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
      <Container className='admin'>
        {/* <NavigationBar/> */}
        <Row>
          <Col md={2}>
          <AdminSidebarMenu/>
          </Col>
          <Col md={10}>
          <h1 className='text-start'>Louis</h1>
            {/* <NavigationBar/> */}
          </Col>
        </Row>
      </Container>
  );
};

export default Admin;
