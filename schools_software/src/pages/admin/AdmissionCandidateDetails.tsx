import { Row ,Container, Col, Dropdown, Button} from "react-bootstrap"
import AdminSidebarMenu from "./AdminSidebarMenu"
import SearchBar from "../../components/SearchBar"
import { useState } from "react"
import {faChevronRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "../../components/Image"
import StudentProfileTable from "../../components/StudentProfileTable"
import StudentParentsTable from "../../components/StudentParentsTable"
import AddressTable from "../../components/AddressTable"
import StudentDocumentsTable from "../../components/StudentDocumentsTable"
import AccountTopNavigationBar from "../../components/AccountTopNavigationBar"
import { Link } from "react-router-dom"
const AdmissionCandidateDetails=():JSX.Element=>{
    const [showMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
    const [activePage,setActivePage]=useState<string>("Profile")
  
    const handlePageNavigationClick=(page:string)=>{
        setActivePage(page)
    }
    const [activeComponent,setActiveComponent]=useState<string>("Profile")

    const handleNavigationClick=(component:string)=>{
        setActiveComponent(component)
    }
    return(
        <Container fluid className="ps-0 ms-0">
            <Row>
                <Col md={2} className={showMenu?"":"hide-menu md-1"} >
                     <AdminSidebarMenu toggleMenu={toggleMenu} showMenu={showMenu} handlePageNavigationClick={handlePageNavigationClick} activePage={activePage} />
                </Col>
                <Col className="mx-3">
                     <AccountTopNavigationBar/>
                    <div>
                        <h4 className="d-flex">Candidates</h4>
                        <div className="d-flex align-items-center">
                            <span>Students</span> 
                            <FontAwesomeIcon className="px-2 header" icon={faChevronRight} style={{fontSize:".8rem"}}/>
                            <Link to="/mss/admin/admission/candidates">All Candidates</Link> 
                            <FontAwesomeIcon className="px-2 header" icon={faChevronRight} style={{fontSize:".8rem"}}/>
                            <span className="header">Candidate details</span>
                        </div>
                        <div className="d-flex justify-content-end py-2">
                            <Button>Admit Louis Gadza</Button>
                        </div>
                        <div className="d-flex mt-5">
                            <div className="p-3">
                                <Image src="https://img.freepik.com/free-icon/user_318-159711.jpg?size=626&ext=jpg&uid=R36208328&ga=GA1.1.377730112.1687240299&semt=ais" height={200} width={200} alt="avatar"/>
                                <h5 className="mt-2 mb-0">Louis Gadza</h5>
                                <span>Form 5</span>
                            </div>
                            <div className="ms-5 w-100  content_bg ">
                                <ul className="d-flex justify-content-start view-candidate py-2">
                                    <li 
                                    className={`pe-3 ${activeComponent==="Profile"?"active":""}`}
                                    onClick={()=>handleNavigationClick("Profile")}
                                    >
                                    Profile
                                    </li>
                                    <li 
                                    className={`pe-3 ${activeComponent==="Parents"?"active":""}`}
                                    onClick={()=>handleNavigationClick("Parents")}
                                    >
                                    Parents
                                    </li>
                                    <li 
                                    className={`pe-3 ${activeComponent==="Address"?"active":""}`}
                                    onClick={()=>handleNavigationClick("Address")}
                                    >
                                    Address
                                    </li>
                                    <li 
                                    className={`pe-3 ${activeComponent==="Documents"?"active":""}`}
                                    onClick={()=>handleNavigationClick("Documents")}
                                    >
                                    Documents
                                    </li>
                                    <li
                                     className={`pe-3 ${activeComponent==="Status"?"active":""}`}
                                     onClick={()=>handleNavigationClick("Status")}
                                    >
                                    Status
                                    </li>
                                </ul>
                                <div className="px-3">
                                    {activeComponent==="Profile" && (
                                    <StudentProfileTable/>
                                    )}
                                    {activeComponent==="Parents" && (
                                    <StudentParentsTable/>
                                    
                                    )}
                                    {activeComponent==="Address" && (
                                    <AddressTable/>
                                    )}
                                    {activeComponent==="Documents" && (
                                    <StudentDocumentsTable/>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            
        </Container>
    )
}

export default AdmissionCandidateDetails