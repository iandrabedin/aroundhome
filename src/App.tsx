import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import createMockServer from "./services/mock";
import Home from "./pages/home";
import NotFound from "./pages/notFound";

if (process.env.NODE_ENV === "development") {
  createMockServer();
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
