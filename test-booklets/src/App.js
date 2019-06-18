import React from "react";
import { Route, Switch, Router } from "react-router";
import { history } from "./store";
import Animals from "./pages/Animals";
import Animal from "./pages/Animal";
import Layout from "./layouts";
import Error404 from "./pages/Error404";

const App = () => (
  <Router history={history}>
    <Layout>
      <Switch>
        <Route path="/" exact component={Animals} />
        <Route path="/animal/:id" exact component={Animal} />
        <Route component={Error404} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
