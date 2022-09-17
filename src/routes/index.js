import LandingPage from "../components/landingPage";
import RegisterContainer from "../containers/auth/RegisterContainer";
import DashboardContainer from "../containers/dashboard";

const routes = [
  {
    path: "/login",
    element: <LandingPage />,
    isProtected: false,
    key: "login",
  },
  {
    path: "/dashboard",
    element: <DashboardContainer />,
    isProtected: true,
    key: "dashboard",
  },

  {
    path: "/404",
    element: <h1>404 Page Error</h1>,
    isProtected: false,
    key: "Error page",
  },
  {
    path: "/register",
    element: <RegisterContainer />,
    isProtected: false,
    key: "signup",
  },
];

export default routes;
