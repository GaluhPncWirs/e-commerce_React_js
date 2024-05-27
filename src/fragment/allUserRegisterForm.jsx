import { useState } from "react";
import FormUser from "../componentForm/formUserLogin";
import FormButton from "../componentForm/buttonForm";
import TextRegister from "../componentForm/textParagrafRegister";
import { Link } from "react-router-dom";

export default function FormInputUserRegister() {
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
  return (
    <form action="">
      <div className="mt-7 relative">
        <div className="mt-4 relative">
          <FormUser
            type="text"
            value={fullName}
            onBlur={handelNameBlur}
            onChange={(e) => setFullName(e.target.value)}
            onFocus={() => setIsFocusName(true)}
          />
          <TextRegister
            textForm="Full Name"
            isFocus={isFocusName}
            childern={fullName}
          />
        </div>
        <div className="mt-5">
          <FormUser
            type="email"
            value={email}
            onBlur={handelEmailBlur}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocusEmail(true)}
          />
          <TextRegister
            textForm="Email"
            isFocus={isFocusEmail}
            childern={email}
          />
        </div>
        <div className="mt-5">
          <FormUser
            type="password"
            value={password}
            onBlur={handelPassBlur}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setIsFocusPass(true)}
          />
          <TextRegister
            textForm="Password"
            isFocus={isFocusPass}
            childern={password}
          />
        </div>
        <div className="mt-5">
          <FormUser
            type="password"
            value={repeatPassword}
            onBlur={handelRepeatPassBlur}
            onChange={(e) => setRepeatPassword(e.target.value)}
            onFocus={() => setIsFocusRepeatPass(true)}
          />
          <TextRegister
            textForm="Repeat Password"
            isFocus={isFocusRepeatPass}
            childern={repeatPassword}
          />
        </div>
      </div>
      <Link className="formButton" to="/">
        Already have an account ?
      </Link>
      <FormButton textButton="Create Account" />
    </form>
  );
}
