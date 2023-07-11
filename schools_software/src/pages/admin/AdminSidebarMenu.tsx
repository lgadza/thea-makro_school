
import { faBars, faHome, faUserGraduate, faLevelUpAlt, faChalkboardTeacher, faUsers, faBook, faBed, faFileAlt,faInfo, faIdCard,faBookOpen,faClipboard, faGauge, faPeopleGroup, faBuilding, faReceipt, faPenRuler, faCalendar, faClipboardUser, faClipboardCheck, faBus, faMessage, faUser } from '@fortawesome/free-solid-svg-icons';

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


  const [showDashboard, setShowDashboard] = useState(false);

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };
  const [showTeachers, setShowTeachers] = useState(false);

  const toggleTeachers = () => {
    setShowTeachers(!showTeachers);
  };
  const [showParents, setShowParents] = useState(false);

  const toggleParents = () => {
    setShowParents(!showParents);
  };
  const [showLibrary, setShowLibrary] = useState(false);

  const toggleLibrary = () => {
    setShowLibrary(!showLibrary);
  };
  const [showInventory, setShowInventory] = useState(false);

  const toggleInventory = () => {
    setShowInventory(!showInventory);
  };
  const [showClass, setShowClass] = useState(false);

  const toggleClass = () => {
    setShowClass(!showClass);
  };
  const [showClassRoutine, setShowClassRoutine] = useState(false);

  const toggleClassRoutine = () => {
    setShowClassRoutine(!showClassRoutine);
  };
  const [showSubjects, setShowSubjects] = useState(false);

  const toggleSubjects = () => {
    setShowSubjects(!showSubjects);
  };
  const [showAttendence, setShowAttendence] = useState(false);

  const toggleAttendence = () => {
    setShowAttendence(!showAttendence);
  };
  const [showExam, setShowExam] = useState(false);

  const toggleExam = () => {
    setShowExam(!showExam);
  };
  const [showTransport, setShowTransport] = useState(false);

  const toggleTransport = () => {
    setShowTransport(!showTransport);
  };
  const [showHostel, setShowHostel] = useState(false);

  const toggleHostel = () => {
    setShowHostel(!showHostel);
  };
  const [showMessages, setShowMessages] = useState(false);

  const toggleMessages = () => {
    setShowMessages(!showMessages);
  };
  const [showUsers, setShowUsers] = useState(false);

  const toggleUsers = () => {
    setShowUsers(!showUsers);
  };

  return (
    

        
          <div className="main_bg sidebar">
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
            <Nav.Item>
               <Link to=""
                className="nav-link d-flex px-0 justify-content-between align-items-center" 
                onClick={(e)=>{
                  e.stopPropagation()
                  toggleDashboard()
               }}
                >
                 <div>
                  <FontAwesomeIcon icon={faGauge} className="me-2" />
                 <span>Dashboard</span>
                 </div>
                 <FontAwesomeIcon  icon={showDashboard ? faChevronDown : faChevronRight}  className="me-2" />
               </Link>
               {showDashboard && (
                 <div className=" d-flex flex-column content_bg align-items-start">
                     
                 <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                 <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                     Admin</Link>
              
                 <Link to="/admit-bulk" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />Students</Link>
            
                 <Link to="/student-info" className='d-flex align-items-center nowrap px-2 py-2'> 
                 <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                 Teachers
                 </Link>
                 <Link to="/student-info" className='d-flex align-items-center nowrap px-2 py-2'> 
                 <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                 Parents
                 </Link>
               
             </div>
               )}
               </Nav.Item>
            <Nav.Item>
               <Link to="" className="nav-link d-flex px-0 justify-content-between align-items-center" 
               
              onClick={(e)=>{
                e.stopPropagation()
                toggleStudent()
             }}>
                 <div>
                  <FontAwesomeIcon icon={faUsers} className="me-2" />
                 <span>Students</span>
                 </div>
                 <FontAwesomeIcon  icon={studentOpen ? faChevronDown : faChevronRight}  className="me-2" />
               </Link>
               {studentOpen && (
                    <div className=" d-flex flex-column content_bg align-items-start">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                            All Students</Link>
                     
                        <Link to="/admit-bulk" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />Student Details</Link>
                   
                        <Link to="/student-info" className='d-flex align-items-center nowrap px-2 py-2'> 
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                        Student Admission
                        </Link>
                        <Link to="/student-info" className='d-flex align-items-center nowrap px-2 py-2'> 
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                        Admission Form 
                        </Link>
                      
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item>
               <Link to="" className="nav-link d-flex px-0 justify-content-between align-items-center"
               onClick={(e)=>{
                e.stopPropagation()
                toggleTeachers()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2" />
                 <span>Teachers</span>
                 </div>
                 <FontAwesomeIcon icon={showTeachers? faChevronDown : faChevronRight} className="me-2" />
               </Link>
               {showTeachers && (
                    <div className=" d-flex flex-column content_bg align-items-start">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                            All Teachers</Link>
                     
                        <Link to="/admit-bulk" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />Teachers Details</Link>
                   
                        <Link to="/student-info" className='d-flex align-items-center nowrap px-2 py-2'> 
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                        Add Teacher
                        </Link>
                        <Link to="/student-info" className='d-flex align-items-center nowrap px-2 py-2'> 
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                        Payment
                        </Link>
                      
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item>
               <Link to="" className="nav-link d-flex px-0 justify-content-between align-items-center"
                onClick={(e)=>{
                e.stopPropagation()
                toggleParents()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faPeopleGroup} className="me-2" />
                 <span>Parents</span>
                 </div>
                 <FontAwesomeIcon icon={showParents? faChevronDown : faChevronRight} className="me-2" />
               </Link>
               {showParents && (
                    <div className=" d-flex flex-column content_bg align-items-start">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                            All Parents</Link>
                     
                        <Link to="/admit-bulk" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />Parent Details</Link>
                   
                        <Link to="/parent-info" className='d-flex align-items-center nowrap px-2 py-2'> 
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                       Add Parent
                        </Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item>
               <Link to="" className="nav-link d-flex px-0 justify-content-between align-items-center"
                onClick={(e)=>{
                e.stopPropagation()
                toggleLibrary()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faBuilding} className="me-2" />
                 <span>Library</span>
                 </div>
                 <FontAwesomeIcon icon={showLibrary? faChevronDown : faChevronRight} className="me-2" />
               </Link>
                {showLibrary && (
                    <div className=" d-flex flex-column content_bg align-items-start">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                            All Books</Link>
                     
                        <Link to="/admit-bulk" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />Book Details</Link>
                   
                        <Link to="/student-info" className='d-flex align-items-center nowrap px-2 py-2'> 
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                        Add New Book
                        </Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item>
               <Link to="" className="nav-link d-flex px-0 justify-content-between align-items-center"
                onClick={(e)=>{
                e.stopPropagation()
                toggleInventory()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faReceipt} className="me-2" />
                 <span>Inventory</span>
                 </div>
                 <FontAwesomeIcon icon={showInventory? faChevronDown : faChevronRight} className="me-2" />
               </Link>
                {showInventory && (
                    <div className=" d-flex flex-column content_bg align-items-start">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                            All Fees Collection</Link>
                     
                        <Link to="/admit-bulk" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />Expenses</Link>
                   
                        <Link to="/student-info" className='d-flex align-items-center nowrap px-2 py-2'> 
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                        Add Expenses
                        </Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item>
               <Link to="" className="nav-link d-flex px-0 justify-content-between align-items-center"
                onClick={(e)=>{
                e.stopPropagation()
                toggleClass()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faPenRuler} className="me-2" />
                 <span>Class</span>
                 </div>
                 <FontAwesomeIcon icon={showClass? faChevronDown : faChevronRight} className="me-2" />
               </Link>
                {showClass && (
                    <div className=" d-flex flex-column content_bg align-items-start">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                            All Class</Link>
                     
                        <Link to="/admit-bulk" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />Add New Class</Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item>
               <Link to="" className="nav-link d-flex px-0 justify-content-between align-items-center"
                onClick={(e)=>{
                e.stopPropagation()
                toggleClassRoutine()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faCalendar} className="me-2" />
                 <span>Class Routine</span>
                 </div>
                 <FontAwesomeIcon icon={showClassRoutine? faChevronDown : faChevronRight} className="me-2" />
               </Link>
                {showClassRoutine && (
                    <div className=" d-flex flex-column content_bg align-items-start">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                            All Class Routines</Link>
                     
                        <Link to="/admit-bulk" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />Add Class Routine</Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item>
               <Link to="" className="nav-link d-flex px-0 justify-content-between align-items-center"
                onClick={(e)=>{
                e.stopPropagation()
                toggleSubjects()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faBookOpen} className="me-2" />
                 <span>Subjects</span>
                 </div>
                 <FontAwesomeIcon icon={showSubjects? faChevronDown : faChevronRight} className="me-2" />
               </Link>
                {showSubjects && (
                    <div className=" d-flex flex-column content_bg align-items-start">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                            All Subjects</Link>
                     
                        <Link to="/admit-bulk" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />Add  New Subject</Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item>
               <Link to="" className="nav-link d-flex px-0 justify-content-between align-items-center"
            //     onClick={(e)=>{
            //     e.stopPropagation()
            //     toggleTeachers()
            //  }}
               >
                 <div>
                  <FontAwesomeIcon icon={faClipboardUser} className="me-2" />
                 <span>Attendance</span>
                 </div>
                 {/* <FontAwesomeIcon icon={showTeachers? faChevronDown : faChevronRight} className="me-2" /> */}
               </Link>
            </Nav.Item>
            <Nav.Item>
               <Link to="" className="nav-link d-flex px-0 justify-content-between align-items-center"
                onClick={(e)=>{
                e.stopPropagation()
                toggleExam()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faClipboardCheck} className="me-2" />
                 <span>Exam</span>
                 </div>
                 <FontAwesomeIcon icon={showExam? faChevronDown : faChevronRight} className="me-2" />
               </Link>
                {showExam && (
                    <div className=" d-flex flex-column content_bg align-items-start">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                            Exam Schedule</Link>
                     
                        <Link to="/admit-bulk" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />Exam Grades</Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item>
               <Link to="" className="nav-link d-flex px-0 justify-content-between align-items-center"
                onClick={(e)=>{
                e.stopPropagation()
                toggleTransport()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faBus} className="me-2" />
                 <span>Transport</span>
                 </div>
                 <FontAwesomeIcon icon={showTransport? faChevronDown : faChevronRight} className="me-2" />
               </Link>
                {showTransport && (
                    <div className=" d-flex flex-column content_bg align-items-start">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                            All Transports</Link>
                     
                        <Link to="/admit-bulk" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />Add New Transport</Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item>
               <Link to="" className="nav-link d-flex px-0 justify-content-between align-items-center"
                onClick={(e)=>{
                e.stopPropagation()
                toggleHostel()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faBed} className="me-2" />
                 <span>Hostel</span>
                 </div>
                 <FontAwesomeIcon icon={showHostel? faChevronDown : faChevronRight} className="me-2" />
               </Link>
                {showHostel && (
                    <div className=" d-flex flex-column content_bg align-items-start">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                            All Rooms</Link>
                     
                        <Link to="/admit-bulk" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />Add New Hostel</Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item>
               <Link to="" className="nav-link d-flex px-0 justify-content-between align-items-center"
            
               >
                 <div>
                  <FontAwesomeIcon icon={faMessage} className="me-2" />
                 <span>Messages</span>
                 </div>
                  {/* <FontAwesomeIcon icon={showTeachers? faChevronDown : faChevronRight} className="me-2" /> */}
               </Link>
                
            </Nav.Item>
            <Nav.Item>
               <Link to="" className="nav-link d-flex px-0 justify-content-between align-items-center"
                onClick={(e)=>{
                e.stopPropagation()
                toggleUsers()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faUser} className="me-2" />
                 <span>Accounts</span>
                 </div>
                  <FontAwesomeIcon icon={showUsers? faChevronDown : faChevronRight} className="me-2" />
               </Link>
                {showUsers && (
                    <div className=" d-flex flex-column content_bg align-items-start">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                            All Admins</Link>
                     
                        <Link to="/admit-bulk" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />Add New Admin</Link>
                    </div>
                  )}
            </Nav.Item>
              

               </Nav>
              
            </div>
    </div>
        
          
        
          
       
   
  );
};

export default AdminSidebarMenu;
