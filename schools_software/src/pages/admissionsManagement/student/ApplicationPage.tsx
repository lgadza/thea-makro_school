import { Container,Col, Row } from "react-bootstrap"
import PersonalDataForm from "./PersonalDataForm"
import ApplicationStatus from "./ApplicationStatus"

const ApplicationPage=():JSX.Element=>{
   return(
    <Container fluid>
        <Row>
            <Col md={8}>
            <PersonalDataForm/>
            </Col>
            <Col>
            <ApplicationStatus/>
            </Col>
        </Row>
    </Container>
   )
}

export default ApplicationPage