import { useEffect, useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { ApplicantRegistration, AddressInterface } from "../../../../Types"
import { useSelector } from "react-redux"
import { getApplicantData } from "../../../../redux/actions"
import { useDispatch } from "react-redux"


const Address=():JSX.Element=>{
    const dispatch:any=useDispatch()
    const data=useSelector((state:any)=>state.applicantData.data)
const initialAddress:AddressInterface={
    street:"",
    building_number:"",
    apartment_number:"",
    postal_code:"",
    province:"",
    country:"",
    email:"",
    settlement_type:"",
    
}
const handleSubmit=(e:React.FormEvent)=>{
e.preventDefault()
}
const handleChange=(e:any)=>{
const {name,value}=e.target;
setAddress((data)=>({
    ...data,
    [name]:value
}))
console.log(address);
}
    const [address,setAddress]=useState<AddressInterface>(initialAddress)
    useEffect(()=>{
        dispatch(getApplicantData())
    })
    return(
<div>
<h5 className="d-flex mb-4 header">Address</h5>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">Street <span className="text-danger">*</span></Form.Label>
          <Form.Control
           placeholder="Street"
           name="street"
           value={address.street}
            required 
            onChange={handleChange}
            />
        </Col>
        <Col>
        <Form.Label className="d-flex">Building number <span className="text-danger">*</span></Form.Label>
          <Form.Control 
          placeholder="Building number" 
          required
          name="building_number"
          value={address.building_number}
          onChange={handleChange}
          />
        </Col>
      </Row>
    </Form>
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">Apartment number </Form.Label>
          <Form.Control 
          placeholder="Apartment number" 
          name="apartment_number"
          value={address.apartment_number}
          onChange={handleChange}
          />
        </Col>
        <Col>
        <Form.Label className="d-flex">Post code<span className="text-danger">*</span>
        </Form.Label>
          <Form.Control 
          placeholder="Post code" 
        //    required
           name="postal_code"
          value={address.postal_code}
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
          name="settlement_type"
          value={address.settlement_type}
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
          name="country"
          value={address.country}
          onChange={handleChange}
          />
        </Col>
       
      </Row>
    </Form >
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
       
        <Col>
       
        <Form.Label className="d-flex">Province<span className="text-danger">*</span></Form.Label>
    <Form.Control as="select" required
    name="province"
    value={address.province}
    onChange={handleChange}
    >
      <option value="male">Bulawayo</option>
      <option value="female">Harare</option>
    </Form.Control>
  
        </Col>
        <Col>
        
        </Col>
      </Row>
    </Form>
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
       
        <Col>
       
        <Form.Label className="d-flex">Country<span className="text-danger">*</span></Form.Label>
    <Form.Control as="select" required
    name="country"
    value={address.country}
    onChange={handleChange}
    >
      <option value="Zimbabwe">Zimbabwe</option>
      <option value="South Africa">South Africa</option>
    </Form.Control>
  
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
export default Address