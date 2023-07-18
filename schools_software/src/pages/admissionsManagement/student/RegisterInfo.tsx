import { Col, Container, Row,Form, Button, Spinner, Modal } from "react-bootstrap" 
import "../styling.css"
import { ApplicantRegistration } from "../../../Types"
import { useState,ChangeEvent, useEffect } from "react"
import { useDispatch } from "react-redux"
import { ApplicantRegister } from "../../../redux/actions"
import { Dispatch } from 'redux';
import { useSelector } from "react-redux"
import { RootState } from '../../../redux/store/index.js';
import { useNavigate } from "react-router-dom"

const PersonalDAta=():JSX.Element=>{
const response=useSelector((state:RootState)=>state.applicantRegistration.data)
const isError=useSelector((state:RootState)=>state.applicantRegistration.isError)
const isLoading=useSelector((state:RootState)=>state.applicantRegistration.isLoading)
const dispatch=useDispatch()
const navigate=useNavigate()
const [show, setShow] = useState(false);
const [signUpClicked, setSignUpClicked] = useState(false);
const initialFormData: ApplicantRegistration = {
  first_name: '',
  last_name: '',
  second_name: '',
  date_of_birth: '',
  gender: '',
  citizenship: '',
  phone_number:'' ,
  email: '',
  policy_acceptance: false,
  data_process_acceptance: false,
  password: '',
  country_code:''
};

const [formData, setFormData] = useState<ApplicantRegistration>(initialFormData);
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
};
const isFormValid = (): boolean => {
  return (
    formData.first_name.trim() !== "" &&
    formData.last_name.trim() !== "" &&
    formData.country_code.trim() !== "" &&
    formData.phone_number.trim() !== "" &&
    formData.citizenship.trim() !== "" &&
    formData.gender.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.date_of_birth.trim() !== "" &&
    formData.password.trim() !== "" &&
    formData.data_process_acceptance === true
  );
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

const handleRegistration = async() => {
 const success=await dispatch<any>(ApplicantRegister(formData));

if(!isError && success){
  navigate("/mss/login")
}else{
  setShow(true)
}
};
console.log(response)
const handleClose = () => setShow(false);
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
              <Form.Label className="d-flex">Country code<span className="text-danger">*</span></Form.Label>
                <Form.Control 
                as="select"
                required
                name="country_code"
                value={formData.country_code}
                onChange={handleChange}
                >
                  <option>Select</option>
            <option value="+263">+263</option>
            <option value="+27">+27</option>
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
            <option>Select</option>
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
                <Button variant="primary" onClick={handleRegistration} className="w-100 mt-3 justify-content-end" type="submit" disabled={!isFormValid()}>
         {
          isLoading && (
            <span>
               <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>
               <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>
               <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>
            </span>
          )
         }
         {!isLoading && sign (<span>Sign Up</span>)}
        
                </Button>
              </Col>
            </Row>
          </Form>
          

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="error-bg box-shadow border-radius-round">
          <div className="my-4">
            {/* {response.message} */}
          </div>
          <Button className="d-flex justify-content-end" variant="primary" onClick={handleClose}>
            close
          </Button>
          </Modal.Body>
      </Modal>
  </div>
   )
}
export default PersonalDAta