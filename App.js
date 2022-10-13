import React, { Component } from 'react';
import firebaseConfig  from './firebaseConfig';
import * as firebaseui from "firebaseui";
import firebase from "firebase";
import 'firebaseui/dist/firebaseui.css'

class App extends Component {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    const uiConfig = {
     signInOptions: [{
       provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
       recaptchaParameters: {
        type: 'image',
        size: 'normal',
        badge: 'bottomleft'
       },
       defaultCountry: 'VN'
       }],        
       callbacks: {
        signInSuccessWithAuthResult: funtion (authResult, redirectUrl){
            alert('sucessful');
            return true;
        }
       },
       signInSuccessUrl: "youtube.com"
    };

    var ui = new firebase.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  };

  render() {
    return (
      <>
      <h1>REACT PHONE AUTHENTICATION</h1>
      <div id="firebaseui-auth-container"></div>
      </>
    )
  }
}

export default App;