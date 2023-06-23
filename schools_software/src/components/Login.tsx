import React from 'react';
import { Navbar,Container, Nav,Button,Form,Card, FormControl } from 'react-bootstrap';
import fhs1 from '../assets/fhs_img/fhs1.jpg'
import fhs_logo from "../assets/fhs_img/fhs_logo.png"
import Image from './Image';
import { ImageProps } from '../Types';
import { Link } from 'react-router-dom';

function Login(): JSX.Element {
  return (
    <Container>
        <div className="imageContainer mb-3">
            <Image src={fhs_logo}  alt={"school_logo"} width={200} height={200} />
        </div>
        <Card style={{width:"25rem"}}>
        <Form>
  <Form.Group>
    <Form.Control type="email" placeholder="Enter email" className="mb-3" />
    
  </Form.Group>

  <Form.Group>
    <Form.Control type="password" placeholder="Password" className="mb-3" />
  </Form.Group>
  <div className='d-flex justify-content-between align-items-center'>
  <Button variant="primary" type="submit" >
    Log in
  </Button>
    <Link to="">
    Set a new password
    </Link>
  </div>

</Form>
        </Card>
    </Container>
  );
}

export default Login;
