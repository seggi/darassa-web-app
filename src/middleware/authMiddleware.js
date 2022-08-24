import { React } from "react";
import PropTypes from "prop-types";
import { Outlet, Navigate } from "react-router-dom";

const AuthMiddleware = ({ isAuthProtected }) => {
  return isAuthProtected === true ? <Outlet /> : <Navigate to={"/login"} />;
};

AuthMiddleware.prototypes = {
  isAuthProtected: PropTypes.bool,
};

export default AuthMiddleware;
