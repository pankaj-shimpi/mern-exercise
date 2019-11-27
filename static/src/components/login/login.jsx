import React, { useState } from 'react';
import profile from '../../assets/users.svg';
import facebook from '../../assets/facebook.svg';
import gmail from '../../assets/gmail.svg';
import './login.css';

import { get } from '../../services/api-service';

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const onChangeUsername = (e) => {
    setUserName(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onChangeRemember = (e) => {
    setRememberMe(!rememberMe);
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    get('http://localhost:4001/api')
      .then(res => {
        alert(res);
      })
      .catch(err => {
        alert(err);
      });
  }

  const loginWithGoogle = () => {
    get('http://localhost:4001/api/auth/google')
      .then(result => {
        console.log(result);
      })
      .catch(e => {
        console.log(e);
      });
  }

  return (<div>
    <h2>Login Form</h2>

    <form onSubmit={onSubmitForm}>
      <div className="imgcontainer">
        <img src={profile} alt="Avatar" className="avatar" />
      </div>

      <div className="container">
        <label htmlFor="uname"><b>Username</b></label>
        <input
          required
          value={username}
          type="text"
          onChange={onChangeUsername}
          placeholder="Enter Username"
          name="uname"
        />

        <label htmlFor="psw"><b>Password</b></label>
        <input
          required
          value={password}
          onChange={onChangePassword}
          type="password"
          placeholder="Enter Password"
          name="psw"
        />

        <div className="social-imgcontainer">
          <button type="submit">Login</button>
          <img src={facebook} alt="social" className="social-image" />
          <img src={gmail} onClick={loginWithGoogle} alt="social" className="social-image" />
        </div>
        <label>
          <input type="checkbox" onChange={onChangeRemember} checked={rememberMe} name="remember" /> Remember me
        </label>
      </div>

      <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
        <button type="button" className="cancelbtn">Cancel</button>
        <span className="psw">Forgot <a href="#">password?</a></span>
      </div>
    </form>
  </div>);
}


export default Login;