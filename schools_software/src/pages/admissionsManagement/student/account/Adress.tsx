import { useEffect, useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { ApplicantRegistration, AddressInterface } from "../../../../Types"
import { useSelector } from "react-redux"
import { getApplicantData, getUserAddress, postUserAddress } from "../../../../redux/actions"
import { useDispatch } from "react-redux"
import { RootState } from "../../../../redux/store"


const Address=():JSX.Element=>{
  const accessToken=useSelector((state:RootState)=>state.accessToken.accessToken)
    const dispatch:any=useDispatch()
    const user=useSelector((state:any)=>state.applicantData.data)
    const userAddress=useSelector((state:RootState)=>state.getUserAddress.address)
const initialAddress:AddressInterface={
    street:"",
    building_number:"",
    apartment_number:"",
    postal_code:"",
    location:"",
    province:"",
    country:"Zimbabwe",
    email:"",
    type_of_settlement:"",
    city:"Bulawayo"
    
}
const handleSubmit=(e:React.FormEvent)=>{
e.preventDefault()
}
const [editMode, setEditMode] = useState<boolean>(false);
const [address,setAddress]=useState<AddressInterface>(userAddress?userAddress:initialAddress)
console.log(address,"EDITED")
const handleChange=(e:any)=>{
const {name,value}=e.target;
setAddress((data)=>({
    ...data,
    [name]:value
}))
}
const isAddressValid=():boolean=>{
return(
  address.building_number.trim() !=="" &&
  address.city.trim() !=="" &&
  address.country.trim() !=="" &&
  address.province.trim() !==""&&
  address.type_of_settlement.trim()!== "" &&
  address.street.trim()!==""
)
}

const handleSave= async()=>{
 await dispatch(postUserAddress(accessToken.accessToken,initialAddress,user.id))
 dispatch(getApplicantData(accessToken.accessToken))
 dispatch(getUserAddress(accessToken.accessToken,user.id))
 setEditMode(false)
}
    useEffect(()=>{
       dispatch(getUserAddress(accessToken.accessToken,user.id))
    },[])

    const handleEditClick = () => {
      setEditMode((prev) => !prev);
    };
    console.log(userAddress,"USERADDRESS")
    return(
<div>
<h5 className="d-flex mb-4">Address</h5>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">Street <span className="text-danger">*</span></Form.Label>
          <Form.Control
           placeholder="Street"
           name="street"
           value={userAddress&&!editMode?userAddress.street:address.street}
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
          value={userAddress&&!editMode?userAddress.building_number:address.building_number}
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
          value={userAddress&&!editMode?userAddress.apartment_number:address.apartment_number}
          onChange={handleChange}
          />
        </Col>
        <Col>
        <Form.Label className="d-flex">Postal code
        </Form.Label>
          <Form.Control 
          placeholder="Post code" 
           name="postal_code"
          value={userAddress&&!editMode?userAddress.postal_code:address.postal_code}
          onChange={handleChange}
           />
        </Col>
      </Row>
    </Form>
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
      <Col>
        <Form.Label className="d-flex">Location<span className="text-danger">*</span></Form.Label>
          <Form.Control
           placeholder="eg. Pumula South"
            required
            name="location"
          value={userAddress&&!editMode?userAddress.location:address.location}
          onChange={handleChange}
            />
        </Col>
        <Col></Col>
      </Row>
    </Form>
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
      <Col>
        <Form.Label className="d-flex">Type of settlement<span className="text-danger">*</span></Form.Label>
          <Form.Control
           as="select"
          
            required 
            name="type_of_settlement"
          value={userAddress&&!editMode?userAddress.type_of_settlement:address.type_of_settlement}
          onChange={handleChange}
          >
            <option>Select</option>
            <option value="city">City</option>
            <option value="village">Village</option>
          </Form.Control>
        </Col>
        <Col>
       
        <Form.Label className="d-flex">Province<span className="text-danger">*</span></Form.Label>
    <Form.Control as="select" required
    name="province"
    value={userAddress&&!editMode?userAddress.province:address.province}
    onChange={handleChange}
    >
      <option>Select</option>
      <option value="Bulawayo">Bulawayo</option>
      <option value="Harare">Harare</option>
    </Form.Control>
  
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
          value={userAddress&&!editMode?userAddress.city:address.city}
          onChange={handleChange}
            />
        </Col>
        <Col>
        <Form.Label className="d-flex">Country<span className="text-danger">*</span></Form.Label>
    <Form.Control as="select" required
    name="country"
    value={userAddress&&!editMode?userAddress.country:address.country}
    onChange={handleChange}
    >
      <option>Select</option>
      <option value="Zimbabwe">Zimbabwe</option>
      <option value="South Africa">South Africa</option>
    </Form.Control>
  
        </Col>
      </Row>
    </Form>
    <div className="d-flex justify-content-end">
      {address?(
        <Button variant="primary" className="px-3" disabled={!isAddressValid()} onClick={handleSave}>Update</Button>
      ):(
        <div>
             <Button variant="primary" className="px-3" onClick={handleEditClick}>
          {editMode ? "Cancel" : "Edit"}
        </Button>
        {editMode && (
          <Button variant="success" className="ms-2 px-3" type="submit" form="personalDataForm" onClick={handleSave}>
            Save
          </Button>
        )}
        </div>
      )}
        
       
    </div>
</div>
    )
}
export default Address