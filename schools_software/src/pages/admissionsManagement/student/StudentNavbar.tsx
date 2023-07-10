import { Container, Dropdown } from "react-bootstrap"
import Image from "../../../components/Image"
import md_logo from "../../../assets/md_logo_1.ico"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faMessage } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

const StudentNavbar=():JSX.Element=>{
    return(
        <div className="content_bg student_account_all_border">
            <div>

            <Image src={md_logo} height={50} width={50} alt="makrodex"/>
            </div>
            <div>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faMessage}/>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBell}/>
                    </li>
                    <li>
            <Dropdown>
            <Dropdown.Toggle>
            <Image src={md_logo} height={50} width={50} alt="makrodex"/>
          
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <div className="d-flex align-items-center ml-2 justify-content-between">
                  <span>
                    Louis Gadza
                  </span>
                  <img
                    src={md_logo}
                    className="small-profile-img "
                    alt=""
                  />
                </div>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="" className="textColor px-2 py-5">
                  Registrations
                </Link>
              </Dropdown.Item>
              <hr className="my-0 py-0" />
              <Dropdown.Item>
                <Link
                  to=""
                //   onClick={handleLogout}
                  className="textColor px-2 py-5"
                >
                  Log out
                </Link>
              </Dropdown.Item>
              <Dropdown.Item as="div">
                <Link to="">
                  <Button
                    className="px-3 primary-btn  w-100 d-flex justify-content-center  textColor "
                    variant="primary"
                  >
                    <small>Delete Account</small>
                  </Button>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default StudentNavbar