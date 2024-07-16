import CardProduct from "../fragment/cardProduct";
import Navbar from "../layout/navbar";
import { useState, useEffect } from "react";
import { fakeStoreApi } from "../services/getDataApi";
import DisplayCart from "../fragment/cartDisplay";
import { useSelector, useDispatch } from "react-redux";
import { cartNotification } from "../redux/slices/noficationCart";

export default function Products() {
  const cart = useSelector((state) => state.cart.dataCart);
  const notificationDispatch = useDispatch();
  const getNotif = useSelector((state) => state.notification.status);
  const [products, setProducts] = useState([]);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      notificationDispatch(cartNotification({ status: false }));
    }, 3000);
  }, [cart]);

  useEffect(() => {
    fakeStoreApi((data) => {
      setProducts(data);
    });
  }, []);

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
                  id={product.id}
                  notificationDispatch={notificationDispatch}
                />
              </CardProduct>
            ))}
        </div>
        {getNotif.status && (
          <div className="flex justify-center">
            <div className="w-52 bg-slate-300 top-20 py-2 px-5 rounded-b-lg fixed z-[9999]">
              <h2 className="text-center font-semibold">
                Already Added To Cart
              </h2>
            </div>
          </div>
        )}
        <DisplayCart
          products={products}
          cart={cart}
          confirm={confirm}
          setConfirm={setConfirm}
        />
      </div>
    </div>
  );
}
