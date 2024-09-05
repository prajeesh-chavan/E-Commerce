import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

const Login = () => {
  const [action, setAction] = useState("Sign Up");

  const toggleAction = () => {
    setAction((prevAction) => (prevAction === "Sign Up" ? "Login" : "Sign Up"));
  };

  return (
    <div className="w-full h-[100vh] bg-[#fce3fe] pt-10">
      <div className="w-[588px] h-[600px] bg-white mx-auto p-[40px_60px]">
        <div className="text-3xl font-semibold text-center text-blue-800">
          <h1 className="my-5">{action}</h1>
        </div>
        <div className="flex flex-col gap-10 mt-10">
          {action === "Sign Up" && (
            <div className="flex items-center gap-10 border border-[#c9c9c9] pl-10">
              <FaUser />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full h-16 bg-transparent border-none outline-none"
              />
            </div>
          )}
          <div className="flex items-center gap-10 border border-[#c9c9c9] pl-10">
            <MdEmail />
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full h-16 bg-transparent border-none outline-none"
            />
          </div>
          <div className="flex items-center gap-10 border border-[#c9c9c9] pl-10">
            <FaLock />
            <input
              type="password"
              placeholder="Your Password"
              className="w-full h-16 bg-transparent border-none outline-none"
            />
          </div>
        </div>
        <button className="w-full h-[60px] text-white bg-[#ff4141] mt-[20px] border-none text-[24px] font-medium cursor-pointer">
          Submit
        </button>
        <p className="mt-[20px] text-[#5c5c5c] font-medium text-[18px]">
          {action === "Sign Up" ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            className="text-[#ff4141] font-semibold cursor-pointer"
            onClick={toggleAction}
          >
            {action === "Sign Up" ? "Login Here" : "Sign Up Here"}
          </span>
        </p>
        <div className="flex items-center mt-[25px] gap-[20px] text-[#5c5c5c] text-[18px] font-medium">
          <input type="checkbox" id="agree-terms" />
          <label htmlFor="agree-terms">
            By continuing I agree to the terms of use and privacy policy
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
