import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/landingPage";
import AuthMiddleware from "./middleware/authMiddleware";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            return route.isProtected ? (
              <Route
                element={<AuthMiddleware isAuthProtected={route.isProtected} />}
              >
                <Route
                  path={route.path}
                  key={route.name}
                  index={route.index}
                  element={route.element}
                />
              </Route>
            ) : (
              <Route
                path={route.path}
                key={route.name}
                index={route.index || true}
                element={route.element}
              />
            );
          })}
          <Route path={"/"} element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
