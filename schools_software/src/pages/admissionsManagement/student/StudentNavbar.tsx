import { Container, Dropdown } from "react-bootstrap"
import Image from "../../../components/Image"
import md_logo from "../../../assets/md_logo_small.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown, faBell, faChevronDown, faMessage } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

const StudentNavbar=():JSX.Element=>{
    return(
        <div className="content_bg main_bg sidebar d-flex align-items-center justify-content-between student_navbar">
            <div>

            <Image src={md_logo} height={50} width={50} alt="makrodex"/>
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
          <span className="px-2">Louis Gadza</span>
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
           
        </div>
    )
}
export default StudentNavbar