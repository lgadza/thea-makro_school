import { Row ,Container, Col, Dropdown} from "react-bootstrap"
import AdminSidebarMenu from "./AdminSidebarMenu"
import SearchBar from "../../components/SearchBar"
import { useState } from "react"
import { faBell, faCalendar, faCheck, faChevronDown, faEnvelope, faGear, faListCheck, faMessage, faPowerOff, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "../../components/Image"
import { Link } from "react-router-dom"


const AdmissionFormPage=():JSX.Element=>{
    const [showMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
    return(
        <Container fluid className="ps-0 ms-0">
            <Row>
                <Col md={2} className={showMenu?"":"hide-menu md-1"} >
                <AdminSidebarMenu toggleMenu={toggleMenu} showMenu={showMenu} />
                </Col>
                <Col>
                <div className="search-bar py-2 d-flex align-items-center sidebar-head justify-content-between">
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
     <li className="navbar-item header-message px-3">              
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
                </Col>
            </Row>
            
        </Container>
    )
}

export default AdmissionFormPage