import { Row ,Container, Col, Dropdown} from "react-bootstrap"
import MainSidebar from "../../components/MainSidebar"
import { useState } from "react"
import StudentSideBar from "../admissionsManagement/student/StudentSideBar"
import PersonalData from "../admissionsManagement/student/account/PersonalData"
import Address from "../admissionsManagement/student/account/Adress"
import Guardian from "../admissionsManagement/student/account/Guardian"
import Documents from "../admissionsManagement/student/account/Documents"
import Settings from "../admissionsManagement/student/account/Settings"
import Interview from "../admissionsManagement/student/account/Interview"
import ApplicationStatus from "../admissionsManagement/student/account/Status"
import ProgramInformation from "../admissionsManagement/student/ProgramInformation"
import AccountTopNavigationBar from "../../components/AccountTopNavigationBar"


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
                    <MainSidebar toggleMenu={toggleMenu} showMenu={showMenu} handlePageNavigationClick={handleNavigationClick} activePage={activePage} />
                </Col>
                <Col className="mx-3">
                  <AccountTopNavigationBar/>
                {/* {
        activePage==="StudentAdmissionForm" &&( */}
                <Row className="student_account_all_border py-3 mt-4 ">
                      <Col sm={3} className="student_account_border  py-3 ">
                      <StudentSideBar
                      source="admin"
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
  {/* )
} */}
                </Col>
            </Row>     
        </Container>
    )
}

export default AdmissionFormPage