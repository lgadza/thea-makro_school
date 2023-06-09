import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Row } from "react-bootstrap"

const Settings=():JSX.Element=>{
    return(
        <div>
<h5 className="d-flex mb-4 header">Settings</h5>
<Row className="mb-4">
    <Col><span className="d-flex">Account status:</span></Col>
    <Col> <span className="d-flex align-items-center text-success"><FontAwesomeIcon className="me-2" icon={faCircle} style={{fontSize:"0.5rem"}}/>
    <span>Active</span>
    </span></Col>
</Row>
<Row className="mb-4">
    <Col><span className="d-flex">Enrollment number</span></Col>
    <Col>
    <span className="d-flex">18373</span>
    </Col>
</Row>
<Row className="mb-4">
    <Col><span className="d-flex">School email</span></Col>
    <Col>
    <span className="d-flex">32644@student.fhs.com</span>
    </Col>
</Row>
        </div>
    )
}
export default Settings