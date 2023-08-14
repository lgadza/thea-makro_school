import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import m_logo from "../assets/md_logo_small.png"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicantLogin, getApplicantData } from '../redux/actions';
import { RootState } from '../redux/store';
import { Dispatch } from 'redux';
import { CompanyName } from '../assets/data/company';
export interface LoginCredentialsInterface {
  email: string,
  password: string
}

const Login = (): JSX.Element => {
  const dispatch: Dispatch<any> = useDispatch()
  const navigate = useNavigate()
  const accessToken = useSelector((state: RootState) => state.accessToken.accessToken)
  const isError = useSelector((state: RootState) => state.accessToken.isError)
  console.log(isError,"LOGIN ISERROR")
  const userData=useSelector((state:RootState)=>state.applicantData.data)

  const initialLoginCred: LoginCredentialsInterface = {
    email: "",
    password: ""
  }

  const [loginCredentials, setLoginCredentials] = useState<LoginCredentialsInterface>(initialLoginCred)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginCredentials((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const isFormValid = (): boolean => {
    return (
      loginCredentials.email.trim() !== "" &&
      loginCredentials.password.trim() !== ""
    )
  }

useEffect(() => {
  const handleLoginSuccess = async () => {
    if (accessToken && accessToken.accessToken) {
     const user= await dispatch(getApplicantData(accessToken.accessToken));
     if(userData){
       navigate(`/mss/account/${userData.id}`);
     }
    }
  };

  handleLoginSuccess(); 

}, [accessToken]);

  const handleLogin = () => {
    dispatch(ApplicantLogin(loginCredentials))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container>
      {isError && (
        <Alert variant='danger'>The email/password entered is incorrect</Alert>
      )}
      <Row className='d-flex justify-content-center align-item-center'>
        <Col className='login_container' md={3}>
          <div className="imageContainer mb-3">
            <img
              src={m_logo}
              alt={CompanyName}
              style={{ width: "150px", height: "150px" }}
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
              <Form.Check label="Remember me" />
              <Link to="">
                Set a new password
              </Link>
            </div>

            <div className='my-3'>
              <Button variant="primary" type="submit" disabled={!isFormValid()} className='w-100 bg-primary' onClick={handleLogin}>
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
