import { Col, Container, Row,Form, Button } from "react-bootstrap" 
import "../styling.css"
const PersonalDataForm=():JSX.Element=>{
   return( 
    <Container>
    {/* Student Personal Data*/}

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
          <Form.Control placeholder="Second name" />
        </Col>
        <Col>
        <Form.Label className="d-flex">Date of birth<span className="text-danger">*</span></Form.Label>
          <Form.Control placeholder="Date of birth"  required/>
        </Col>
      </Row>
    </Form>
    <Form className="my-3">
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
    <Form className="my-3">
      <Row>
        <Col>
        <Form.Label className="d-flex">Mobile number<span className="text-danger">*</span></Form.Label>
          <Form.Control type="tel" placeholder="Phone number" required/>
        </Col>
        <Col>
       
  
        </Col>
      </Row>
    </Form >
    {/* Student Address */}
    <h5 className="d-flex my-3">Address</h5>
    <Form className="my-3">
      <Row>
        <Col>
        <Form.Label className="d-flex">Street <span className="text-danger">*</span></Form.Label>
          <Form.Control placeholder="Street" required/>
        </Col>
        <Col>
        <Form.Label className="d-flex">Building no <span className="text-danger">*</span></Form.Label>
          <Form.Control placeholder="Building no"  required/>
        </Col>
      </Row>
    </Form>
    <Form className="my-3">
      <Row>
        <Col>
        <Form.Label className="d-flex">Apartment no </Form.Label>
          <Form.Control placeholder="Apartment number" />
        </Col>
        <Col>
        <Form.Label className="d-flex">Postal code</Form.Label>
          <Form.Control placeholder="Postal code"/>
        </Col>
      </Row>
    </Form>
    <Form className="my-3">
      <Row>
        <Col>
        <Form.Label className="d-flex">City<span className="text-danger">*</span></Form.Label>
          <Form.Control placeholder="City" required/>
        </Col>
        <Col>
       
        <Form.Label className="d-flex">Country<span className="text-danger">*</span></Form.Label>
    <Form.Control as="select" required>
      <option value="Zimbabwe">Zimbabwe</option>
      <option value="South Africa">South Africa</option>
      <option value="Malawi">Malawi</option>
      <option value="Mozambique">Mozambique</option>
      <option value="Bostwana">Bostwana</option>
    </Form.Control>
  
        </Col>
      </Row>
    </Form>
    <Form className="my-3">
      <Row>
        <Col>
        <Form.Label className="d-flex">Type of living place<span className="text-danger">*</span></Form.Label>
          <Form.Control as="select" placeholder="Phone number" required>
            <option value="city">City</option>
            <option value="village">Village</option>
          </Form.Control>
        </Col>
        <Col>
       
  
        </Col>
      </Row>
    </Form>
    <Form className="my-3">
      <Row>
        <Col>
        <Button variant="primary" className="d-flex mt-3 justify-content-end" type="submit">
    Submit
  </Button>
        </Col>
      </Row>
    </Form>
    
    
        </Container>
   )
}
export default PersonalDataForm