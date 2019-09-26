import React, { Component } from "react";
import "./App.css"
import Main from './component/Main'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App text-center">
        <Main />
      </div>
    )
  }
}

export default App;