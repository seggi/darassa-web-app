import LoginContainer from "../containers/auth/LoginContainer";
import DashboardContainer from "../containers/dashboard";

const routes = [
  {
    path: "/login",
    element: <LoginContainer />,
    isProtected: false,
    key: "login",
  },
  {
    path: "/",
    element: <DashboardContainer />,
    isProtected: true,
    key: "dashboard",
  },
  {
    path: "/404",
    element: <h1>404 Page Error</h1>,
    isProtected: true,
    key: "dashboard",
  },
];

export default routes;
