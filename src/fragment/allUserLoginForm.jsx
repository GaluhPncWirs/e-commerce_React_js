import { useState, useEffect, useRef } from "react";
import FormUser from "../componentForm/formUserLogin";
import FormButton from "../componentForm/buttonForm";
import TextLogin from "../componentForm/textParagrafLogin";
import { userLogin } from "../services/getDataUser";

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
    const dataUser = {
      username: email,
      password: password,
    };

    const jsonData = JSON.stringify(dataUser);

    userLogin(jsonData);
  }

  const focusRef = useRef(null);
  useEffect(() => {
    focusRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <div className="mt-7 relative">
        <div className="mt-4 relative">
          <FormUser
            type="text"
            value={email}
            onBlur={handelEmailBlur}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocusEmail(true)}
            ref={focusRef}
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
