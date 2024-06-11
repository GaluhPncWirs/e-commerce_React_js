export function userLogin(dataUser) {
  try {
    fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: dataUser,
    })
      .then((res) => res.json())
      .then((response) => response);
  } catch (err) {
    console.log(err);
  }
}
