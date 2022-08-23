import PropTypes from "prop-types";
import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const NonAuthLayout = (props) => {
  const navigate = useNavigate();

  return <React.Fragment>{props.children}</React.Fragment>;
};

NonAuthLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
};

export default NonAuthLayout;
