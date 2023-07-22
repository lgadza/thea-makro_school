import { Container, Dropdown } from "react-bootstrap"
import Image from "../../../components/Image"
import md_logo from "../../../assets/md_logo_small.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown, faBell, faChevronDown, faMessage } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { ApplicantRegistration } from "../../../Types"

interface StudentNavbarProps{
  personalInfo:ApplicantRegistration | null
}
const StudentNavbar:React.FC<StudentNavbarProps> =({personalInfo})=>{

    return(
        <Container className="content_bg main_bg d-flex align-items-center justify-content-between student_navbar my-2">
            <div>

            <img
                    src={md_logo}
                    alt="makrodex_logo"
                    className="img_component d-flex"
                    style={{height:"50px"}}
                />
            </div>
            
                <ul className="d-flex align-items-center my-0">
                    <li >
                        <FontAwesomeIcon icon={faMessage}/>
                    </li>
                    <li className="px-3">
                        <FontAwesomeIcon icon={faBell}/>
                    </li>
                    <li>
            <Dropdown>
            <Dropdown.Toggle>
            <Image src={md_logo} height={30} width={30} alt="makrodex"/>
          <span className="px-2">{personalInfo?.first_name} {personalInfo?.last_name} </span>
          <FontAwesomeIcon icon={faChevronDown}/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="" className="textColor px-2">
                  Change password
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="" className="textColor px-2">
                  Change photo
                </Link>
              </Dropdown.Item>
              <hr className="my-0 py-0" />
              <Dropdown.Item>
                <Link
                  to=""
                //   onClick={handleLogout}
                  className="textColor px-2"
                >
                  Log out
                </Link>
              </Dropdown.Item>
             
            </Dropdown.Menu>
          </Dropdown>
                    </li>
                </ul>
           
        </Container>
    )
}
export default StudentNavbar