import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app();
 }

 const googleProvider = new firebase.auth.GoogleAuthProvider();
 var fbProvider = new firebase.auth.FacebookAuthProvider();
 var ghProvider = new firebase.auth.GithubAuthProvider();

 const [loggedInUser, setLoggedInUser] = useContext(UserContext);
 const history = useHistory();
 const location = useLocation();
 let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
      firebase.auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      var credential = result.credential;
      var token = credential.accessToken;
      var user = result.user;
      setLoggedInUser(user);
      history.replace(from);
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }

  const handleFacebookSignIn = () => {
      firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((result) => {
      var credential = result.credential;
      var user = result.user;
      var accessToken = credential.accessToken;
      setLoggedInUser(user);
      history.replace(from);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }

  return (
    <div className="text-center">
      <button class="btn btn-primary" onClick={handleGoogleSignIn}>Continue with Google</button>
      <br/> <br/>
      <button class="btn btn-success" onClick={handleFacebookSignIn}>Continue With Facebook</button>
    </div>
  );
};

export default Login;