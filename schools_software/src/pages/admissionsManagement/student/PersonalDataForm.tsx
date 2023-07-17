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
              <Form.Label className="d-flex">Date of birth<span className="text-danger">*</span></Form.Label>
                <Form.Control 
                placeholder="Date of birth" 
                required
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                />
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
          
      {/* <div className="d-flex">
      <Form.Check  type="checkbox" 
          id="checkbox1"
          name="policy_acceptance"
            
                onChange={handleCheckboxChange}
          />
          <Form.Label className="mx-2 text-start">I confirm that I have read the Regulation and Privacy Policy and I declare that I accept them.</Form.Label>
      </div> */}
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
   )
}
export default PersonalDataForm