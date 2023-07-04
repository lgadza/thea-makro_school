import { Container,Col, Row } from "react-bootstrap"
import PersonalDataForm from "./PersonalDataForm"
import ApplicationStatus from "./ApplicationStatus"
import Image from "../../../components/Image"
import image from "../../../assets/MD bannner.png"
const ApplicationPage=():JSX.Element=>{
   return(
    <Container fluid>
        <Row>
            <Col className="d-flex banner_container mb-4">
               
            {/* <Image src={image} height={100} width={100} alt="userName"/>

                </div>
            <div><h6>Student name</h6>
            <div>7904334452</div>
            <span>Level</span> */}
            <img src={image} className="banner" />
           <h6 className="banner_label">Makrodex Tech Pvt Ltd</h6>
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