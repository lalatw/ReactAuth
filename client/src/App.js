import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthButton from "./components/AuthButton";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Friends from "./pages/Friends";
import Landing from "./pages/Landing";

class App extends Component {


  // handleAuth = event => {
  //   event.preventDefault();
  //   console.log("onclick");
  //   var queryURL = "https://github.com/login/oauth/authorize?client_id=3c9aad92df4d73f9b61b";
  //   // Window.location=queryURL;
  //   //this.props.history.push("https://www.google.com");
  // };
  
  
  render() {
    return (
      <Router>
        {/* <div>
          <h1>Lets Dev</h1>
          <a href="https://github.com/login/oauth/authorize?client_id=3c9aad92df4d73f9b61b">Link</a>
          <button href="https://github.com/login/oauth/authorize?client_id=3c9aad92df4d73f9b61b">Button</button>
          {/* <AuthButton
          onClick={this.handleAuth}
          className="subbtn"
          href="https://www.google.com"
        >
          Login
        </AuthButton> */}
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/friends" component={Friends} />
            <Route
              exact
              path="/profile/:username"
              component={Profile}
            />
            <Route component={Landing} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
