import { useState } from "react";
import FormUser from "../component/formUserLogin";
import FormButton from "../component/buttonForm";
import TextRegister from "../component/textParagrafRegister";

export default function FormInputUserRegister({ darkMode }) {
  const [isFocusEmail, setIsFocusEmail] = useState(false);
  const [isFocusPass, setIsFocusPass] = useState(false);
  const [isFocusName, setIsFocusName] = useState(false);
  const [isFocusRepeatPass, setIsFocusRepeatPass] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  function handelEmailBlur() {
    setIsFocusEmail(email !== "");
  }

  function handelNameBlur() {
    setIsFocusName(fullName !== "");
  }

  function handelPassBlur() {
    setIsFocusPass(password !== "");
  }

  function handelRepeatPassBlur() {
    setIsFocusRepeatPass(repeatPassword !== "");
  }

  function handleRegister(e) {
    e.preventDefault();
    if (!email && !repeatPassword && !fullName) {
      alert("kamu belum menginputkan semua");
    } else if (!repeatPassword) {
      alert("kamu belum mengisikkan password");
    } else if (!fullName) {
      alert("kamu belum mengisikkan Nama");
    } else if (!email) {
      alert("kamu belum mengisikkan Username");
    } else {
      localStorage.setItem("email", email);
      localStorage.setItem("password", repeatPassword);
      localStorage.setItem("name", fullName);
      document.location.href = "/";
    }
  }

  return (
    <>
      <form onSubmit={handleRegister} id="setcontent">
        <div className="mt-7 relative">
          <div className="mt-4 relative">
            <FormUser
              type="text"
              value={fullName}
              onBlur={handelNameBlur}
              onChange={(e) => setFullName(e.target.value)}
              onFocus={() => setIsFocusName(true)}
              darkMode={darkMode}
            />
            <TextRegister
              textForm="Full Name"
              isFocus={isFocusName}
              childern={fullName}
              darkMode={darkMode}
            />
          </div>
          <div className="mt-5">
            <FormUser
              type="text"
              value={email}
              onBlur={handelEmailBlur}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocusEmail(true)}
              darkMode={darkMode}
            />
            <TextRegister
              textForm="Username"
              isFocus={isFocusEmail}
              childern={email}
              darkMode={darkMode}
            />
          </div>
          <div className="mt-5">
            <FormUser
              type="password"
              value={password}
              onBlur={handelPassBlur}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsFocusPass(true)}
              darkMode={darkMode}
            />
            <TextRegister
              textForm="Password"
              isFocus={isFocusPass}
              childern={password}
              darkMode={darkMode}
            />
          </div>
          <div className="mt-5">
            <FormUser
              type="password"
              value={repeatPassword}
              onBlur={handelRepeatPassBlur}
              onChange={(e) => setRepeatPassword(e.target.value)}
              onFocus={() => setIsFocusRepeatPass(true)}
              darkMode={darkMode}
            />
            <TextRegister
              textForm="Repeat Password"
              isFocus={isFocusRepeatPass}
              childern={repeatPassword}
              darkMode={darkMode}
            />
          </div>
        </div>
        <p
          className={`text-xs text-red-500 font-semibold mt-1.5 ${
            password !== repeatPassword ? `visible` : `invisible`
          }`}
        >
          Password Harus Sama dengan Yang Anda Inputkan Sebelumnya
        </p>
        <FormButton>Create Account</FormButton>
      </form>
    </>
  );
}
