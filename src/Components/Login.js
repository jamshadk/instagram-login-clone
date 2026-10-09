import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import logoo from "../images/logoo.jpg";
import "./Login.css";
import meta from "../images/meta.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import picture from "../images/picture.jpg";



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

          <img className="img1" src={picture} alt="Instagram login preview" />

        </Grid>

        <Grid size={5.1} className="right-side">
          <div className="login-box">

          <h2>Log into Instagram</h2>
          <input type="text" placeholder="Mobile number, username or email"/>

          <input type="password" placeholder="Password"/>

          <button className="login-button">Log in</button>
           <a href="https://www.instagram.com/accounts/password/reset/">
            Forgot password?
          </a>
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
          
<a href="https://about.meta.com/">Meta</a>
<a href="https://about.instagram.com/">About</a>
<a href="https://about.instagram.com/blog/">Blog</a>
<a href="https://about.instagram.com/about-us/careers/">Jobs</a>
<a href="https://help.instagram.com/">Help</a>
<a href="https://developers.facebook.com/docs/instagram/">API</a>
<a href="https://privacycenter.instagram.com/">Privacy</a>
<a href="https://help.instagram.com/581066165581870/">Terms</a>
<a href="https://www.instagram.com/explore/locations/">Locations</a>
<a href="https://www.instagram.com/explore/">Popular</a>
<a href="https://www.instagram.com/web/lite/">Instagram Lite</a>
<a href="https://ai.meta.com/">Meta AI</a>
<a href="https://www.instagram.com/">Muse</a>
<a href="https://www.threads.com/">Threads</a>
<a href="https://help.instagram.com/">Contact Uploading &amp; Non-Users</a>
<a href="https://www.instagram.com/">Meta Verified</a>
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