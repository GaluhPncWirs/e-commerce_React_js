import { useEffect, useState } from "react";
import { getUsername } from "../services/getDataUser";

export function useLogin() {
  const [getUser, setGetUser] = useState("");
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
