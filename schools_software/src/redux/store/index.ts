
import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { encryptTransform } from "redux-persist-transform-encrypt";
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import applicantRegistration from "../reducers";
import localStorage from "redux-persist/es/storage";
import getApplicantData from "../reducers/getApplicantData";


const persistConfig = {
  key: "root",
  storage:localStorage,
  transforms: [
    encryptTransform({
      secretKey: "1234456",
    }),
  ],
};

const mainReducer = combineReducers({
  applicantRegistration: applicantRegistration,
  applicantData:getApplicantData
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

const middleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,
});

const persister = persistStore(store);

export { store, persister };
