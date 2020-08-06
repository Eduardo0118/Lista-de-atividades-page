import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Activity from "./pages/Activity";
import ActivityView from "./pages/Activity/ActivityView"

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/atividades" exact component={Activity} />
      <Route path="/atividades/:id" exact component={ActivityView} />
    </Switch>
  );
};

export default Routes;
