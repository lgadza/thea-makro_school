import { Dispatch } from "redux";
import { ApplicantRegistration } from "../../Types";
import { loginCredentialsInterface } from "../../components/Login";
export const APPLICANT_REGISTRATION_ERROR_RESPONSE="APPLICANT_REGISTRATION_ERROR_RESPONSE"
export const APPLICANT_REGISTRATION="APPLICANT_REGISTRATION"
export const APPLICANT_REGISTRATION_ERROR="APPLICANT_REGISTRATION_ERROR"
export const APPLICANT_REGISTRATION_LOADING="APPLICANT_REGISTRATION_LOADING"
export const GET_APPLICANT_DATA="GET_APPLICANT_DATA"
export const GET_APPLICANT_DATA_ERROR="GET_APPLICANT_DATA_ERROR"
export const GET_APPLICANT_DATA_LOADING="GET_APPLICANT_DATA_LOADING"
export const LOGIN_APPLICANT="LOGIN_APPLICANT"
export const LOGIN_APPLICANT_ERROR="LOGIN_APPLICANT_ERROR"
export const LOGIN_APPLICANT_LOADING="LOGIN_APPLICANT_LOADING"
export const ACTIVE_NAV="ACTIVE_NAV"

export const ActiveNav=(component:string)=>{
    return{
        type:ACTIVE_NAV,
        payload:component
    }
}
export const ApplicantLogin=(cred:loginCredentialsInterface)=>{
    return async(dispatch:Dispatch)=>{
        const options={
            method:"POST",
            headers:{
                Accept:"application.json",
                "Content-Type":"application/json",
            },
            body:JSON.stringify(cred)
        }
        try{
            const response=await fetch("http://localhost:3001/applicants/login",options)
            if(response.ok){
                const accessToken=response.json()
                dispatch({
                    type:LOGIN_APPLICANT,
                    payload:accessToken
                })
                setTimeout(()=>{
                    dispatch({
                     type:LOGIN_APPLICANT_LOADING,
                     payload:false,
                    });
                 },100);
            }else{
                console.log("error")
                dispatch({
                    type:LOGIN_APPLICANT_LOADING,
                    payload:false,
                });
                dispatch({
                    type:LOGIN_APPLICANT_ERROR,
                    payload:true,
                })
                
            }
        }catch(error){
            console.log(error)
            dispatch({
                type:LOGIN_APPLICANT_LOADING,
                payload:false,
            });
            dispatch({
                type:LOGIN_APPLICANT_ERROR,
                payload:true,
            })
        }
    }
}
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
            const response=await fetch("http://localhost:3001/applicants/register",options)
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
                const errorStatus=await response.json()
                console.log(errorStatus)
                dispatch({
                    type:APPLICANT_REGISTRATION_ERROR_RESPONSE,
                    payload:errorStatus,
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

  export const  getApplicantData=(accessToken:string)=>{
    

    
    return async(dispatch:Dispatch)=>{
        const options:RequestInit={
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
                Authorization:"Bearer" + `${accessToken}`
            },
        };

            try{
                const response=await fetch("http://localhost:3001/applicants/me",options)
                
                if(response.ok){
                    const data=response.json()
                    dispatch({
                        type:GET_APPLICANT_DATA,
                        payload:data,
                    })
                    setTimeout(()=>{
                        dispatch({
                            type:GET_APPLICANT_DATA_LOADING,
                            payload:false
                        })
                    },100);

                }else{
                    console.log("ERROR")
                    dispatch({
                        type:GET_APPLICANT_DATA_LOADING,
                        payload:false,
                    })
                    dispatch({
                        type:GET_APPLICANT_DATA_ERROR,
                        payload:true
                    })
                }
            }
            catch(error){
                console.log(error,"Error")
                dispatch({
                    type:GET_APPLICANT_DATA_LOADING,
                    payload:false,
                })
                dispatch({
                    type:GET_APPLICANT_DATA_ERROR,
                    payload:true,
                })
            }
    }
}
  