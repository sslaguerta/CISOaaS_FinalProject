import LogInForm from "./components/LogInForm";
import { useState } from "react";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="container d-flex flex-column gap-3">
        <LogInForm buttonName={isLogin ? "LOGIN" : "SIGN-UP"} />
        {/* <button className="bg-dark text-light border-0" onClick={() => setIsLogin(!isLogin)}>
          Switch to {isLogin ? "Sign Up " : "Log In "}
        </button> */}
      </div>
    </div>
  );
};

export default App;
