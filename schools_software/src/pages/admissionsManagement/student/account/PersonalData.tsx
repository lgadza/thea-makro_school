import { useEffect, useState } from "react"
import { Col, Form, Row } from "react-bootstrap"
import { ApplicantRegistration, PersonalDataInterface } from "../../../../Types"
import { useSelector } from "react-redux"
import { getApplicantData } from "../../../../redux/actions"
import { useDispatch } from "react-redux"
import { Button } from "react-bootstrap"


const PersonalData=():JSX.Element=>{
    const dispatch:any=useDispatch()
    const data=useSelector((state:any)=>state.applicantData.data)
const initialPersonalData:PersonalDataInterface={
    first_name:"",
    last_name:"",
    second_name:"",
    date_of_birth:"",
    gender:"",
    phone_number:"",
    email:"",
    country_code:"",
    citizenship:""
}
const handleSubmit=(e:React.FormEvent)=>{
e.preventDefault()
}
const handleChange=(e:any)=>{
const {name,value}=e.target;
setPersonalData((data)=>({
    ...data,
    [name]:value
}))
console.log(personalData);
}
    const [personalData,setPersonalData]=useState<PersonalDataInterface>(initialPersonalData)
    useEffect(()=>{
        dispatch(getApplicantData())
    })
    return(
<div>
<h5 className="d-flex mb-4 header">Personal data</h5>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">First name <span className="text-danger">*</span></Form.Label>
          <Form.Control
           placeholder="First name"
           name="first_name"
           value={personalData.first_name}
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
          value={personalData.last_name}
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
          value={personalData.second_name}
          onChange={handleChange}
          />
        </Col>
        <Col>
        <Form.Label className="d-flex">Date of birth<span className="text-danger">*</span></Form.Label>
          <Form.Control 
          placeholder="Date of birth" 
           required
           name="date_of_birth"
          value={personalData.date_of_birth}
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
          value={personalData.country_code}
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
          value={personalData.phone_number}
          onChange={handleChange}
          />
        </Col>
       
      </Row>
    </Form >
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
       
        <Col>
       
        <Form.Label className="d-flex">Gender<span className="text-danger">*</span></Form.Label>
    <Form.Control as="select" required
    name="gender"
    value={personalData.gender}
    onChange={handleChange}
    >
      <option value="male">Male</option>
      <option value="female">Female</option>
    </Form.Control>
  
        </Col>
        <Col>
        <Form.Label className="d-flex">Citizenship<span className="text-danger">*</span></Form.Label>
          <Form.Control type="tel" 
          placeholder="citizenship" 
          required
          name="citizenship"
          value={personalData.citizenship}
          onChange={handleChange}
          />
        </Col>
      </Row>
    </Form>
    <div className="d-flex justify-content-end">
        <Button variant="primary" className="px-3">Update</Button>
    </div>
</div>
    )
}
export default PersonalData