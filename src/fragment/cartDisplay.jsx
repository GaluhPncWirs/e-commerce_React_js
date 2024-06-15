import { useState } from "react";

export default function DisplayCart({ totalPrice, products, cart }) {
  const [displayCart, setDisplayCart] = useState(false);

  function handleDisplayCart() {
    setDisplayCart(true);
  }

  function handleDeleteDisplayCart() {
    setDisplayCart(false);
  }

  return (
    <div>
      <div
        className="w-14 h-14 bg-blue-400 rounded-full bottom-5 right-5 fixed flex justify-center items-center z-[9999] cursor-pointer shadow-lg shadow-slate-400 hover:bg-blue-500 opacity-95"
        onClick={handleDisplayCart}
      >
        <span className="material-symbols-outlined text-3xl">
          shopping_cart
        </span>
      </div>
      {displayCart && (
        <div className="w-2/5 fixed bottom-20 bg-blue-300 z-[9999] right-5 rounded-lg opacity-95 max-h-96 overflow-auto">
          <div className="px-5 pb-7 pt-4">
            <div
              className="flex justify-end cursor-pointer"
              onClick={handleDeleteDisplayCart}
            >
              <span className="material-symbols-outlined">close</span>
            </div>
            <h1 className="text-2xl font-bold mb-5 text-center text-blue-500">
              Cart
            </h1>
            <table className="text-left table-auto border-separate border-spacing-x-5 border-spacing-y-1">
              <thead>
                <tr>
                  <td>Qty</td>
                  <td>Product Name</td>
                  <td>Price</td>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 &&
                  cart.map((item) => {
                    const product = products.find(
                      (product) => product.id === item.id
                    );
                    return (
                      <tr key={item.key}>
                        <td>{item.qty}</td>
                        <td>{product.title.substring(0, 20)}...</td>
                        <td>
                          {product.price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </td>
                        <td>
                          {(item.qty * product.price).toLocaleString("id-ID", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <div className="mt-2">
              <hr className="border-black border-b w-full" />
              <div className="relative flex pt-2 justify-between">
                <p>Total All Price</p>
                <p>
                  {totalPrice.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
