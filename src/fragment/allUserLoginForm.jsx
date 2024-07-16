import { useState, useEffect, useRef } from "react";
import FormUser from "../component/formUserLogin";
import FormButton from "../component/buttonForm";
import TextLogin from "../component/textParagrafLogin";
import { userLogin } from "../services/getDataUser";

export default function FormInputUserLogin({ darkMode }) {
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
        alert(res);
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
            darkMode={darkMode}
          />
          <TextLogin
            textForm="Username"
            isFocus={isFocusUsername}
            childern={usernameValue}
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
          <TextLogin
            textForm="Password"
            isFocus={isFocusPass}
            childern={password}
            darkMode={darkMode}
          />
        </div>
      </div>
      <FormButton darkMode={darkMode}>Login</FormButton>
    </form>
  );
}
