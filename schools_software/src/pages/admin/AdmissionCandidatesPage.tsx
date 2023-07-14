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
import AddressTable from "../../components/AddressTable"
import StudentDocumentsTable from "../../components/StudentDocumentsTable"


const AdmissionCandidatesPage=():JSX.Element=>{
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
    <li className="pe-3">
      Profile
    </li>
    <li className="pe-3">
      Parents
    </li>
    <li className="pe-3">
      Address
    </li>
    <li className="pe-3">
      Documents
    </li>
    <li>
      Status
    </li>
  </ul>
  <div className="px-3">
   {/* <StudentProfileTable/> */}
   {/* <StudentParentsTable/> */}
   {/* <AddressTable/> */}
   <StudentDocumentsTable/>
  </div>
</div>
</div>
</div>
                </Col>
            </Row>
            
        </Container>
    )
}

export default AdmissionCandidatesPage