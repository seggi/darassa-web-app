import { CHANGE_AGE } from "../../constants/action-types/auth/userType";

export const changeUsersAge = (age) => {
  return {
    type: CHANGE_AGE,
    payload: age,
  };
};
