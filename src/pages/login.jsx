import { useContext, useState } from "react";
import { DarkMode } from "../context/darkMode";
import FormInputUserLogin from "../fragment/allUserLoginForm";
import LayoutForm from "../layout/authLayout";
import FormInputUserRegister from "../fragment/allUserRegisterForm";
import BtnDarkMode from "../component/buttonDarkMode";

export default function Login() {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [textHtml, setTextHtml] = useState("");

  function referenceToTextContent(a) {
    setTextHtml(a.target.textContent);
  }
  return (
    <div
      className={`flex justify-center items-center h-screen flex-col ${
        isDarkMode === true ? `bg-slate-700` : `bg-blue-300`
      }`}
    >
      <BtnDarkMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <LayoutForm
        title={textHtml === "Sign Up" ? "Sign Up" : "Login"}
        desc={
          textHtml === "Sign Up"
            ? "Welcome, Please Enter Your Detail"
            : "Please Enter Your Account"
        }
        darkMode={isDarkMode}
      >
        {textHtml === "Sign Up" ? (
          <FormInputUserRegister darkMode={isDarkMode} />
        ) : (
          <FormInputUserLogin darkMode={isDarkMode} />
        )}
      </LayoutForm>
      <p className={`text-sm text-black ${isDarkMode && `text-white`}`}>
        {textHtml === "Sign Up"
          ? "Already have an account ?"
          : "Don't have an account ?"}
        <button
          className={`formButton ${isDarkMode && `text-blue-500`}`}
          onClick={referenceToTextContent}
        >
          {textHtml === "Sign Up" ? "Login" : "Sign Up"}
        </button>
      </p>
    </div>
  );
}
