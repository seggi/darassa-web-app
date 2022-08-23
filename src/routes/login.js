/* eslint-disable import/no-anonymous-default-export */
import { lazy } from "react";

export default {
  index: true,
  name: "Login",
  protected: false,
  path: "/login",
  element: lazy(() => import("../containers/auth/LoginContainer")),
};
