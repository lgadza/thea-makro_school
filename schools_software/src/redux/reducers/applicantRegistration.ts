

import { APPLICANT_REGISTRATION, APPLICANT_REGISTRATION_ERROR, APPLICANT_REGISTRATION_LOADING,APPLICANT_REGISTRATION_ERROR_RESPONSE } from "../actions";

interface ApplicantRegistrationActionPayload {
    data: any;
    errorResponse:any;
    isLoading: boolean;
    isError: boolean;
  }
interface ApplicantRegistrationActionBase{
    type:string;
    payload:ApplicantRegistrationActionPayload
}

export interface ApplicantRegistrationAction extends ApplicantRegistrationActionBase {
    type: typeof APPLICANT_REGISTRATION;
  }
export interface ApplicantRegistrationErrorResponseAction extends ApplicantRegistrationActionBase {
    type: typeof APPLICANT_REGISTRATION_ERROR_RESPONSE;
  }
  
  export interface ApplicantRegistrationLoadingAction extends ApplicantRegistrationActionBase {
    type: typeof APPLICANT_REGISTRATION_LOADING;
  }
  
  export interface ApplicantRegistrationErrorAction extends ApplicantRegistrationActionBase {
    type: typeof APPLICANT_REGISTRATION_ERROR;
  }
  type AllActions = ApplicantRegistrationAction | ApplicantRegistrationLoadingAction | ApplicantRegistrationErrorAction | ApplicantRegistrationErrorResponseAction

const initialState: ApplicantRegistrationActionPayload = {
  data: undefined,
  errorResponse:null,
  isLoading: true,
  isError: false,
};

const applicantRegistration = (state: ApplicantRegistrationActionPayload = initialState, action: AllActions): ApplicantRegistrationActionPayload=> {
  switch (action.type) {
    case APPLICANT_REGISTRATION:
      return {
        ...state,
        data: action.payload,
      };
    case APPLICANT_REGISTRATION_ERROR_RESPONSE:
      return {
        ...state,
        errorResponse: action.payload,
      };
    case APPLICANT_REGISTRATION_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case APPLICANT_REGISTRATION_ERROR:
      return {
        ...state,
        isError: action.payload.isError,
      };
    default:
      return state;
  }
};

export default applicantRegistration;
