import { jwtDecode } from "jwt-decode";
export function userLogin(dataUserSend, callBackUser) {
  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataUserSend),
  })
    .then((res) => res.json())
    .then((response) => {
      callBackUser(true, response.token);
    })
    .catch((error) => {
      callBackUser(false, error);
    });
}

export function getUsername(getItem) {
  return jwtDecode(getItem).user;
}
