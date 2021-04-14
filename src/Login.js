import React, { useState } from "react";
import "./Login.css";
import LoginLogo from "./login_logo.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmai] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));

    //firebase
  };

  //   .createUserWithEmailAndPassword(email, password)
  //   .then((auth) => {
  //     console.log(auth);
  //   })
  //   .Catch((error) => alert(error.message));
  // //firebase\

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="./">
        <img className="login_logo" src={LoginLogo} />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmai(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>By clicking here you are about to sign privacy policy.</p>
        <button className="login__registerButton" onClick={register}>
          create New Account
        </button>
      </div>
    </div>
  );
}

export default Login;
