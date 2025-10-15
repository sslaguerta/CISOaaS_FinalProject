import { useState } from "react";
import emailjs from '@emailjs/browser'

const LogInForm = ({ buttonName }) => {
  return (
    <>
      <div className="login-form container d-flex flex-column justify-content center text-center gap-2">
        <div className="row">
          <div className="col-12 col-md-6 container">
            <img
              className="img-fluid"
              src="./public/logo-ciso.png"
              alt="ciso logo"
            />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center text-center gap-2">
            <h1>CISO Login</h1>
            <p>Smarter Solutions for a Connected World.</p>
            <input className="rounded-pill" type="email" placeholder="Email" />
            <button className="rounded-pill" id="form-btn">
              {buttonName}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogInForm;
