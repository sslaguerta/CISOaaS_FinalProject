import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const LogInForm = ({ setIsOTPSent, setGeneratedOtp }) => {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const hashOtp = async (otp) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(otp);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const otp = generateOtp();
    const hashedOtp = await hashOtp(otp);

    localStorage.setItem("hashedOtp", hashedOtp);
    setGeneratedOtp(otp);

    const expiryTime = new Date();
    expiryTime.setMinutes(expiryTime.getMinutes() + 15);
    const formattedTime = expiryTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const templateParams = {
      to_email: email,
      passcode: otp,
      time: formattedTime,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });
      setIsOTPSent(true);
      alert(`OTP sent to ${email}`);
    } catch (error) {
      console.log("Emailjs Error:", error);
      alert("Failed to send email");
    } finally {
      setIsSending(false);
    }
  };
  return (
    <>
      <div className="login-form container d-flex flex-column justify-content center text-center">
        <div className="row">
          <div className="col-12 col-md-6 container">
            <img className="img-fluid" src="./logo-ciso.png" alt="ciso logo" />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center text-center gap-2">
            <h1>CISO Login</h1>
            <p>Smarter Solutions for a Connected World.</p>
            <form
              onSubmit={sendEmail}
              className="d-flex flex-column align-items-center justify-content-center gap-2 w-75"
            >
              <input
                className="rounded-pill"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                className="rounded-pill"
                id="form-btn"
                type="submit"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send OTP to Email"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogInForm;
