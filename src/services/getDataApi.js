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

export function detailProduck(id, getItem) {
  try {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((respon) => respon.json())
      .then((json) => {
        getItem(json);
      });
  } catch (err) {
    console.log(err);
  }
}
