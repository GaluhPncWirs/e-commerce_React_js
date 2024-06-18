import CardProduct from "../fragment/cardProduct";
import Navbar from "../fragment/navbar";
import { useState, useEffect } from "react";
import { fakeStoreApi } from "../services/getDataApi";
import DisplayCart from "../fragment/cartDisplay";

export default function Products() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [notificationCart, setNotificationCart] = useState(false);

  function handleAddToCart(id) {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((jumlahBarang) =>
          jumlahBarang.id === id
            ? { ...jumlahBarang, qty: jumlahBarang.qty + 1 }
            : jumlahBarang
        )
      );
    } else {
      setCart([
        ...cart,
        {
          key: Math.random() * 100,
          id: id,
          qty: 1,
        },
      ]);
    }
    setNotificationCart(true);
  }

  useEffect(() => {
    setTimeout(() => {
      setNotificationCart(false);
    }, 3000);
  }, [notificationCart]);

  useEffect(() => {
    fakeStoreApi((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, current) => {
        const produk = products.find((item) => item.id === current.id);
        return acc + current.qty * produk.price;
      }, 0);
      setTotalPrice(sum);
    }
  }, [cart]);

  return (
    <div>
      <Navbar />
      <div className="w-[95%] mx-auto mb-8 relative">
        <div className="flex flex-wrap gap-4 justify-around pt-28">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header
                  title={product.title}
                  image={product.image}
                  id={product.id}
                />
                <CardProduct.Body>{product.description}</CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  handleAddToCart={handleAddToCart}
                  id={product.id}
                />
              </CardProduct>
            ))}
        </div>
        {notificationCart && (
          <div className="flex justify-center">
            <div className="w-52 bg-slate-300 top-20 py-2 px-5 rounded-b-lg fixed z-[9999]">
              <h2 className="text-center font-semibold">
                Already Added To Cart
              </h2>
            </div>
          </div>
        )}
        <DisplayCart
          totalPrice={totalPrice}
          products={products}
          cart={cart}
          setCart={setCart}
        />
      </div>
    </div>
  );
}
