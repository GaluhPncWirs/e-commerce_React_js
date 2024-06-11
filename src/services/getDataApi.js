export function fakeStoreApi(callback) {
  try {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((response) => {
        callback(response);
      });
  } catch (err) {
    console.log(err);
  }
}
