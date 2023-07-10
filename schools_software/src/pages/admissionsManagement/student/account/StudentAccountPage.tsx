import { Col, Container,Row } from "react-bootstrap"
import StudentNavigationbar from "../StudentNavigationbar"
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

const StudentAccountPage=():JSX.Element=>{

    const [activeComponent,setActiveComponent]=useState<string>("PersonalData")

    const handleNavigationClick=(component:string)=>{
        setActiveComponent(component)
    }
    return(
        <Container >
        <Row>
            <Col className="d-flex py-3 content_bg  my-4 student_account_border">
               
            <Image src={image} height={100} width={100} alt="userName"/>
<div className="d-flex flex-column align-items-start px-3">
    <h5>Student Name</h5>
<div>Phone number</div>
<div>Form 4</div>
</div>
          
            </Col>
            
        </Row>
<Row>
    <Col sm={3} className="student_account_border content_bg py-3 ">
    <StudentNavigationbar
     activeComponent={activeComponent}
     handleNavigationClick={handleNavigationClick}
     />
    </Col>
    <Col sm={9} className="student_account_border content_bg py-3 ">
    
     {activeComponent === "PersonalData" && <PersonalData />}
          {activeComponent === "Address" && <Address />}
          {activeComponent === "Guardian" && <Guardian />}
          {activeComponent === "Documents" && <Documents />}
          {activeComponent === "Settings" && <Settings />}
          {activeComponent === "Interview" && <Interview />}
          {activeComponent === "Status" && <ApplicationStatus />}
          {activeComponent === "ProgramInformation" && <ProgramInformation />}
    </Col>
</Row>
        </Container>
    )
}
export default StudentAccountPage