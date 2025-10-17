import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OTPForm = ({ generatedOtp }) => {
  console.log(localStorage.getItem("hashedOtp"));
  const navigate = useNavigate();
  const [otpInput, setOtpInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (otpInput === generatedOtp) {
      console.log(otpInput);
      alert("OTP is correct");
      navigate("/");
    } else {
      alert("OTP is wrong");
      navigate("/login");
    }
  };
  return (
    <>
      <div className="login-form container d-flex flex-column justify-content center text-center gap-2">
        <div className="row">
          <div className="col-12 col-md-6 container">
            <img className="img-fluid" src="./logo-ciso.png" alt="ciso logo" />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center text-center gap-2">
            <p>Smarter Solutions for a Connected World.</p>
            <form
              onSubmit={handleSubmit}
              className="d-flex flex-column align-items-center justify-content-center gap-2 w-75"
            >
              <input
                className="rounded-pill"
                type="text"
                placeholder="6-digit PIN"
                value={otpInput}
                onChange={(e) => setOtpInput(e.target.value)}
                required
              />
              <p className="text-danger">PIN will expire in 5 mins...</p>
              <button type="submit" className="rounded-pill">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTPForm;
