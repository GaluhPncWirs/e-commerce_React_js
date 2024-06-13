import { useState, useEffect, useRef } from "react";
import FormUser from "../componentForm/formUserLogin";
import FormButton from "../componentForm/buttonForm";
import TextLogin from "../componentForm/textParagrafLogin";
import { userLogin } from "../services/getDataUser";

export default function FormInputUserLogin() {
  const [isFocusUsername, setIsFocusUsername] = useState(false);
  const [isFocusPass, setIsFocusPass] = useState(false);
  const [usernameValue, setUsernameValue] = useState("");
  const [password, setPassword] = useState("");

  function handelUsernameBlur() {
    setIsFocusUsername(usernameValue !== "");
  }

  function handelPassBlur() {
    setIsFocusPass(password !== "");
  }

  function handleLogin(e) {
    e.preventDefault();
    const dataUser = {
      username: usernameValue,
      password: password,
    };

    userLogin(dataUser, (condition, res) => {
      if (condition) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        console.log(res);
      }
    });
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
            value={usernameValue}
            onBlur={handelUsernameBlur}
            onChange={(e) => setUsernameValue(e.target.value)}
            onFocus={() => setIsFocusUsername(true)}
            ref={focusRef}
          />
          <TextLogin
            textForm="Username"
            isFocus={isFocusUsername}
            childern={usernameValue}
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
