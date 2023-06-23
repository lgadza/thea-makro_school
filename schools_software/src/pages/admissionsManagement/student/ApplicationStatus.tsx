import { Col, Container, Row } from "react-bootstrap"

const ApplicationStatus=():JSX.Element=>{
    return(
        <Container>
    <h5 className="d-flex my-3">Status</h5>
<div className="statuses">
    <Row>
        <Col>
        <div className="progress-container">
      <ul className="progress-steps">
          <li className="active">Application delivered to the Institute.</li>
          <li>The application has not yet been opened.</li>
          <li>Waiting for information from the Institute.</li>
          <li>Comments</li>
  </ul>
</div>
           
</Col>
    </Row>
    </div>        
    </Container>
    )
}
export default ApplicationStatus