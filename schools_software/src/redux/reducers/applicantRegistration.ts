

import { APPLICANT_REGISTRATION, APPLICANT_REGISTRATION_ERROR, APPLICANT_REGISTRATION_LOADING } from "../actions";

interface ApplicantRegistrationActionPayload {
    data: any;
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
  
  export interface ApplicantRegistrationLoadingAction extends ApplicantRegistrationActionBase {
    type: typeof APPLICANT_REGISTRATION_LOADING;
  }
  
  export interface ApplicantRegistrationErrorAction extends ApplicantRegistrationActionBase {
    type: typeof APPLICANT_REGISTRATION_ERROR;
  }
  type AllActions = ApplicantRegistrationAction | ApplicantRegistrationLoadingAction | ApplicantRegistrationErrorAction

const initialState: ApplicantRegistrationActionPayload = {
  data: undefined,
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
