

import { GET_APPLICANT_DATA, GET_APPLICANT_DATA_ERROR, GET_APPLICANT_DATA_LOADING } from "../actions";

export interface GetApplicantDataActionPayload {
    data: any;
    isLoading: boolean;
    isError: boolean;
  }
interface GetApplicantDataActionBase{
    type:string;
    payload:GetApplicantDataActionPayload
}

export interface GetApplicantDataAction extends GetApplicantDataActionBase {
    type: typeof GET_APPLICANT_DATA;
  }
  
  export interface GetApplicantDataLoadingAction extends GetApplicantDataActionBase {
    type: typeof GET_APPLICANT_DATA_LOADING;
  }
  
  export interface GetApplicantDataErrorAction extends GetApplicantDataActionBase {
    type: typeof GET_APPLICANT_DATA_ERROR;
  }
  type AllActions = GetApplicantDataAction | GetApplicantDataLoadingAction | GetApplicantDataErrorAction

const initialState: GetApplicantDataActionPayload = {
  data: null,
  isLoading: true,
  isError: false,
};

const getApplicantData = (state: GetApplicantDataActionPayload = initialState, action: AllActions): GetApplicantDataActionPayload=> {
  switch (action.type) {
    case GET_APPLICANT_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case GET_APPLICANT_DATA_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case GET_APPLICANT_DATA_ERROR:
      return {
        ...state,
        isError: action.payload.isError,
      };
    default:
      return state;
  }
};

export default getApplicantData;
