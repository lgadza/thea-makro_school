import React from 'react';
import { Navbar,Container, Nav,Button,Form,Card, FormControl, Row, Col } from 'react-bootstrap';
import fhs1 from '../assets/fhs_img/fhs1.jpg'
import fhs_logo from "../assets/fhs_img/fhs_logo.png"
import Image from './Image';
import { ImageProps } from '../Types';
import { Link } from 'react-router-dom';

function Login(): JSX.Element {
  return (
    <Container>
      <Row className='d-flex justify-content-center align-item-center'>
        <Col className='login_container' md={3}>
        <div className="imageContainer mb-3">
            <Image src={fhs_logo}  alt={"school_logo"} width={200} height={200} />
        </div>
        
        <Form>
  <Form.Group>
    <Form.Control type="email" placeholder="Enter email" className="mb-3" />
    
  </Form.Group>

  <Form.Group>
    <Form.Control type="password" placeholder="Password" className="mb-3" />
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
