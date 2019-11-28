import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from '../components/login/login';
import Home from '../components/home/home';
import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/side-bar';
export default () => {
  return (<Router>
    <Navbar />
    <Sidebar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </Router>);
}
