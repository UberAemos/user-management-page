import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComponent from "./bars/HeaderComponent.jsx";
import FooterComponent from "./bars/FooterComponent";
import UserManagementPage from "./UserManagementPage";
import UserService from "../api/UserService";
import Example from "./Example.jsx";

export default class Main extends Component {
  render() {
    //UserService.setupAxiosInterceptors()
    return (
      <div>
        <Router>
          <>
          <HeaderComponent />
            <Switch>
              <Route path="/" component={UserManagementPage} />
            </Switch>
            <FooterComponent />
          </>
        </Router>
      </div>
    );
  }
}