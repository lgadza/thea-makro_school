import { useEffect, useState } from "react"
import { Alert, Col, Form, Row } from "react-bootstrap"
import { ApplicantRegistration, GuardianInterface } from "../../../../Types"
import { useSelector } from "react-redux"
import { getApplicantData } from "../../../../redux/actions"
import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faCheckCircle, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"
import { Button } from "react-bootstrap"


const Documents=():JSX.Element=>{
    const dispatch:any=useDispatch()
    const data=useSelector((state:any)=>state.applicantData.data)
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
        // dispatch(getApplicantData())
    },[])
    return(
<div>
<Alert  variant="danger">
    <div className="d-flex">
    <FontAwesomeIcon className="me-2" icon={faTriangleExclamation}/>
    Information
    </div>
    <ul className="d-flex">
        <li>Documents should be uploaded only in PDF format!</li>
    </ul>
  </Alert>
<h5 className="d-flex">Required documents</h5>
<span className="d-flex mb-4 text-muted">Please upload documents that have a status missing.</span>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">Passport size photo <span className="text-danger">*</span></Form.Label>

        <div className="d-flex align-items-center">

        <span className="pe-2 d-flex align-items-center text-success"> 
        <FontAwesomeIcon icon={faCheckCircle} className="me-1" style={{ fontSize: "0.8rem" }} />
        Accepted</span>

          <Form.Control
          type="file"
           name="photo"
        //    value={guardian.photo}
            required 
            onChange={handleChange}
            />
            </div>
        </Col>
       
      </Row>
    </Form>
    
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
       
        <Col>
        <Form.Label className="d-flex">Academic transcript<span className="text-danger">*</span></Form.Label>
        <div className="d-flex align-items-center">
        <span className="pe-2 d-flex align-items-center text-danger"> 
        <FontAwesomeIcon icon={faTriangleExclamation} className="me-1" style={{ fontSize: "0.8rem" }} />
        Missing/Rejected</span>

          <Form.Control type="file" 
          
          name="academic_transcript"
          value={guardian.phone_number}
          onChange={handleChange}
          />
          </div>
        </Col>
       
      </Row>
    </Form >
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
       
      <Col>
        <Form.Label className="d-flex">Letter of recommendation/Transfer letter <span className="text-danger">*</span></Form.Label>
        <div className="d-flex align-items-center">
        <span className="pe-2 d-flex align-items-center text-danger"> 
        <FontAwesomeIcon icon={faTriangleExclamation} className="me-1" style={{ fontSize: "0.8rem" }} />
        Missing/Rejected</span>
          <Form.Control 
         
          type="file"
          name="transfer_letter"
        //   value={guardian.transfer_letter}
          onChange={handleChange}
          />
          </div>
        </Col>
      </Row>
    </Form>
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
       
      <Col>
        <Form.Label className="d-flex">Other Supporting Documents <span className="text-danger">*</span></Form.Label>
        <div className="d-flex align-items-center">
        <span className="pe-2 d-flex align-items-center text-danger"> 
        <FontAwesomeIcon icon={faTriangleExclamation} className="me-1" style={{ fontSize: "0.8rem" }} />
        Missing/Rejected</span>
          <Form.Control 
         
          type="file"
          name="other_supporting_docs"
        //   value={guardian.other_supporting_docs}
          onChange={handleChange}
          />
          </div>
        </Col>
      </Row>
    </Form>
    <div className="d-flex justify-content-end">
        <Button variant="primary" className="px-3">Update</Button>
    </div>
</div>
    )
}
export default Documents