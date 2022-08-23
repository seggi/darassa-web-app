import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";

const allReducers = combineReducers({
  userReducer: userReducer,
});

export default allReducers;
