import { Container,Col, Row } from "react-bootstrap"
import PersonalDataForm from "./PersonalDataForm"
import ApplicationStatus from "./ApplicationStatus"
import Image from "../../../components/Image"
import image from "../../../assets/fhs_img/fhs_logo.jpg"
const ApplicationPage=():JSX.Element=>{
   return(
    <Container fluid>
        <Row>
            <Col className="d-flex mb-4">
                <div className="mx-3">
            <Image src={image} height={100} width={100} alt="userName"/>

                </div>
            <div><h6>Student name</h6>
            <div>7904334452</div>
            <span>Level</span></div>
            </Col>
            
        </Row>
        <Row>
            <Col>
            <PersonalDataForm/>
            </Col>
            
        </Row>
    </Container>
   )
}

export default ApplicationPage