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
    isProtected: true,
    key: "Error page",
  },
  {
    path: "/signup",
    element: <RegisterContainer />,
    isProtected: true,
    key: "signup",
  },
];

export default routes;
