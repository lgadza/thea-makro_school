import React, { useEffect, useState } from 'react';
import './SchoolAccountLogin.css'; 
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicantLogin, getApplicantData } from '../redux/actions';
import { RootState } from '../redux/store';
import { Dispatch } from 'redux';
import { LoginCredentialsInterface } from './Login';
import { Alert } from 'react-bootstrap';

const SchoolAccountLogin: React.FC = () => {

  const dispatch: Dispatch<any> = useDispatch()
  const navigate = useNavigate()
  const accessToken = useSelector((state: RootState) => state.accessToken.accessToken)
  const isError = useSelector((state: RootState) => state.accessToken.isError)
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
       navigate(`/mss/${userData.role}/account/${userData.id}`);
     }
    }
  };
  handleLoginSuccess(); 

}, [accessToken]);
  const handleLogin = async () => {
   await dispatch(ApplicantLogin(loginCredentials))
console.log(isError, "ERROR")
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="login-box main_bg d-flex flex-column justify-content-center">
          {isError && (
        <Alert variant='danger'>The email/password entered is incorrect</Alert>
      )}
      <h4>Login</h4>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            name="email"
            required
            value={loginCredentials.email} onChange={handleChange} 
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            required
            value={loginCredentials.password} onChange={handleChange}
          />
          <label>Password</label>
        </div>
        <div className='d-flex'>
        <button disabled={!isFormValid()} type="submit" onClick={handleLogin}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default SchoolAccountLogin;
