import { Col, Container,Row } from "react-bootstrap"
import StudentSideBar from "../StudentSideBar"
import PersonalData from "./PersonalData"
import Image from "../../../../components/Image"
import image from "../../../../assets/fhs_img/fhs1.jpg"
import Address from "./Adress"
import Guardian from "./Guardian"
import Documents from "./Documents"
import Settings from "./Settings"
import Interview from "./Interview"
import ApplicationStatus from "./ApplicationStatus"
import ProgramInformation from "../ProgramInformation"
import { useState } from "react"
import StudentNavbar from "../StudentNavbar"

const StudentAccountPage=():JSX.Element=>{

    const [activeComponent,setActiveComponent]=useState<string>("PersonalData")

    const handleNavigationClick=(component:string)=>{
        setActiveComponent(component)
    }
    return(
        <Container >
            <div>
                <StudentNavbar/>
            </div>
            <Row>
                <Col className="d-flex py-3 content_bg  my-5 student_account_all_border student-profile-bar">
                
                    <Image src={image} height={100} width={100} alt="userName"/>
                    <div className="d-flex flex-column align-items-start px-3">
                        <h5>Student Name</h5>
                    <div>Phone number</div>
                    <div>Form 4</div>
                    </div>
            
                </Col>
            </Row>
            <Row className="student_account_all_border py-3 mt-4 ">
                <Col sm={3} className="student_account_border  py-3 ">
                    <StudentSideBar
                    source="student"
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
        </Container>
    )
}
export default StudentAccountPage