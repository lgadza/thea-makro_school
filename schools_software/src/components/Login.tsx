import React, { useState } from 'react';
import { Navbar,Container, Nav,Button,Form,Card, FormControl, Row, Col } from 'react-bootstrap';
import m_logo from "../assets/md_logo_small.png"
import Image from './Image';
import { ImageProps } from '../Types';
import { Link } from 'react-router-dom';

const Login = (): JSX.Element => {
  interface loginCredentialsInterface{
    email:string,
    password:string
  }
  const initialLoginCred:loginCredentialsInterface={
    email:"",
    password:""
  }
  const [loginCredentials,setLoginCredentails]=useState<loginCredentialsInterface>(initialLoginCred)
  const handleLogin=(e:any)=>{
const {name,value}= e.target;
setLoginCredentails((prev)=>({
  ...prev,[name]:value
}))
  }
  return (
    <Container>
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
        
        <Form>
  <Form.Group>
    <Form.Control type="email" name='email' value={loginCredentials.email} onChange={handleLogin} placeholder="Enter email" className="mb-3" />
    
  </Form.Group>

  <Form.Group>
    <Form.Control type="password" name='password' value={loginCredentials.password} onChange={handleLogin} placeholder="Password" className="mb-3" />
  </Form.Group>
  <div className='d-flex justify-content-between align-items-center'>
  <Form.Check label="Remember me"/>
    <Link to="">
    Set a new password
    </Link>
  </div>
  <div className='my-3'>
  <Button variant="primary" type="submit" className='w-100' >
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
