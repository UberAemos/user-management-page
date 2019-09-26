import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComponent from "./HeaderComponent.jsx";
import FooterComponent from "./FooterComponent";
import UserManagementPage from "./UserManagementPage";
import UserService from "../api/UserService";

export default class Main extends Component {
  render() {
    //UserService.setupAxiosInterceptors()
    return (
      <div className="d-flex w-100 h-100 mx-auto flex-column justify-content-center">
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