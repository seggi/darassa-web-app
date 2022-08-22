/* eslint-disable default-case */
import {
  CHANGE_AGE,
  CHANGE_USERNAME,
} from "../../constants/action-types/auth/userType";

const initialState = { name: "User 1", age: "0" };

const addUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USERNAME: {
      return { ...state, name: action.payload };
    }

    case CHANGE_AGE: {
      return { ...state, age: action.payload };
    }
  }

  return state;
};

export default addUserReducer;
