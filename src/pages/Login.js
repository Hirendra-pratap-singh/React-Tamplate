import React from 'react'
import { Link } from 'react-router-dom'

export default function Login(props) {

  let handleSubmit=()=>{

    window.location.href='/dashboard';
  }
  return (
    <>


  <div id="loading-overlay" />
  <div id="loading">
    <span>Loading...</span>
  </div>

  <section id="toolbar">
    <div className="container_12">
      {/* Left side */}
      <div className="left">
        <ul className="breadcrumb">
          <li><a href="#">Mango</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>
      {/* End of .left */}
      {/* Right side */}
      <div className="right">
        <ul>
          <li><a href="dashboard.html"><span className="icon i14_bended-arrow-left" />Back to Dashboard</a></li>
          <li className="red"><a target="_blank" href="http://themeforest.net/item/mango-slick-responsive-admin-template/2728748?ref=Stammi">Purchase</a></li>
        </ul>
      </div>{/* End of .right */}
      {/* Phone only items */}
      <div className="phone">
        {/* User Link */}
        <li><a href="#"><span className="icon icon-home" /></a></li>
        {/* Navigation */}
        <li><a href="#"><span className="icon icon-heart" /></a></li>
      </div>{/* End of .phone */}
    </div>{/* End of .container_12 */}
  </section>{/* End of #toolbar */}
  {/* The header containing the logo */}
  <header className="container_12">
    <div className="container">
      {/* Your logos */}
      <a href="https://envato.stammtec.de/tf-mango/"><img src="assets/img/logo-light.png" true="Mango" width={210} height={67} /></a>
      <a className="phone-title" href="login.html"><img src="assets/img/logo-mobile.png" true="Mango" height={22} width={70} /></a>
      {/* Right link */}
      <div className="right">
        <span>Got no account?</span>
        <a href="#">Register</a>
      </div>
    </div>
  </header>

  <section id="login" className="container_12 clearfix">
    <form action="https://envato.stammtec.de/themeforest/mango/dashboard.html" method="post" className="box validate">
      <div className="header">
        <h2><span className="icon icon-lock" />Login</h2>
      </div>
      <div className="content">
       
        <div className="login-messages">
          <div className="message welcome">Welcome back!</div>
          <div className="message failure">Invalid credentials.</div>
        </div>
       
        <div className="form-box">
          <div className="row">
            <label htmlFor="login_name">
              <strong>Username</strong>
              <small>Or email address</small>
            </label>
            <div>
              <input tabIndex={1} type="text" className="required noerror" name="login_name" id="login_name" />
            </div>
          </div>
          <div className="row">
            <label htmlFor="login_pw">
              <strong>Password</strong>
              <small><a href="#" id>Forgot it?</a></small>
            </label>
            <div>
              <input tabIndex={2} type="password" className="required noerror" name="login_pw" id="login_pw" />
            </div>
          </div>
        </div>
      </div>
      <div className="actions">
        <div className="left">
          <div className="rememberme">
            <input tabIndex={4} type="checkbox" name="login_remember" id="login_remember" Checked onChange={()=>{}} /><label htmlFor="login_remember">Remember me?</label>
          </div>
        </div>
        <div className="right">
          {/* <Link to="/dashboard">Sign In</Link> */}
          <input tabIndex={3} type="submit" defaultValue="Sign In" name="login_btn"  onClick={()=>{handleSubmit()}}/>
        </div>
      </div>
    </form>
  </section>


    
    

    </>
  )
}
