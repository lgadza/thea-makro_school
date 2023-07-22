import React, { useState } from 'react';
import { Navbar,Container, Nav,Button,Form,Card, FormControl, Row, Col, Alert } from 'react-bootstrap';
import m_logo from "../assets/md_logo_small.png"
import Image from './Image';
import { ImageProps } from '../Types';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { ApplicantLogin } from '../redux/actions';
import { RootState } from '../redux/store';
import { Dispatch } from 'redux';
export interface loginCredentialsInterface{
  email:string,
  password:string
}
const Login = (): JSX.Element => {
  const dispatch:Dispatch<any> =useDispatch()
  const navigate=useNavigate()
  const accessToken=useSelector((state:RootState)=>state.loginApplicant.accessToken)
  const isError=useSelector((state:RootState)=>state.loginApplicant.isError)
  console.log(isError,"ERROR")
  const initialLoginCred:loginCredentialsInterface={
    email:"",
    password:""
  }
  if(accessToken){
navigate("/mss/student/account/louis-gadza")
  }
  const [loginCredentials,setLoginCredentials]=useState<loginCredentialsInterface>(initialLoginCred)
  const handleChange=(e:any)=>{
const {name,value}= e.target;
setLoginCredentials((prev)=>({
  ...prev,[name]:value
}))
  }
  const isFormValid=():boolean=>{
    return(
      loginCredentials.email.trim()!=="" &&
      loginCredentials.password.trim()!==""
    )
  }
  const handleLogin=()=>{
    dispatch(ApplicantLogin(loginCredentials))
  }
  const  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <Container>
      {isError&&(
        <Alert variant='danger'>The email/password entered is incorrect</Alert>
      )}
      <Row className='d-flex justify-content-center align-item-center'>
        <Col className='login_container box-shadow main_bg' md={3}>
        <div className="imageContainer mb-3">
            <img
    src={m_logo}
    alt={"makrodex_logo"}
    style={{ width: "200px", height: "200px", }}
    className="img_component"
  />
        </div>
        
        <Form onSubmit={handleSubmit}>
  <Form.Group>
    <Form.Control type="email" name='email' value={loginCredentials.email} onChange={handleChange} placeholder="Enter email" className="mb-3" />
    
  </Form.Group>

  <Form.Group>
    <Form.Control type="password" name='password' value={loginCredentials.password} onChange={handleChange} placeholder="Password" className="mb-3" />
  </Form.Group>
  <div className='d-flex justify-content-between align-items-center'>
  <Form.Check label="Remember me"/>
    <Link to="">
    Set a new password
    </Link>
  </div>
  <div className='my-3'>
  <Button variant="primary" type="submit" disabled={!isFormValid()} className='w-100' onClick={handleLogin}>
   Sign in
  </Button>
  </div>

</Form>
       
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
