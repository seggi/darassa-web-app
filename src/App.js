import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import routes, { authRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.name}
              index={route.index || true}
              path={route.path}
              element={(props) => {
                if (route.isProtected) {
                  props.history.push({
                    pathname: "/login",
                  });
                }
                return (
                  <route.element
                    location={props.location}
                    history={props.history}
                    match={props.match}
                  />
                );
              }}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
