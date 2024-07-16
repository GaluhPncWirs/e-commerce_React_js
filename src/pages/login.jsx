import { useContext } from "react";
import { DarkMode } from "../context/darkMode";
import FormInputUserLogin from "../fragment/allUserLoginForm";
import LayoutForm from "../layout/authLayout";

export default function Login() {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <div
      className={`flex justify-center items-center h-screen ${
        isDarkMode === true ? `bg-slate-700` : `bg-blue-300`
      }`}
    >
      <div className="absolute top-5 right-10">
        <input type="checkbox" className="hidden" id="darkMode" />
        <label
          className="cursor-pointer"
          htmlFor="darkMode"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          <div className="bg-blue-200 h-7 w-14 rounded-3xl p-1">
            <div className="core bg-blue-600 h-5 w-5 rounded-full transition-all duration-200"></div>
          </div>
        </label>
      </div>
      {/* <button onClick={() => setIsDarkMode(!isDarkMode)}>click me</button> */}

      <LayoutForm
        title="Login"
        desc="Please Enter Your Account"
        type="login"
        darkMode={isDarkMode}
      >
        <FormInputUserLogin darkMode={isDarkMode} />
      </LayoutForm>
    </div>
  );
}
