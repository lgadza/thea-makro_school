import { Row ,Container, Col, Dropdown, Form} from "react-bootstrap"
import AdminSidebarMenu from "../../components/MainSidebar"
import SearchBar from "../../components/SearchBar"
import { useState } from "react"
import { faChevronDown, faChevronRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import StudentOverviewRow from "../../components/StudentOverviewRow"
import AccountTopNavigationBar from "../../components/AccountTopNavigationBar"
import { Link } from "react-router-dom"


const AdmissionCandidatesPage=():JSX.Element=>{
    const [showMenu, setShowMenu] = useState(true);
    const [filter, setFilter] = useState("all");

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
                    <AccountTopNavigationBar/>

{/* ALL CANDIDATES */}

                    <div>
                         <h4 className="d-flex">All Candidates</h4>
                        <div className="d-flex align-items-center">
                            <span>Students</span> 
                            <FontAwesomeIcon className="px-2 header" icon={faChevronRight} style={{fontSize:".8rem"}}/>
                            <span className="header">All Candidates</span>
                        </div>
                        <div className="d-flex justify-content-end align-items-center search mt-4 ">
                            <div className="d-flex align-items-center">
                                <span>Filter by</span>
                                <div className="my-3 d-flex align-items-center">
                                    <Form.Check
                                    type="radio"
                                    name="filter"
                                    label="all"
                                    onClick={() => setFilter("all")}
                                    className="mx-3"
                                    defaultChecked
                                    />

                                    <Form.Control
                                    as="select" 
                                    value={filter}
                                    className="filter input-select px-0"
                                    onChange={(e)=>setFilter(e.target.value)}
                                    >
                                        <option className="option" value="">gender</option>
                                        <option className="option" value="male">male</option>
                                        <option  value="female">female</option>
                                    </Form.Control>
                                    <FontAwesomeIcon icon={faChevronDown} style={{fontSize:"0.8rem"}}/>

                                    <Dropdown>
                                        <Dropdown.Toggle  className="me-3">
                                            <span className="pe-1">class</span>
                                            <FontAwesomeIcon icon={faChevronDown} style={{fontSize:"0.8rem"}}/>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={(e)=>e.stopPropagation()}>
                                                <Form.Check
                                                type="checkbox"
                                                // checked={`${filter==="Form 1"?true:false}`}
                                                onChange={(e) => setFilter("Form 1")}
                                                className="me-3"
                                                name="filter"
                                                label="Form 1"
                                                />
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Form.Check
                                    type="radio"
                                    onClick={() => setFilter("admitted")}
                                    name="filter"
                                    label="admitted"
                                    className="me-3"
                                    />
                                    <Form.Check
                                    type="radio"
                                    onClick={() => setFilter("rejected")}
                                    name="filter"
                                    label="rejected"
                                    className="me-3"
                                    />
                                </div>
                            </div>
                            <SearchBar placeholder="Search by Roll, Name, Class"/>
                        </div>
                        <div className="mt-4">
                        {
                            Array(10).fill(undefined).map((_,index)=>(
                            <div key={index}>
                                <Link to="/mss/admin/admission/candidates/candidate-details">
                                <StudentOverviewRow/>
                                </Link>
                            </div>
                            ))
                        }
                        </div>
                    </div>

                </Col>
            </Row>
            
        </Container>
    )
}

export default AdmissionCandidatesPage