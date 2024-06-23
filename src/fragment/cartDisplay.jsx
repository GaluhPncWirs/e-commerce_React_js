import { useEffect } from "react";
import { useState } from "react";

export default function DisplayCart({ totalPrice, products, cart, setCart }) {
  const [displayCart, setDisplayCart] = useState(false);
  const [displayBuy, setDisplayBuy] = useState(false);

  function handleDisplayCart() {
    setDisplayCart(true);
  }

  function handleDeleteDisplayCart() {
    setDisplayCart(false);
  }

  function handleRemoveFromCart(id) {
    const findId = cart.find((item) => item.id === id);
    if (findId) {
      if (findId.qty > 1) {
        setCart(
          cart.map((quantity) =>
            quantity.id === id
              ? { ...quantity, qty: (quantity.qty -= 1) }
              : quantity
          )
        );
      } else {
        setCart(cart.filter((item) => item.id !== id));
      }
    }
  }

  function buyNow() {
    setDisplayBuy(true);
    setCart([]);
    return localStorage.setItem("product", JSON.stringify(cart));
  }

  useEffect(() => {
    setTimeout(() => {
      setDisplayBuy(false);
    }, 3000);
  }, [displayBuy]);

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
        <div className="w-2/5 fixed bottom-20 bg-blue-300 z-[9999] right-5 rounded-lg opacity-95 max-h-[400px] overflow-auto">
          <div className="px-5 pb-7 pt-4">
            <div
              className="flex justify-end cursor-pointer"
              onClick={handleDeleteDisplayCart}
            >
              <span className="material-symbols-outlined text-red-500">
                close
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-5 text-center text-blue-500">
              Cart
            </h1>
            {cart.length <= 0 ? (
              <h1 className="text-xl font-semibold text-center">
                You haven't Added a Product to Cart
              </h1>
            ) : (
              <div>
                <table className="text-left table-auto border-separate border-spacing-x-5 border-spacing-y-1">
                  <thead>
                    <tr>
                      <td className="opacity-0">D</td>
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
                            <td>
                              <button
                                className="font-semibold text-3xl text-red-600 mb-1"
                                onClick={() => handleRemoveFromCart(product.id)}
                              >
                                -
                              </button>
                            </td>
                            <td>{item.qty}</td>
                            <td>{product.title.substring(0, 20)}...</td>
                            <td>
                              {product.price.toLocaleString("id-ID", {
                                style: "currency",
                                currency: "USD",
                              })}
                            </td>
                            <td>
                              {(item.qty * product.price).toLocaleString(
                                "id-ID",
                                {
                                  style: "currency",
                                  currency: "USD",
                                }
                              )}
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
                <div className="flex justify-around mt-5">
                  <button className="buttonCart" onClick={buyNow}>
                    Buy now
                  </button>
                  <button className="buttonCart" onClick={() => setCart([])}>
                    Delete all cart
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <div
        className={`w-1/3 h-14 bg-slate-400 z-[9999] fixed top-1/2 rounded-lg pt-3 left-1/3 ${
          displayBuy === true ? `visible` : `invisible`
        }`}
      >
        <h1 className="font-bold text-xl text-center">
          Successful purchase of products
        </h1>
      </div>
    </div>
  );
}
