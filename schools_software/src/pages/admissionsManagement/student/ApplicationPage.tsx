import { Container,Col, Row } from "react-bootstrap"
import PersonalDataForm from "./PersonalDataForm"
import ApplicationStatus from "./account/ApplicationStatus"
import Image from "../../../components/Image"
import image from "../../../assets/MD bannner.png"
const ApplicationPage=():JSX.Element=>{
   return(
    <Container className="application_page ">
        <Row>
            <Col className="d-flex banner_container px-0 mb-4">
         
            <img src={image} className="banner" />
           <h6 className="banner_label">Makrodex Tech Pvt Ltd</h6>
            </Col>
            
        </Row>
        <Row>
            <Col className="px-0">
            <PersonalDataForm/>
            </Col>
            
        </Row>
    </Container>
   )
}

export default ApplicationPage