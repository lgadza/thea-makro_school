import { CHAT_WITH_AI, CHAT_WITH_AI_ERROR, CHAT_WITH_AI_LOADING } from "../actions";


  export interface ChatWithAiAction {
    type: typeof CHAT_WITH_AI;
    payload: string; 
  }
  
  export interface ChatWithAiLoadingAction {
    type: typeof CHAT_WITH_AI_LOADING;
    payload: {
      isLoading: boolean;
    };
  }
  
  export interface ChatWithAiErrorAction {
    type: typeof CHAT_WITH_AI_ERROR;
    payload: {
      isError: boolean;
    };
  }
  
  export const chatWithAi = (message: string): ChatWithAiAction => ({
    type: CHAT_WITH_AI,
    payload: message,
  });
  
  export const setChatWithAiLoading = (isLoading: boolean): ChatWithAiLoadingAction => ({
    type: CHAT_WITH_AI_LOADING,
    payload: {
      isLoading,
    },
  });
  
  export const setChatWithAiError = (isError: boolean): ChatWithAiErrorAction => ({
    type: CHAT_WITH_AI_ERROR,
    payload: {
      isError,
    },
  });
  
  export type ChatWithAiActionTypes =
    | ChatWithAiAction
    | ChatWithAiLoadingAction
    | ChatWithAiErrorAction;
    
  export interface Message {
    from: string;
    message: string;
  }
  
  export interface ChatWithAiActionPayload {
    messages: Message[];
    isLoading: boolean;
    isError: boolean;
  }
  
  const initialState: ChatWithAiActionPayload = {
    messages: [],
    isLoading: true,
    isError: false,
  };
  
  const chatWithAiReducer = (
    state: ChatWithAiActionPayload = initialState,
    action: ChatWithAiActionTypes
  ): ChatWithAiActionPayload => {
    switch (action.type) {
      case CHAT_WITH_AI:
        return {
          ...state,
          messages: [
            ...state.messages,
            { from: "ai", message: `${action.payload }`},
          ],
        };
      case CHAT_WITH_AI_LOADING:
        return {
          ...state,
          isLoading: action.payload.isLoading,
        };
      case CHAT_WITH_AI_ERROR:
        return {
          ...state,
          isError: action.payload.isError,
        };
      default:
        return state;
    }
  };
  
  export default chatWithAiReducer;
  