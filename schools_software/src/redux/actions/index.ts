import { Dispatch } from "redux";
import { AddressInterface, ApplicantRegistration, UserChatting } from "../../Types";
import { LoginCredentialsInterface } from "../../components/Login";
export const APPLICANT_REGISTRATION_ERROR_RESPONSE="APPLICANT_REGISTRATION_ERROR_RESPONSE"
export const APPLICANT_REGISTRATION="APPLICANT_REGISTRATION"
export const APPLICANT_REGISTRATION_ERROR="APPLICANT_REGISTRATION_ERROR"
export const APPLICANT_REGISTRATION_LOADING="APPLICANT_REGISTRATION_LOADING"

export const GET_APPLICANT_DATA="GET_APPLICANT_DATA"
export const GET_APPLICANT_DATA_ERROR="GET_APPLICANT_DATA_ERROR"
export const GET_APPLICANT_DATA_LOADING="GET_APPLICANT_DATA_LOADING"


export const CHAT_WITH_AI="CHAT_WITH_AI"
export const CHAT_WITH_AI_ERROR="CHAT_WITH_AI_ERROR"
export const CHAT_WITH_AI_LOADING="CHAT_WITH_AI_LOADING"

export const EDIT_USER_ADDRESS="EDIT_USER_ADDRESS"
export const EDIT_USER_ADDRESS_ERROR="EDIT_USER_ADDRESS_ERROR"
export const EDIT_USER_ADDRESS_LOADING="EDIT_USER_ADDRESS_LOADING"

export const GET_GUARDIAN_TYPES="GET_GUARDIAN_TYPES"
export const GET_GUARDIAN_TYPES_ERROR="GET_GUARDIAN_TYPES_ERROR"
export const GET_GUARDIAN_TYPES_LOADING="GET_GUARDIAN_TYPES_LOADING"

export const POST_USER_ADDRESS="POST_USER_ADDRESS"
export const POST_USER_ADDRESS_ERROR="POST_USER_ADDRESS_ERROR"
export const POST_USER_ADDRESS_LOADING="POST_USER_ADDRESS_LOADING"

export const GET_USER_ADDRESS="GET_USER_ADDRESS"
export const GET_USER_ADDRESS_ERROR="GET_USER_ADDRESS_ERROR"
export const GET_USER_ADDRESS_LOADING="GET_USER_ADDRESS_LOADING"

