import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthButton from "./components/AuthButton";

class App extends Component {
  state = {
    userID: "",
    accessToken: ""
  };

  handleAuth = event => {
    event.preventDefault();
    console.log("onclick");
    var queryURL = "https://github.com/login/oauth/authorize?client_id=3c9aad92df4d73f9b61b";
    // Window.location=queryURL;
    //this.props.history.push("https://www.google.com");
  };
  
  
  render() {
    return (
      <div>
        <h1>Lets Dev</h1>
        <a href="https://github.com/login/oauth/authorize?client_id=3c9aad92df4d73f9b61b">Link</a>
        {/* <AuthButton
          onClick={this.handleAuth}
          className="subbtn"
          href="https://www.google.com"
        >
          Login
        </AuthButton> */}
      </div>
    );
  }
}

export default App;
