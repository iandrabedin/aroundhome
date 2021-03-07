import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import createMockServer from "./services/mock";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Navbar from "./components/navbar";

// TODO: change to real server at production when available
// if (process.env.NODE_ENV === "development") {
//   createMockServer();
// }

createMockServer();

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
