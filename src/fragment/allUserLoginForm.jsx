import { useState } from "react";
import FormUser from "../componentForm/formUserLogin";
import FormButton from "../componentForm/buttonForm";
import TextLogin from "../componentForm/textParagrafLogin";

export default function FormInputUserLogin() {
  const [isFocusEmail, setIsFocusEmail] = useState(false);
  const [isFocusPass, setIsFocusPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handelEmailBlur() {
    setIsFocusEmail(email !== "");
  }

  function handelPassBlur() {
    setIsFocusPass(password !== "");
  }

  function handleLogin(e) {
    e.preventDefault();
    const storageEmail = localStorage.getItem("email");
    const storagePassword = localStorage.getItem("password");
    if (email === storageEmail && password === storagePassword) {
      window.location.href = "/products";
    } else {
      alert(
        `Wrong ${
          email !== storageEmail && password !== storagePassword
            ? "Email And Password"
            : email !== storageEmail
            ? "Email"
            : password !== storagePassword
            ? "Password"
            : ""
        }`
      );
    }
  }
  return (
    <form onSubmit={handleLogin}>
      <div className="mt-7 relative">
        <div className="mt-4 relative">
          <FormUser
            type="email"
            value={email}
            onBlur={handelEmailBlur}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocusEmail(true)}
          />
          <TextLogin textForm="Email" isFocus={isFocusEmail} childern={email} />
        </div>
        <div className="mt-5">
          <FormUser
            type="password"
            value={password}
            onBlur={handelPassBlur}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setIsFocusPass(true)}
          />
          <TextLogin
            textForm="Password"
            isFocus={isFocusPass}
            childern={password}
          />
        </div>
      </div>
      <FormButton>Login</FormButton>
    </form>
  );
}
