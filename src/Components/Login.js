import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import logoo from "../images/logoo.jpg";
import "./Login.css";
import meta from "../images/meta.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import picture from "../images/picture.jpg";
import Checkbox from "@mui/material/Checkbox";


class LoginPage extends Component {
  render() {
    return (
      <Grid container className="login-page">
  <Grid size={6.9} className="left-side">
    <img src={logoo} alt="Logo" />

    <h1 className="heading">
  <span className="heading-top">
    See everyday moments from your
  </span>

  <span className="heading-bottom">
    <span className="gradient-text">close friends</span><span className="white-dot">.</span>
  </span>
</h1>

          <img className="img1" src={picture} alt="picture" />

        </Grid>

        <Grid size={5.1} className="right-side">
          <div className="login-box">

          <h2>Log into Instagram</h2>
          <input type="text" placeholder="Mobile number, username or email"/>

          <input type="password" placeholder="Password"/>

          <button className="login-button">Log in</button>
            <a href="#">Forgot password?</a>
         <button className="facebook-button">
         <FacebookIcon />
         Log in with Facebook
         </button>

            <button className="create-button">
              Create new account
            </button>
<div className="meta-brand">
  <img src={meta} alt="Meta" />
  <span>Meta</span>
</div>

          </div>
        </Grid>
        <Grid container className="footer">
          <Grid size={12} className="footer-links">
              <a href="#">Meta</a>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Jobs</a>
              <a href="#">Help</a>
              <a href="#">API</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Locations</a>
              <a href="#">Popular</a>
              <a href="#">Instagram Lite</a>
              <a href="#">Meta AI</a>
              <a href="#">Muse</a>
              <a href="#">Threads</a>
              <a href="#">Contact Uploading & Non-Users</a>
              <a href="#">Meta Verified</a>

          </Grid>
          <Grid size={12} className="footer-bottom">
    <span className="language-dropdown">
  <select defaultValue="English" aria-label="Select language">
    <option value="Afrikaans">Afrikaans</option>
    <option value="العربية">العربية</option>
    <option value="Čeština">Čeština</option>
    <option value="Dansk">Dansk</option>
    <option value="Deutsch">Deutsch</option>
    <option value="Ελληνικά">Ελληνικά</option>
    <option value="English">English</option>
    <option value="English (UK)">English (UK)</option>
    <option value="Español (España)">Español (España)</option>
    <option value="Español">Español</option>
    <option value="فارسی">فارسی</option>
    <option value="Suomi">Suomi</option>
    <option value="Français">Français</option>
    <option value="עברית">עברית</option>
    <option value="Bahasa Indonesia">Bahasa Indonesia</option>
    <option value="Italiano">Italiano</option>
    <option value="日本語">日本語</option>
    <option value="한국어">한국어</option>
    <option value="Bahasa Melayu">Bahasa Melayu</option>
    <option value="Filipino">Filipino</option>
    <option value="Magyar">Magyar</option>
    <option value="polski">polski</option>
  </select>
</span>
            <span className="s">© 2026 Instagram from Meta</span>
          </Grid>

        </Grid>

      </Grid>
    );
  }
}

export default LoginPage;