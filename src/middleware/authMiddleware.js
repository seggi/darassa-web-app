import { React } from "react";
import PropTypes from "prop-types";
import { Route, Navigate } from "react-router-dom";

const AuthMiddleware = ({
  element: Element,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => (
  <Route
    render={(props) => {
      if (isAuthProtected && !localStorage.getItem("authUser")) {
        return (
          <Navigate
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }
      return (
        // <Layout>
        <Element {...props} />
        // </Layout>
      );
    }}
  />
);

AuthMiddleware.prototypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
};

export default AuthMiddleware;
