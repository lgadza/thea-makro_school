import { Col, Container, Row,Form } from "react-bootstrap" 
const PersonalDataForm=():JSX.Element=>{
   return( 
    <Container>
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
        {/* <Form.Label className="d-flex">Last name <span className="text-danger">*</span></Form.Label>
          <Form.Control placeholder="Last name"  required/> */}
        </Col>
      </Row>
    </Form>
        </Container>
   )
}
export default PersonalDataForm