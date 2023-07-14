import { Row ,Container, Col, Dropdown} from "react-bootstrap"
import AdminSidebarMenu from "./AdminSidebarMenu"
import SearchBar from "../../components/SearchBar"
import { useState } from "react"
import { faBell, faCalendar, faCheck, faChevronDown, faChevronLeft, faChevronRight, faEnvelope, faGear, faListCheck, faMessage, faPowerOff, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "../../components/Image"
import { Link } from "react-router-dom"
import PersonalDataForm from "../admissionsManagement/student/PersonalDataForm"
import StudentSideBar from "../admissionsManagement/student/StudentSideBar"
import PersonalData from "../admissionsManagement/student/account/PersonalData"
import Address from "../admissionsManagement/student/account/Adress"
import Guardian from "../admissionsManagement/student/account/Guardian"
import Documents from "../admissionsManagement/student/account/Documents"
import Settings from "../admissionsManagement/student/account/Settings"
import Interview from "../admissionsManagement/student/account/Interview"
import ApplicationStatus from "../admissionsManagement/student/account/ApplicationStatus"
import ProgramInformation from "../admissionsManagement/student/ProgramInformation"
import StudentOverviewRow from "../../components/StudentOverviewRow"
import StudentProfileTable from "../../components/StudentProfileTable"
import StudentParentsTable from "../../components/StudentParentsTable"


const AdmissionFormPage=():JSX.Element=>{
    const [showMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
    const [activePage,setActivePage]=useState<string>("PersonalData")
  
    const handlePageNavigationClick=(page:string)=>{
        setActivePage(page)
    }
    const [activeComponent,setActiveComponent]=useState<string>("PersonalData")

    const handleNavigationClick=(component:string)=>{
        setActiveComponent(component)
    }
    return(
        <Container fluid className="ps-0 ms-0">
            <Row>
                <Col md={2} className={showMenu?"":"hide-menu md-1"} >
                <AdminSidebarMenu toggleMenu={toggleMenu} showMenu={showMenu} handlePageNavigationClick={handleNavigationClick} activePage={activePage} />
                </Col>
                <Col className="mx-3">
                <div className="search-bar py-2 px-3 mb-4 d-flex align-items-center sidebar-head justify-content-between">
                    <SearchBar placeholder="Find Something . . ."/>
                    <ul className="d-flex align-items-center">
                        <li className="navbar-item d-flex align-items-center">         
                        <Dropdown>
            <Dropdown.Toggle className="navbar-item d-flex align-items-center">
            <div className="pt-2">
                            <span className="px-2 py-0">Louis Gadza</span>
                            <FontAwesomeIcon style={{fontSize:"0.8rem"}} icon={faChevronDown}/>
                           
                        <span className="d-flex px-4">Admin</span>
                        </div>
                        <Image src="https://img.freepik.com/free-icon/user_318-159711.jpg?size=626&ext=jpg&uid=R36208328&ga=GA1.1.377730112.1687240299&semt=ais" height={40} width={40} alt="avatar"/>
            </Dropdown.Toggle>

            <Dropdown.Menu className="py-0">
              <div className="d-flex justify-content-center content_bg-2 text-white py-3">
               
                 <span>Louis Gadza</span>
              
              </div>
              <Dropdown.Item>
                <Link to="" className="textColor px-2">
                <FontAwesomeIcon icon={faUser}/>
                  <span className="px-2">My profile</span>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="" className="textColor px-2">
                <FontAwesomeIcon icon={faListCheck}/>
                  <span className="px-2">Task</span>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="" className="textColor px-2">
                <FontAwesomeIcon icon={faMessage}/>
                  <span className="px-2">Message</span>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="" className="textColor px-2">
                <FontAwesomeIcon icon={faGear}/>
                  <span className="px-2">Account settings</span>
                </Link>
              </Dropdown.Item>
              <hr className="my-0 py-0" />
              <Dropdown.Item>
                <Link
                  to=""
                //   onClick={handleLogout}
                  className="textColor px-2"
                >
                <FontAwesomeIcon icon={faPowerOff}/>
<span className="px-2">
                  Log out
</span>
                </Link>
              </Dropdown.Item>
             
            </Dropdown.Menu>
          </Dropdown>
          </li>
     <li className="navbar-item header-message px-0">              
        <Dropdown>
            <Dropdown.Toggle className="navbar-item d-flex align-items-center">
            <FontAwesomeIcon icon={faEnvelope}/>
                            <div className="message-count">6</div>
            </Dropdown.Toggle>

            <Dropdown.Menu className="py-0">
              <div className="d-flex justify-content-center content_bg-2 text-white py-3">
               
                 <span>Messages</span>
              
              </div>
              <Dropdown.Item>
                <Link to="" className="textColor px-2 d-flex">
                
                <Image src="https://img.freepik.com/free-icon/user_318-159711.jpg?size=626&ext=jpg&uid=R36208328&ga=GA1.1.377730112.1687240299&semt=ais" height={40} width={40} alt="avatar"/>
                <div className="ps-2">
                    <div className="d-flex justify-content-between">
                        <span>
                            Louis
                        </span>
                        <span className="d-flex ">
                            10:30
                        </span>
                    </div>
                        <div>
                            <span>What is the reason of buying this item. Is it useful for me...</span>
                        </div>
                </div>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </li>
     <li className="navbar-item header-message pe-3">              
        <Dropdown>
            <Dropdown.Toggle className="navbar-item d-flex align-items-center">
            <FontAwesomeIcon icon={faBell}/>
            <div className="notification-count">5</div>
            </Dropdown.Toggle>

            <Dropdown.Menu className="py-0">
              <div className="d-flex justify-content-center content_bg-2 text-white py-3">
               
                 <span>Notifications</span>
              
              </div>
              <Dropdown.Item>
                <Link to="" className="textColor px-2 d-flex align-items-center">
                
                <div className="icon-bg">
                <FontAwesomeIcon icon={faCalendar}/>
                </div>
                <div className="ps-2">
                    <div className="d-flex justify-content-between">
                       Director Metting
                    </div>
                        <div className="text-muted">
                                0 mins ago  
                        </div>
                </div>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="" className="textColor px-2 py-0 d-flex align-items-center">
                
                <div className="icon-bg">
                <FontAwesomeIcon icon={faGear}/>
                </div>
                <div className="ps-2">
                    <div className="d-flex justify-content-between">
                       Updated password
                    </div>
                        <div className="text-muted">
                                20 mins ago  
                        </div>
                </div>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="" className="textColor px-2 d-flex align-items-center">
                
                <div className="icon-bg">
                <FontAwesomeIcon icon={faCheck}/>
                </div>
                <div className="ps-2">
                    <div className="d-flex justify-content-between">
                       Completed today task
                    </div>
                        <div className="text-muted">
                                50 mins ago  
                        </div>
                </div>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </li>
                    </ul>
                </div>
                {/* {
        activePage==="StudentAdmissionForm" &&(
                <Row className="student_account_all_border py-3 mt-4 ">
    <Col sm={3} className="student_account_border  py-3 ">
    <StudentSideBar
     activeComponent={activeComponent}
     handleNavigationClick={handleNavigationClick}
     />
    </Col>
    <Col sm={9} >
          <div className="student_account_border content_bg py-3 px-3 ">
          {activeComponent === "PersonalData" && <PersonalData />}
            {activeComponent === "Address" && <Address />}
            {activeComponent === "Guardian" && <Guardian />}
            {activeComponent === "Documents" && <Documents />}
            {activeComponent === "Settings" && <Settings />}
            {activeComponent === "Interview" && <Interview />}
            {activeComponent === "Status" && <ApplicationStatus />}
            {activeComponent === "ProgramInformation" && <ProgramInformation />}
          </div>
    </Col>
</Row>
  )
} */}


{/* ALL CANDIDATES */}

{/* <div>
<h4 className="d-flex">All Candidates</h4>
<div className="d-flex align-items-center">
<span>Students</span> 
<FontAwesomeIcon className="px-2 header" icon={faChevronRight} style={{fontSize:".8rem"}}/>
<span className="header">All Candidates</span>
</div>
<div className="d-flex justify-content-end search mt-4 ">
  <SearchBar placeholder="Search by Roll, Name, Class"/>
</div>
<div className="mt-4">
  {
    Array(10).fill(undefined).map((_,index)=>(
      <div key={index}>
        <StudentOverviewRow/>
      </div>
    ))
  }
</div>
</div> */}
{/* ALL CANDIDATES */}
<div>
<h4 className="d-flex">Candidates</h4>
<div className="d-flex align-items-center">
<span>Students</span> 
<FontAwesomeIcon className="px-2 header" icon={faChevronRight} style={{fontSize:".8rem"}}/>
<span>All Candidates</span> 
<FontAwesomeIcon className="px-2 header" icon={faChevronRight} style={{fontSize:".8rem"}}/>
<span className="header">Candidate details</span>
</div>

<div className="d-flex mt-5">
<div className="p-3">
<Image src="https://img.freepik.com/free-icon/user_318-159711.jpg?size=626&ext=jpg&uid=R36208328&ga=GA1.1.377730112.1687240299&semt=ais" height={200} width={200} alt="avatar"/>
<h5 className="mt-2 mb-0">Louis Gadza</h5>
<span>Form 5</span>
</div>
<div className="ms-5 w-100  content_bg ">
  <ul className="d-flex justify-content-start view-candidate py-2">
    <li className="nav-item pe-3">
      Profile
    </li>
    <li className="nav-item pe-3">
      Parents
    </li>
    <li className="nav-item pe-3">
      Address
    </li>
    <li className="nav-item pe-3">
      Documents
    </li>
    <li className="nav-item">
      Status
    </li>
  </ul>
  <div className="px-3">
   {/* <StudentProfileTable/> */}
   <StudentParentsTable/>
  </div>
</div>
</div>
</div>
                </Col>
            </Row>
            
        </Container>
    )
}

export default AdmissionFormPage