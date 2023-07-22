import { useEffect, useState } from "react"
import { Col, Form, Row } from "react-bootstrap"
import { ApplicantRegistration, PersonalDataInterface } from "../../../../Types"
import { useSelector } from "react-redux"
import { getApplicantData } from "../../../../redux/actions"
import { useDispatch } from "react-redux"
import { Button } from "react-bootstrap"
import { RootState } from "../../../../redux/store"
import { Dispatch } from "redux"


const PersonalData=():JSX.Element=>{
    const dispatch:Dispatch<any>=useDispatch()
    const user=useSelector((state:RootState)=>state.applicantData.data)
    const accessToken=useSelector((state:RootState)=>state.loginApplicant.accessToken)
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
const [personalData, setPersonalData] = useState<PersonalDataInterface>(initialPersonalData);
const [editMode, setEditMode] = useState<boolean>(false);
const handleSubmit=(e:React.FormEvent)=>{
e.preventDefault()
}
const handleChange=(e:any)=>{
const {name,value}=e.target;
setPersonalData((data)=>({
    ...data,
    [name]:value
}))
}

useEffect(() => {
  // dispatch(getApplicantData(accessToken));
  if (user) {
    setPersonalData(user);
  }
}, [user]);
const handleEditClick = () => {
  setEditMode((prev) => !prev);
};


    return(
<div>
<h5 className="d-flex mb-4">Personal data</h5>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">First name <span className="text-danger">*</span></Form.Label>
          <Form.Control
           placeholder="First name"
           name="first_name"
           value={!editMode?user.first_name:personalData.first_name}
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
          value={!editMode?user.last_name:personalData.last_name}
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
          value={!editMode?user.second_name:personalData.second_name}
          onChange={handleChange}
          />
        </Col>
        <Col>
        <Form.Label className="d-flex">Date of birth<span className="text-danger">*</span></Form.Label>
          <Form.Control 
          placeholder="Date of birth" 
           required
           name="date_of_birth"
          value={!editMode?user.date_of_birth:personalData.date_of_birth}
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
          value={!editMode?user.country_code:personalData.country_code}
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
          value={!editMode?user.phone_number:personalData.phone_number}
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
    value={!editMode?user.gender:personalData.gender}
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
          value={!editMode?user.citizenship:personalData.citizenship}
          onChange={handleChange}
          />
        </Col>
      </Row>
    </Form>
    <div className="d-flex justify-content-end">
         <Button variant="primary" className="px-3" onClick={handleEditClick}>
          {editMode ? "Cancel" : "Edit"}
        </Button>
        {editMode && (
          <Button variant="success" className="ms-2 px-3" type="submit" form="personalDataForm">
            Save
          </Button>
        )}
    </div>
</div>
    )
}
export default PersonalData