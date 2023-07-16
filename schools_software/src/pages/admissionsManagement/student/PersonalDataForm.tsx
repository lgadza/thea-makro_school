import { Col, Container, Row,Form, Button } from "react-bootstrap" 
import "../styling.css"
import { ApplicantRegistration } from "../../../Types"
import { useState,ChangeEvent, useEffect } from "react"
import { useDispatch } from "react-redux"
import { ApplicantRegister } from "../../../redux/actions"
import { Dispatch } from 'redux';

const PersonalDataForm=():JSX.Element=>{

const dispatch=useDispatch()
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
  postal_code:"" ,
  city: '',
  province: '',
  country: '',
  phone_number: '',
  email: '',
  policy_acceptance: false,
  data_process_acceptance: false,
  password: '',
  settlement_type: '',
  country_code:'',
  parentParentId:"fdcd62db-46bd-4364-8860-33be6a38033d"
};

const [formData, setFormData] = useState<ApplicantRegistration>(initialFormData);
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
};
const handleChange=(e:any)=>{ //e:ChangeEvent<HTMLInputElement | HTMLSelectElement>
  const {name,value}=e.target ;
  setFormData((prevFormData)=>({
    ...prevFormData,
    [name]:value
  }))
  
}
const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, checked } = e.target;
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: checked ? true : false,
  }));
  console.log(formData.policy_acceptance);

};

