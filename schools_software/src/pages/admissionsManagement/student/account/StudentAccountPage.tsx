import { Col, Container,Row } from "react-bootstrap"
import StudentNavigationbar from "../StudentNavigationbar"
import PersonalData from "./PersonalData"

const StudentAccountPage=():JSX.Element=>{
    return(
        <Container  className="content_bg">
<Row>
    <Col sm={3}>
    <StudentNavigationbar/>
    </Col>
    <Col sm={9}>
    <PersonalData/>
    </Col>
</Row>
        </Container>
    )
}
export default StudentAccountPage