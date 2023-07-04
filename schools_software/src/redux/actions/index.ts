import { Dispatch } from "redux";
import { ApplicantRegistration } from "../../Types";

export const APPLICANT_REGISTRATION="APPLICANT_REGISTRATION"
export const APPLICANT_REGISTRATION_ERROR="APPLICANT_REGISTRATION_ERROR"
export const APPLICANT_REGISTRATION_LOADING="APPLICANT_REGISTRATION_LOADING"

export const ApplicantRegister = (formData:ApplicantRegistration) => {
    
    return async (dispatch:Dispatch)=>{
        const options:RequestInit={
            method:"POST",
            headers:{
                Accept:"application.json",
                "Content-Type":"application/json",
            },
            body:JSON.stringify(formData)
        }
        try{
            const response=await fetch("http://localhost:3001/applicants",options)
            if(response.ok){
                const status=await response.json();
                dispatch({
                    type:APPLICANT_REGISTRATION,
                    payload:status
                });
                setTimeout(()=>{
                   dispatch({
                    type:APPLICANT_REGISTRATION_LOADING,
                    payload:false,
                   });
                },100);
            }else{
                console.log("error")
                dispatch({
                    type:APPLICANT_REGISTRATION_LOADING,
                    payload:false,
                });
                dispatch({
                    type:APPLICANT_REGISTRATION_ERROR,
                    payload:true,
                })
            }
        }catch(error){
            console.log(error)
            dispatch({
                type:APPLICANT_REGISTRATION_LOADING,
                payload:false,
            });
            dispatch({
                type:APPLICANT_REGISTRATION_ERROR,
                payload:true,
            })
        }
    }
  };