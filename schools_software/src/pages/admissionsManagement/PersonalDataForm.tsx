import { Col, Container, Row,Form } from "react-bootstrap" 
const PersonalDataForm=():JSX.Element=>{
   return( 
    <Container>
        <h5 className="d-flex mb-3">Personal data</h5>
    <Form>
      <Row>
        <Col>
        <Form.Label className="d-flex">First name <span className="text-danger">*</span></Form.Label>
          <Form.Control placeholder="First name" required/>
        </Col>
        <Col>
        <Form.Label className="d-flex">Last name <span className="text-danger">*</span></Form.Label>
          <Form.Control placeholder="Last name"  required/>
        </Col>
      </Row>
    </Form>
    <Form className="my-3">
      <Row>
        <Col>
        <Form.Label className="d-flex">Second name </Form.Label>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
        <Form.Label className="d-flex">Date of birth<span className="text-danger">*</span></Form.Label>
          <Form.Control placeholder="Date of birth"  required/>
        </Col>
      </Row>
    </Form>
    <Form>
      <Row>
        <Col>
        <Form.Label className="d-flex">Citizenship<span className="text-danger">*</span></Form.Label>
          <Form.Control placeholder="Citizenship" required/>
        </Col>
        <Col>
       
        <Form.Label className="d-flex">Gender<span className="text-danger">*</span></Form.Label>
    <Form.Control as="select" required>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </Form.Control>
  
        </Col>
      </Row>
    </Form>
    <Form>
      <Row>
        <Col>
        <Form.Label className="d-flex">Mobile number<span className="text-danger">*</span></Form.Label>
          <Form.Control type="tel" placeholder="Phone number" required/>
        </Col>
        <Col>
       
  
        </Col>
      </Row>
    </Form>
    <h5 className="d-flex my-3">Address</h5>

        </Container>
   )
}
export default PersonalDataForm