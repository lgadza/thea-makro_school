
import { faBars, faHome, faUserGraduate, faLevelUpAlt, faChalkboardTeacher, faUsers, faBook, faBed, faFileAlt,faInfo, faIdCard,faBookOpen, faGauge, faPeopleGroup, faBuilding, faReceipt, faPenRuler, faCalendar, faClipboardUser, faClipboardCheck, faBus, faMessage, faUser, faXmark, faBell, faLightbulb, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';
import md_logo_small from "../assets/md_logo_small.png"
import { useDispatch } from 'react-redux';
import { ActiveNav } from '../redux/actions';
import { useSelector } from 'react-redux';

const MainSidebar = ({showMenu,toggleMenu,activePage,handlePageNavigationClick}:{showMenu:boolean;toggleMenu:(page:boolean)=>void;activePage:string;handlePageNavigationClick:(page:string)=>void}) => {

  const handleToggleMenu = () => {
    toggleMenu(showMenu);
  };
  const [studentOpen, setStudentOpen] = useState(false);
  const toggleStudent = () => {
    setStudentOpen(!studentOpen);
  }
  const createStateToggle = (state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>>) => () => setState(!state);
  const [showDashboard, setShowDashboard] = useState(false);
  const toggleDashboard = createStateToggle(showDashboard, setShowDashboard);
  const [showCALA, setShowCALA] = useState(false);
  const toggleCALA = createStateToggle(showCALA, setShowCALA);
  const [showMessage, setShowMessage] = useState(false);
  const toggleMessage = createStateToggle(showMessage, setShowMessage);
  const [showNotice, setShowNotice] = useState(false);
  const toggleNotice = createStateToggle(showNotice, setShowNotice);
  const [showAttendance, setShowAttendance] = useState(false);
  const toggleAttendance = createStateToggle(showAttendance, setShowAttendance);
  const [showTeachers, setShowTeachers] = useState(false);
  const toggleTeachers = createStateToggle(showTeachers, setShowTeachers);
  const [showParents, setShowParents] = useState(false);
  const toggleParents = createStateToggle(showParents, setShowParents);
  const [showLibrary, setShowLibrary] = useState(false);
  const toggleLibrary = createStateToggle(showLibrary, setShowLibrary);
  const [showInventory, setShowInventory] = useState(false);
  const toggleInventory = createStateToggle(showInventory, setShowInventory);
  const [showClass, setShowClass] = useState(false);
  const toggleClass = createStateToggle(showClass, setShowClass);
  const [showClassRoutine, setShowClassRoutine] = useState(false);
  const toggleClassRoutine = createStateToggle(showClassRoutine, setShowClassRoutine);
  const [showSubjects, setShowSubjects] = useState(false);
  const toggleSubjects = createStateToggle(showSubjects, setShowSubjects);
  const [showExam, setShowExam] = useState(false);
  const toggleExam = createStateToggle(showExam, setShowExam);
  const [showTransport, setShowTransport] = useState(false);
  const toggleTransport = createStateToggle(showTransport, setShowTransport);
  const [showHostel, setShowHostel] = useState(false);
  const toggleHostel = createStateToggle(showHostel, setShowHostel);
  const [showUsers, setShowUsers] = useState(false);
  const toggleUsers = createStateToggle(showUsers, setShowUsers);
const activeComponent=useSelector((state:any)=>state.activeNav)
  const dispatch=useDispatch()

  return (
    
          <div className={showMenu?"main_bg sidebar ":"main_bg sidebar hide-menu"}>
            <div className='d-flex sidebar-head justify-content-between ps-2 py-2 align-items-center'>
    {showMenu && (
                <img
                src={md_logo_small}
                alt="makrodex_logo"
                style={{ width: `${50}px`, height: `${50}px`, borderRadius: "0%" }}
                className="img_component"
              />
    )}
  <Link to=""
  onClick={handleToggleMenu}
  >

              <FontAwesomeIcon icon={showMenu?faBars:faXmark} style={{fontSize:"1.2rem",color:"rgb(11, 94, 215)"}}/>
  </Link>
            </div>
            
            <div className="sidebar-menu">
            <Nav className="flex-column">
            <Nav.Item className={`${showDashboard?"active":""}`}>
               <Link to=""
                className="nav-link d-flex pe-0 justify-content-between ps-2 align-items-center" 
                onClick={(e)=>{
                  e.stopPropagation()
                  toggleDashboard()
               }}
                >
                 <div>
                  <FontAwesomeIcon icon={faGauge} className="me-2" />
                  {showMenu && (

                 <span className={`${showDashboard?"active":""}`}>Dashboard</span>
                  )}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon  icon={showDashboard ? faChevronDown : faChevronRight}  className="me-2" />

                 )}
               </Link>
               {showDashboard && (
                 <div className=" d-flex flex-column content_bg overlap">
                     
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
            <Nav.Item className={`${studentOpen?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2" 
               
              onClick={(e)=>{
                e.stopPropagation()
                toggleStudent()
             }}>
                 <div>
                  <FontAwesomeIcon icon={faUsers} className="me-2" />
                  {showMenu && (

                 <span>Students</span>
)}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon  icon={studentOpen ? faChevronDown : faChevronRight}  className="me-2" />

                 )}
               </Link>
               {studentOpen && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                            All Students</Link>
                     
                        <Link to="/mss/admin/admission/candidates/candidate-details" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />Student Details</Link>
                   
                        <Link 
                        to="/mss/admin/admission/candidates" 
                        className={`d-flex align-items-center nowrap px-2 py-2 ${activeComponent==="Student-Admission"?"active":""}`}
                        onClick={()=>{
                          dispatch(ActiveNav("Student-Admission"))
                        }}
                        > 
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                        Student Admission
                        </Link>
                        <Link to="/mss/admin/admission/form" className={`d-flex align-items-center nowrap px-2 py-2 ${activePage==="StudentAdmissionForm"?"active":""}`
                      } onClick={(e)=>{
                        e.stopPropagation()
                        handlePageNavigationClick("StudentAdmissionForm")}}> 
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                        Admission Form 
                        </Link>
                      
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item className={`${showTeachers?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
               onClick={(e)=>{
                e.stopPropagation()
                toggleTeachers()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2" />
                  {showMenu && (

                 <span>Teachers</span>
)}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon icon={showTeachers? faChevronDown : faChevronRight} className="me-2" />

                 )}
               </Link>
               {showTeachers && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
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
            <Nav.Item className={`${showCALA?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
               onClick={(e)=>{
                e.stopPropagation()
                toggleCALA()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faLightbulb} className="me-2" />
                  {showMenu && (

                 <span>C . A . L . A</span>
)}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon icon={faChevronRight} className="me-2" />

                 )}
               </Link>
               {showCALA && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" /> CALA  Templates
                            </Link>
                   
                        <Link to="/admit-bulk" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />My Projects</Link>
                   
                        <Link to="/student-info" className='d-flex align-items-center nowrap px-2 py-2'> 
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                        Upload you CALA
                        </Link>
                        <Link to="/student-info" className='d-flex align-items-center nowrap px-2 py-2'> 
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                        Helper?
                        </Link>
                      
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item className={`${showParents?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
                onClick={(e)=>{
                e.stopPropagation()
                toggleParents()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faPeopleGroup} className="me-2" />
                 {showMenu && (
                 <span>Parents</span>

)}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon icon={showParents? faChevronDown : faChevronRight} className="me-2" />

                 )}
               </Link>
               {showParents && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                            All Parents</Link>
                     
                        <Link to="" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />Parent Details</Link>
                   
                        <Link to="" className='d-flex align-items-center nowrap px-2 py-2'> 
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                       Add Parent
                        </Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item className={`${showLibrary?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
                onClick={(e)=>{
                e.stopPropagation()
                toggleLibrary()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faBuilding} className="me-2" />
                  {showMenu && (

                 <span>Library</span>
)}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon icon={showLibrary? faChevronDown : faChevronRight} className="me-2" />

                 )}
               </Link>
                {showLibrary && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
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
            <Nav.Item className={`${showInventory?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
                onClick={(e)=>{
                e.stopPropagation()
                toggleInventory()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faReceipt} className="me-2" />
                  {showMenu && (

                 <span>Inventory</span>
)}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon icon={showInventory? faChevronDown : faChevronRight} className="me-2" />

                 )}
               </Link>
                {showInventory && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
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
            <Nav.Item className={`${showClass?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
                onClick={(e)=>{
                e.stopPropagation()
                toggleClass()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faPenRuler} className="me-2" />
                  {showMenu && (

                 <span>Class</span>
)}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon icon={showClass? faChevronDown : faChevronRight} className="me-2" />

                 )}
               </Link>
                {showClass && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                            All Class</Link>
                     
                        <Link to="/admit-bulk" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />Add New Class</Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item className={`${showClassRoutine?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
                onClick={(e)=>{
                e.stopPropagation()
                toggleClassRoutine()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faCalendar} className="me-2" />
                  {showMenu && (

                 <span>Class Routine</span>
)}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon icon={showClassRoutine? faChevronDown : faChevronRight} className="me-2" />

                 )}
               </Link>
                {showClassRoutine && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                            All Class Routines</Link>
                     
                        <Link to="/admit-bulk" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />Add Class Routine</Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item className={`${showSubjects?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
                onClick={(e)=>{
                e.stopPropagation()
                toggleSubjects()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faBookOpen} className="me-2" />
                  {showMenu && (

                 <span>Subjects</span>
)}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon icon={showSubjects? faChevronDown : faChevronRight} className="me-2" />

                 )}
               </Link>
                {showSubjects && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                            All Subjects</Link>
                     
                        <Link to="/admit-bulk" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />Add  New Subject</Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item className={`${showAttendance?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
                onClick={(e)=>{
                e.stopPropagation()
                toggleAttendance()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faClipboardUser} className="me-2" />
                  {showMenu && (

                 <span>Attendance</span>
)}
                 </div>
                 {/* {showMenu && (
                 <FontAwesomeIcon icon={showTeachers? faChevronDown : faChevronRight} className="me-2" /> 

                 )} */}
               </Link>
            </Nav.Item>
            <Nav.Item className={`${showExam?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
                onClick={(e)=>{
                e.stopPropagation()
                toggleExam()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faClipboardCheck} className="me-2" />
                  {showMenu && (

                 <span>Exam</span>
)}
                 </div>
               {showMenu && (
                 <FontAwesomeIcon icon={showExam? faChevronDown : faChevronRight} className="me-2" />

               )}
               </Link>
                {showExam && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                            Exam Schedule</Link>
                     
                        <Link to="/admit-bulk" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />Exam Grades</Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item className={`${showTransport?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
                onClick={(e)=>{
                e.stopPropagation()
                toggleTransport()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faBus} className="me-2" />
                 {showMenu && (
                 <span>Transport</span>

)}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon icon={showTransport? faChevronDown : faChevronRight} className="me-2" />

                 )}
               </Link>
                {showTransport && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                            All Transports</Link>
                     
                        <Link to="/admit-bulk" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />Add New Transport</Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item className={`${showHostel?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
                onClick={(e)=>{
                e.stopPropagation()
                toggleHostel()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faBed} className="me-2" />
                  {showMenu && (

                 <span>Hostel</span>
)}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon icon={showHostel? faChevronDown : faChevronRight} className="me-2" />

                 )}
               </Link>
                {showHostel && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                            All Rooms</Link>
                     
                        <Link to="/admit-bulk" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />Add New Hostel</Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item className={`${showMessage?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
              onClick={(e)=>{
                e.stopPropagation()
                toggleMessage()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faMessage} className="me-2" />
                  {showMenu && (

                 <span>Messages</span>
)}
                 </div>
               </Link>
                
            </Nav.Item>
            <Nav.Item className={`${showUsers?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
                onClick={(e)=>{
                e.stopPropagation()
                toggleUsers()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faUser} className="me-2" />
                  {showMenu && (

                 <span>Accounts</span>
)}
                 </div>
                  {showMenu && (
                  <FontAwesomeIcon icon={showUsers? faChevronDown : faChevronRight} className="me-2" />

                  )}
               </Link>
                {showUsers && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />
                            All Admins</Link>
                     
                        <Link to="/admit-bulk" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".8rem"}} className="me-2" />Add New Admin</Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item className={`${showNotice?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
              onClick={(e)=>{
                e.stopPropagation()
                toggleNotice()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faBell} className="me-2" />
                  {showMenu && (

                 <span>Notice</span>
)}
                 </div>
                  {/* {showMenu && (
                   <FontAwesomeIcon icon={showTeachers? faChevronDown : faChevronRight} className="me-2" /> 

                  )} */}
               </Link>
                
            </Nav.Item>
               </Nav>             
            </div>
            <div className='sidebar-log-out'>
              Log out
              <FontAwesomeIcon className="px-2" icon={faRightFromBracket}/>
            </div>
    </div>  
  );
};

export default MainSidebar;