const handleRegistration = () => {
  dispatch<any>(ApplicantRegister(formData));
};

   return( 
    <div>
    {/* Student Personal Data*/}
        <h5 className="d-flex mb-4 header">Personal data</h5>
<div className="content_bg p-3">
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
          <Form.Control 
          placeholder="Last name" 
          required
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          />
        </Col>
      </Row>
    </Form>
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">Second name </Form.Label>
          <Form.Control 
          placeholder="Second name" 
          name="second_name"
          value={formData.second_name}
          onChange={handleChange}
          />
        </Col>
        <Col>
        <Form.Label className="d-flex">Date of birth<span className="text-danger">*</span></Form.Label>
          <Form.Control 
          placeholder="Date of birth" 
           required
           name="date_of_birth"
          value={formData.date_of_birth}
          onChange={handleChange}
           />
        </Col>
      </Row>
    </Form>
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">Citizenship<span className="text-danger">*</span></Form.Label>
          <Form.Control
           placeholder="Citizenship" 
           required
           name="citizenship"
          value={formData.citizenship}
          onChange={handleChange}
           />
        </Col>
        <Col>
       
        <Form.Label className="d-flex">Gender<span className="text-danger">*</span></Form.Label>
    <Form.Control as="select" required
    name="gender"
    value={formData.gender}
    onChange={handleChange}
    >
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
          <Form.Control  as="select" required
          name="country_code"
          value={formData.country_code}
          onChange={handleChange}
          >
          <option value="236">263</option>
          <option value="27">27</option>
          </Form.Control>
        </Col>
        <Col>
        <Form.Label className="d-flex">Mobile number<span className="text-danger">*</span></Form.Label>
          <Form.Control type="tel" 
          placeholder="Phone number" 
          required
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          />
        </Col>
       
      </Row>
    </Form >
    </div>
    {/* Student Address */}
    <h5 className="d-flex my-4 header">Address</h5>
    <div className="content_bg p-3">
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">Street <span className="text-danger">*</span></Form.Label>
          <Form.Control 
          placeholder="Street"
           required
           name="street"
          value={formData.street}
          onChange={handleChange}
           />
        </Col>
        <Col>
        <Form.Label className="d-flex">Building no <span className="text-danger">*</span></Form.Label>
          <Form.Control 
          placeholder="Building no"
            required
            name="building_number"
          value={formData.building_number}
          onChange={handleChange}
            />
        </Col>
      </Row>
    </Form>
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">Apartment no </Form.Label>
          <Form.Control 
          placeholder="Apartment number" 
          name="apartment_number"
          value={formData.apartment_number}
          onChange={handleChange}
          />
        </Col>
        <Col>
        <Form.Label className="d-flex">Postal code</Form.Label>
          <Form.Control
           placeholder="Postal code"
           name="postal_code"
          value={formData.postal_code}
          onChange={handleChange}
           />
        </Col>
      </Row>
    </Form>
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">City<span className="text-danger">*</span></Form.Label>
          <Form.Control
           placeholder="City"
            required
            name="city"
          value={formData.city}
          onChange={handleChange}
            />
        </Col>
        <Col>
       
        <Form.Label className="d-flex">Country<span className="text-danger">*</span></Form.Label>
    <Form.Control 
    as="select"
     required
     name="country"
          value={formData.country}
          onChange={handleChange}
     >
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
          <Form.Control as="select"
          
          required
          name="province"
          value={formData.province}
          onChange={handleChange}
          >
            <option value="Bulawayo">Bulawayo</option>
            <option value="Harare">Harare</option>
          </Form.Control>
  
        </Col>
        <Col>
        <Form.Label className="d-flex">Type of settlement<span className="text-danger">*</span></Form.Label>
          <Form.Control
           as="select"
          
            required 
            name="settlement_type"
          value={formData.settlement_type}
          onChange={handleChange}
          >
            <option value="city">City</option>
            <option value="village">Village</option>
          </Form.Control>
        </Col>
     
      </Row>
    </Form>
    </div>
    {/* Parents */}
<h5 className="d-flex my-4 header">Guardian/Parent</h5>
    <div className="content_bg p-3">
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">Guardian first_name <span className="text-danger">*</span></Form.Label>
          <Form.Control
           placeholder="Guardian first_name"
           name="first_name"
          //  value={guardian.first_name}
            required 
            onChange={handleChange}
            />
        </Col>
        <Col>
        <Form.Label className="d-flex">Guardian last_name <span className="text-danger">*</span></Form.Label>
          <Form.Control 
          placeholder="Guardian last_name" 
          required
          name="last_name"
          // value={guardian.last_name}
          onChange={handleChange}
          />
        </Col>
      </Row>
    </Form>
    
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">Code<span className="text-danger">*</span></Form.Label>
          <Form.Control  as="select" required
          name="country_code"
          // value={guardian.country_code}
          onChange={handleChange}
          >
          <option value="236">263</option>
          <option value="27">27</option>
          </Form.Control>
        </Col>
        <Col>
        <Form.Label className="d-flex">Mobile number<span className="text-danger">*</span></Form.Label>
          <Form.Control type="tel" 
          placeholder="Phone number" 
          required
          name="phone_number"
          // value={guardian.phone_number}
          onChange={handleChange}
          />
        </Col>
       
      </Row>
    </Form >
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
       
        <Col>
       
        <Form.Label className="d-flex">Relationship <span className="text-danger">*</span></Form.Label>
          <Form.Control 
          placeholder="Relationship" 
          required
          name="relationship"
          // value={guardian.relationship}
          onChange={handleChange}
          />
  
        </Col>
        <Col>
       
        </Col>
      </Row>
    </Form>
</div>
    {/* Login details */}
    <h5 className="d-flex my-4 header">Login details</h5>
    <div className="content_bg p-3">
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">Email <span className="text-danger">*</span> </Form.Label>
          <Form.Control placeholder="Email" 
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
          />
        </Col>
       
      </Row>
    </Form>
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">Password <span className="text-danger">*</span></Form.Label>
          <Form.Control
           placeholder="Password" 
          required
          name="password"
          value={formData.password}
          onChange={handleChange}
          />
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
    
 <div className="d-flex">
 <Form.Check  type="checkbox" 
    id="checkbox1"
    name="policy_acceptance"
       
          onChange={handleCheckboxChange}
     />
     <Form.Label className="mx-2 text-start">I confirm that I have read the Regulation and Privacy Policy and I declare that I accept them.</Form.Label>
 </div>
 <div className="d-flex">

    <Form.Check 
     type="checkbox"
      id="checkbox2" 
      name="data_process_acceptance"
          onChange={handleCheckboxChange}
      />
        <Form.Label className="mx-2 text-start">I consent to the processing of my data for the purposes of the current and future admission in accordance with the provisions of Regulation of Zimbabwe. More about the principles of personal data processing in the PRIVACY POLICY.</Form.Label>
      
 </div>
    </Col>
  </Row>

 </Form>
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Button variant="primary" onClick={handleRegistration} className="w-100 mt-3 justify-content-end" type="submit">
    Become a candidate - apply
  </Button>
        </Col>
      </Row>
    </Form>
    </div>
    
    
        </div>
   )
}
export default PersonalDataForm