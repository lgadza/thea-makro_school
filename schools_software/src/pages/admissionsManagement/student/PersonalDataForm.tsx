import { Col, Container, Row,Form, Button } from "react-bootstrap" 
import "../styling.css"
import { ApplicantRegistration } from "../../../Types"
import { useState } from "react"
const PersonalDataForm=():JSX.Element=>{


const initialFormData: ApplicantRegistration = {
  first_name: '',
  last_name: '',
  second_name: '',
  date_of_birth: '',
  gender: '',
  citizenship: '',
  street: '',
  building_number: '',
  apartment_number: '',
  postal_code: '',
  city: '',
  province: '',
  country: '',
  phone_number: '',
  email: '',
  policy_acceptance: '',
  data_process_acceptance: '',
  password: '',
  settlement_type: '',
};

const [formData, setFormData] = useState<ApplicantRegistration>(initialFormData);
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log(formData);
};
const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
  const {name,value}=e.target;
setFormData((prevFormData)=>({
  ...prevFormData,
  [name]:value
}))
}
   return( 
    <Container>
    {/* Student Personal Data*/}

        <h5 className="d-flex mb-4 header">Personal data</h5>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">First name <span className="text-danger">*</span></Form.Label>
          <Form.Control
           placeholder="First name"
           name="first_name"
           value={formData.first_name}
            required 
            onChange={handleChange}
            />
        </Col>
        <Col>
        <Form.Label className="d-flex">Last name <span className="text-danger">*</span></Form.Label>
          <Form.Control placeholder="Last name"  required/>
        </Col>
      </Row>
    </Form>
    <Form className="my-3" onSubmit={handleSubmit}>
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
    <Form className="my-3" onSubmit={handleSubmit}>
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
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">Code<span className="text-danger">*</span></Form.Label>
          <Form.Control  as="select" required>
          <option value="236">263</option>
          <option value="27">27</option>
          </Form.Control>
        </Col>
        <Col>
        <Form.Label className="d-flex">Mobile number<span className="text-danger">*</span></Form.Label>
          <Form.Control type="tel" placeholder="Phone number" required/>
        </Col>
       
      </Row>
    </Form >
    {/* Student Address */}
    <h5 className="d-flex my-4 header">Address</h5>
    <Form className="my-3" onSubmit={handleSubmit}>
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
    <Form className="my-3" onSubmit={handleSubmit}>
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
    <Form className="my-3" onSubmit={handleSubmit}>
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
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
      <Col>
        <Form.Label className="d-flex">Province<span className="text-danger">*</span></Form.Label>
          <Form.Control as="select" placeholder="Phone number" required>
            <option value="city">Bulawayo</option>
            <option value="village">Harare</option>
          </Form.Control>
  
        </Col>
        <Col>
        <Form.Label className="d-flex">Type of settlement<span className="text-danger">*</span></Form.Label>
          <Form.Control as="select" placeholder="Phone number" required>
            <option value="city">City</option>
            <option value="village">Village</option>
          </Form.Control>
        </Col>
     
      </Row>
    </Form>
    {/* Login details */}
    <h5 className="d-flex my-4 header">Login details</h5>
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">Email </Form.Label>
          <Form.Control placeholder="Email" />
        </Col>
       
      </Row>
    </Form>
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">Password <span className="text-danger">*</span></Form.Label>
          <Form.Control placeholder="Password" required/>
        </Col>
         <Col>
        <Form.Label className="d-flex">Confirm password <span className="text-danger">*</span></Form.Label>
          <Form.Control placeholder="Confirm password" required/>
        </Col>
      </Row>
    </Form>
 <Form className="my-3" onSubmit={handleSubmit}>
  <Row>
    <Col>
    <Form.Check  type="checkbox" id="checkbox" label="I confirm that I have read the Regulation and Privacy Policy and I declare that I accept them."/>
    <Form.Check  type="checkbox" id="checkbox" label="I consent to the processing of my data for the purposes of the current and future admission in accordance with the provisions of Regulation of Zimbabwe. More about the principles of personal data processing in the PRIVACY POLICY."/>
    </Col>
  </Row>

 </Form>
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Button variant="primary" className="w-100 mt-3 justify-content-end" type="submit">
    Become a candidate - apply
  </Button>
        </Col>
      </Row>
    </Form>
    
    
        </Container>
   )
}
export default PersonalDataForm