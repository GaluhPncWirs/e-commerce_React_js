import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { reductionQty } from "../redux/slices/cartSlice";

export default function DisplayCart(props) {
  const { products, cart, confirm, setConfirm } = props;

  const [displayCart, setDisplayCart] = useState(false);
  const [displayBuy, setDisplayBuy] = useState(false);
  const [condition, setCondition] = useState("");
  const [totalCart, setTotalCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch()


  function handleDisplayCart() {
    setDisplayCart(true);
  }

  function handleDeleteDisplayCart() {
    setDisplayCart(false);
  }

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, current) => {
        const produk = products.find((item) => item.id === current.id);
        return acc + current.qty * produk.price;
      }, 0);
      setTotalPrice(sum);
    }
  }, [cart]);

  useEffect(() => {
    const totalSum = cart.reduce((acc, cur) => {
      return acc + cur.qty;
    }, 0);
    setTotalCart(totalSum);
  }, [cart]);

  function handleRemoveFromCart(itemId) {
    dispatch(reductionQty({id: itemId}))
  }

  function buyNow(event) {
    setConfirm(true);
    setCondition(event);
  }

  function confirmBuy() {
    setDisplayBuy(true);
    setConfirm(false);
    setDisplayCart(false);
    if (confirm === true) {
      localStorage.setItem("product", JSON.stringify(cart));
    }
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
        <div
          className={`flex justify-center items-center absolute w-6 h-6 rounded-full bg-red-500 -top-1 -right-1 animate-bounce ${
            cart.length > 0 ? `visible` : `invisible`
          }`}
        >
          <span className="font-bold text-lg">{totalCart}</span>
        </div>
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
                          <tr key={item.id}>
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
                  <button
                    className="buttonCart"
                    onClick={() => buyNow("beliSekarang")}
                  >
                    Buy now
                  </button>
                  <button className="buttonCart" onClick={buyNow}>
                    Pay Later
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
        className={`w-1/3 h-20 bg-slate-400 z-[9999] fixed top-1/2 left-1/3 pt-2 rounded-xl ${
          confirm === true ? `visible` : `invisible`
        }`}
      >
        <p className="text-center font-semibold text-xl">Are You Sure ?</p>
        <div className="flex justify-around mt-2 font-medium text-lg">
          <button onClick={confirmBuy}>Yes</button>
          <button onClick={() => setConfirm(false)}>No</button>
        </div>
      </div>
      <div
        className={`w-1/3 h-14 bg-slate-400 z-[9999] fixed top-1/2 rounded-lg pt-3 left-1/3 ${
          displayBuy === true ? `visible` : `invisible`
        }`}
      >
        {condition === "beliSekarang" ? (
          <h1 className="font-bold text-xl text-center">
            Successful purchase of products
          </h1>
        ) : (
          <h1 className="font-bold text-xl text-center">
            lu belinya pay later cok
          </h1>
        )}
      </div>
    </div>
  );
}
