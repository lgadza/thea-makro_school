import { useEffect, useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { ApplicantRegistration, GuardianInterface } from "../../../../Types"
import { useSelector } from "react-redux"
import { getApplicantData } from "../../../../redux/actions"
import { useDispatch } from "react-redux"
import { RootState } from "../../../../redux/store"
import { Dispatch } from "redux"


const Guardian=():JSX.Element=>{
    const dispatch:Dispatch<any> = useDispatch()
    const data=useSelector((state:RootState)=>state.applicantData.data)
    const accessToken=useSelector((state:RootState)=>state.accessToken.accessToken)
const initialGuardian:GuardianInterface={
    first_name:"",
    last_name:"",
    phone_number:"",
    email:"",
    country_code:"",
    relationship:""

  
}
const handleSubmit=(e:React.FormEvent)=>{
e.preventDefault()
}
const handleChange=(e:any)=>{
const {name,value}=e.target;
setGuardian((data)=>({
    ...data,
    [name]:value
}))
console.log(guardian);
}
    const [guardian,setGuardian]=useState<GuardianInterface>(initialGuardian)
    useEffect(()=>{
        // dispatch(getApplicantData(accessToken))
    })
    return(
<div>
<h5 className="d-flex mb-4">Guardian/Parent</h5>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">Guardian first_name <span className="text-danger">*</span></Form.Label>
          <Form.Control
           placeholder="First_name"
           name="first_name"
           value={guardian.first_name}
            required 
            onChange={handleChange}
            />
        </Col>
        <Col>
        <Form.Label className="d-flex">Guardian last_name <span className="text-danger">*</span></Form.Label>
          <Form.Control 
          placeholder="Last_name" 
          required
          name="last_name"
          value={guardian.last_name}
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
          value={guardian.country_code}
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
          value={guardian.phone_number}
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
          value={guardian.relationship}
          onChange={handleChange}
          />
  
        </Col>
        <Col>
       
        </Col>
      </Row>
    </Form>
    <div className="d-flex justify-content-end">
        <Button variant="primary" className="px-3">Update</Button>
    </div>
</div>
    )
}
export default Guardian