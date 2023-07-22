

import { LOGIN_APPLICANT, LOGIN_APPLICANT_ERROR, LOGIN_APPLICANT_LOADING} from "../actions";

interface LoginApplicantActionPayload {
    accessToken: any;
    isLoading: boolean;
    isError: boolean;
  }
interface LoginApplicantActionBase{
    type:string;
    payload:LoginApplicantActionPayload
}

export interface LoginApplicantAction extends LoginApplicantActionBase {
    type: typeof LOGIN_APPLICANT;
  }

  
  export interface LoginApplicantLoadingAction extends LoginApplicantActionBase {
    type: typeof LOGIN_APPLICANT_LOADING;
  }
  
  export interface LoginApplicantErrorAction extends LoginApplicantActionBase {
    type: typeof LOGIN_APPLICANT_ERROR;
  }
  type AllActions = LoginApplicantAction | LoginApplicantLoadingAction | LoginApplicantErrorAction 

const initialState: LoginApplicantActionPayload = {
  accessToken: null,
  isLoading: true,
  isError: false,
};

const loginApplicant = (state: LoginApplicantActionPayload = initialState, action: AllActions): LoginApplicantActionPayload=> {
  switch (action.type) {
    case LOGIN_APPLICANT:
      return {
        ...state,
        accessToken: action.payload,
      };
    
    case LOGIN_APPLICANT_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case LOGIN_APPLICANT_ERROR:
      return {
        ...state,
        isError: action.payload.isError,
      };
    default:
      return state;
  }
};

export default loginApplicant;
