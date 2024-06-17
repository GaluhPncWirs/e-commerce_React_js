import { useEffect, useState } from "react";
import { getUsername } from "../services/getDataUser";

export function useLogin() {
  const [getUser, setGetUser] = useState({
    iat: 0,
    sub: 0,
    user: "",
  });
  useEffect(() => {
    const getitem = localStorage.getItem("token");
    if (!getitem) {
      window.location.href = "/";
    } else {
      setGetUser(getUsername(getitem));
    }
  }, []);

  return getUser;
}
