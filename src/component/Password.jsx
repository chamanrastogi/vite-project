import { useState, useRef } from "react";

const Password = () => {
  const [passwordText, setPasswordText] = useState("12345678");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const passwordRef = useRef(null);

  const passToggle = () => {
   
    setIsPasswordVisible((prev) => !prev);
    console.log(isPasswordVisible);
    if (passwordRef.current) {
      passwordRef.current.type = isPasswordVisible ? "password" : "text";
    }
  };

  return (
    <>
      <input
        ref={passwordRef}
        type={isPasswordVisible ? "text" : "password"}
        value={passwordText}
        onChange={(e) => setPasswordText(e.target.value)}
      />
      <button className="btn btn-info" onClick={passToggle}>
        {isPasswordVisible ? "Hide Password" : "Show Password"}
      </button>
    </>
  );
};

export default Password;
