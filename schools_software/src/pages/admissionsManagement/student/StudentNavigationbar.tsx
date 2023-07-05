import { faCircleInfo, faCircleNotch, faFile, faGear, faLocation, faPenSquare, faPenToSquare, faPeopleGroup, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StudentNavigationbar=():JSX.Element=>{
    
    return(
        <div>
<ul className="d-flex flex-column align-items-start">
<h5 className="d-flex">Chapters</h5>
    <li className="my-2">
        <FontAwesomeIcon icon={faUser}/>
        <span className="mx-2 ">Personal data</span>
    </li>
    <li className="my-2">
        <FontAwesomeIcon icon={faLocation}/>
        <span className="mx-2 ">Address</span>
    </li>
    <li className="my-2">
        <FontAwesomeIcon icon={faFile}/>
        <span className="mx-2 ">Documents</span>
    </li>
    <li className="my-2">
        <FontAwesomeIcon icon={faPeopleGroup}/>
        <span className="mx-2 ">Guardian/Parents</span>
    </li>
    <li className="my-2">
        <FontAwesomeIcon icon={faCircleNotch}/>
        <span className="mx-2 ">Status</span>
    </li>
    <li className="my-2">
        <FontAwesomeIcon icon={faPenToSquare}/>
        <span className="mx-2 ">Interview/Exam</span>
    </li>
    <li className="my-2">
        <FontAwesomeIcon icon={faCircleInfo}/>
        <span className="mx-2 ">Program information</span>
    </li>
    <li className="my-2">
        <FontAwesomeIcon icon={faGear}/>
        <span className="mx-2 ">Settings</span>
    </li>
    
</ul>
    
        </div>
    )
}
export default StudentNavigationbar