export const EDIT_APPLICANT_DATA="EDIT_APPLICANT_DATA"
export const EDIT_APPLICANT_DATA_ERROR="EDIT_APPLICANT_DATA_ERROR"
export const EDIT_APPLICANT_DATA_LOADING="EDIT_APPLICANT_DATA_LOADING"
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
export const ApplicantLogin=(cred:LoginCredentialsInterface)=>{
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
                const accessToken=await response.json()
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
// export const chatWithAi = (messages:UserChatting[]) => {
    
//     return async (dispatch:Dispatch)=>{
//         const options:RequestInit={
//             method:"POST",
//             headers:{
//                 Accept:"application.json",
//                 "Content-Type":"application/json",
//             },
//             body:JSON.stringify({message:messages.map((message)=>message.message).join("\n")})
//         }
         
//         try{
//             const response=await fetch("http://localhost:3001/ai",options)
//             if(response.ok){
//                 const answer=await response.json();
//                 console.log(answer,"ANSWER")
//                 dispatch({
//                     type:CHAT_WITH_AI,
//                     payload:answer.message
//                 });
//                 setTimeout(()=>{
//                    dispatch({
//                     type:CHAT_WITH_AI_LOADING,
//                     payload:false,
//                    });
//                 },100);
//                 return answer

//             }else{
//                 console.log("error")
//                 dispatch({
//                     type:CHAT_WITH_AI_LOADING,
//                     payload:false,
//                 });
//                 dispatch({
//                     type:CHAT_WITH_AI_ERROR,
//                     payload:true,
//                 })
//             }
//         }catch(error){
//             console.log(error)
//             dispatch({
//                 type:CHAT_WITH_AI_LOADING,
//                 payload:false,
//             });
//             dispatch({
//                 type:CHAT_WITH_AI_ERROR,
//                 payload:true,
//             })
//         }
//     }
//   };
export const chatWithAi = async (messages: UserChatting[],model:string,question:string,applicant_id?:string,) => {
    const options:RequestInit={
                    method:"POST",
                    headers:{
                        Accept:"application.json",
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify({message:messages.map((message)=>message.message).join("\n"),model,applicant_id,question})
                }
    try {
      const response=await fetch("http://localhost:3001/ai/chats/dccddaba-ed8f-4e24-ba2f-4cf21ecab6bb/messages",options)
      if (response.ok) {
        const answer = await response.json();
        return answer; 
      } else {
        console.log("ERROR")
      }
    } catch (error) {
      console.log(error)
    }
  };
export const getEngines = async () => {
    const options:RequestInit={
                    method:"GET",
                    headers:{
                        Accept:"application.json",
                        "Content-Type":"application/json",
                    },
                   
                }
    try {
      const response=await fetch("http://localhost:3001/ai/models",options)
      if (response.ok) {
        const models = await response.json();
        return models; 
      } else {
        console.log("ERROR")
      }
    } catch (error) {
      console.log(error)
    }
  };
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
export const editApplicantData = (accessToken:string,formData:ApplicantRegistration,user_id:string) => {
    
    return async (dispatch:Dispatch)=>{
        const options:RequestInit={
            method:"PUT",
            headers:{
                Accept:"application.json",
                "Content-Type":"application/json",
                Authorization:"Bearer " + `${accessToken}`
            },
            body:JSON.stringify(formData)
            
        }
        try{
            const response=await fetch(`http://localhost:3001/applicants/${user_id}`,options)
            if(response.ok){
                const personalData=await response.json();
                dispatch({
                    type:EDIT_APPLICANT_DATA,
                    payload:personalData
                });
                setTimeout(()=>{
                   dispatch({
                    type:EDIT_APPLICANT_DATA_LOADING,
                    payload:false,
                   });
                },100);
            }else{
                console.log("error")
                dispatch({
                    type:EDIT_APPLICANT_DATA_LOADING,
                    payload:false,
                });
                dispatch({
                    type:EDIT_APPLICANT_DATA_ERROR,
                    payload:true,
                })
            }
        }catch(error){
            console.log(error)
            dispatch({
                type:EDIT_APPLICANT_DATA_LOADING,
                payload:false,
            });
            dispatch({
                type:EDIT_APPLICANT_DATA_ERROR,
                payload:true,
            })
        }
    }
  };
export const postUserAddress = (accessToken:string,address:AddressInterface,user_id:string) => {
    
    return async (dispatch:Dispatch)=>{
        const options:RequestInit={
            method:"POST",
            headers:{
                Accept:"application.json",
                "Content-Type":"application/json",
                Authorization:"Bearer " + `${accessToken}`
            },
            body:JSON.stringify(address)
            
        }
        try{
            const response=await fetch(`http://localhost:3001/address/${user_id}`,options)
            if(response.ok){
                const address=await response.json();
                dispatch({
                    type:POST_USER_ADDRESS,
                    payload:address
                });
                setTimeout(()=>{
                   dispatch({
                    type:POST_USER_ADDRESS_LOADING,
                    payload:false,
                   });
                },100);
            }else{
                console.log("error")
                dispatch({
                    type:POST_USER_ADDRESS_LOADING,
                    payload:false,
                });
                dispatch({
                    type:POST_USER_ADDRESS_ERROR,
                    payload:true,
                })
            }
        }catch(error){
            console.log(error)
            dispatch({
                type:POST_USER_ADDRESS_LOADING,
                payload:false,
            });
            dispatch({
                type:POST_USER_ADDRESS_ERROR,
                payload:true,
            })
        }
    }
  };
export const editUserAddress = (accessToken:string,address:AddressInterface,address_id:string) => {
    
    return async (dispatch:Dispatch)=>{
        const options:RequestInit={
            method:"PUT",
            headers:{
                Accept:"application.json",
                "Content-Type":"application/json",
                Authorization:"Bearer " + `${accessToken}`
            },
            body:JSON.stringify(address)
            
        }
        try{
            const response=await fetch(`http://localhost:3001/address/${address_id}`,options)
            if(response.ok){
                const address=await response.json();
                dispatch({
                    type:EDIT_USER_ADDRESS,
                    payload:address
                });
                setTimeout(()=>{
                   dispatch({
                    type:EDIT_USER_ADDRESS_LOADING,
                    payload:false,
                   });
                },100);
            }else{
                console.log("error")
                dispatch({
                    type:EDIT_USER_ADDRESS_LOADING,
                    payload:false,
                });
                dispatch({
                    type:EDIT_USER_ADDRESS_ERROR,
                    payload:true,
                })
            }
        }catch(error){
            console.log(error)
            console.log(error)
            dispatch({
                type:EDIT_USER_ADDRESS_LOADING,
                payload:false,
            });
            dispatch({
                type:EDIT_USER_ADDRESS_ERROR,
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
                Authorization:"Bearer " + `${accessToken}`
            },
        };

            try{
                const response=await fetch("http://localhost:3001/applicants/me",options)
                
                if(response.ok){
                    const data= await response.json()
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
  export const  getUserAddress=(accessToken:string,user_id:string)=>{
    
    return async(dispatch:Dispatch)=>{
        const options:RequestInit={
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
                Authorization:"Bearer " + `${accessToken}`
            },
        };

            try{
                const response=await fetch(`http://localhost:3001/address/${user_id}`,options)
                
                if(response.ok){
                    const address= await response.json()
                    dispatch({
                        type:GET_USER_ADDRESS,
                        payload:address,
                    })
                    setTimeout(()=>{
                        dispatch({
                            type:GET_USER_ADDRESS_LOADING,
                            payload:false
                        })
                    },100);

                }else{
                    console.log("ERROR")
                    dispatch({
                        type:GET_USER_ADDRESS_LOADING,
                        payload:false,
                    })
                    dispatch({
                        type:GET_USER_ADDRESS_ERROR,
                        payload:true
                    })
                }
            }
            catch(error){
                console.log(error,"Error")
                dispatch({
                    type:GET_USER_ADDRESS_LOADING,
                    payload:false,
                })
                dispatch({
                    type:GET_USER_ADDRESS_ERROR,
                    payload:true,
                })
            }
    }
}
  export const  getGuardianType=()=>{
    
    return async(dispatch:Dispatch)=>{
        const options:RequestInit={
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
                // Authorization:"Bearer " + `${accessToken}`
            },
        };

            try{
                const response=await fetch(`http://localhost:3001/guardians/types/all`,options)
                
                if(response.ok){
                    const guardian_type= await response.json()
                    dispatch({
                        type:GET_GUARDIAN_TYPES,
                        payload:guardian_type,
                    })
                    setTimeout(()=>{
                        dispatch({
                            type:GET_GUARDIAN_TYPES_LOADING,
                            payload:false
                        })
                    },100);

                }else{
                    console.log("ERROR")
                    dispatch({
                        type:GET_GUARDIAN_TYPES_LOADING,
                        payload:false,
                    })
                    dispatch({
                        type:GET_GUARDIAN_TYPES_ERROR,
                        payload:true
                    })
                }
            }
            catch(error){
                console.log(error,"Error")
                dispatch({
                    type:GET_GUARDIAN_TYPES_LOADING,
                    payload:false,
                })
                dispatch({
                    type:GET_GUARDIAN_TYPES_ERROR,
                    payload:true,
                })
            }
    }
}
  