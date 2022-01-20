import React from "react";
import { Route, Switch } from "wouter";
import Home from "page/Home";
import Favorites from "page/Favorites";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/:rest*" component={() => <h1>404 not found</h1>} />
    </Switch>
  );
}
