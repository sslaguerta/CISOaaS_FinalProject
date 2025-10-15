import { useState } from "react";
import LogInForm from "../components/LogInForm";
import OTPForm from "../components/OTPForm";

const LogIn = () => {
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");

  return (
    <div className="login-container">
      {!isOTPSent ? (
        <LogInForm
          setIsOTPSent={setIsOTPSent}
          setGeneratedOtp={setGeneratedOtp}
        />
      ) : (
        <OTPForm generatedOtp={generatedOtp} />
      )}
    </div>
  );
};

export default LogIn;
