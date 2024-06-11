import CardProduct from "../fragment/cardProduct";
import reusableBag from "/images/reusable-bag.jpg";
import shoesAliodas from "/images/shoes-aliodas.jpg";
import hat from "/images/hat.jpg";
import Navbar from "../fragment/navbar";
import { useState, useEffect } from "react";
import { fakeStoreApi } from "../services/getDataApi";

export default function Products() {
  // const products = [
  //   {
  //     id: 1,
  //     title: "Reusable Totebag recycle",
  //     image: reusableBag,
  //     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat voluptates temporibus debitis vitae architecto quas quia deserunt voluptatum enim labore odit eaque! Voluptatibus placeat ratione a suscipit cumque explicabo minus.",
  //     price: 1000000,
  //   },
  //   {
  //     id: 2,
  //     title: "Shoes Aliodas",
  //     image: shoesAliodas,
  //     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat voluptates temporibus debitis vitae architecto quas quia deserunt voluptatum enim labore odit eaque! Voluptatibus.",
  //     price: 3000000,
  //   },
  //   {
  //     id: 3,
  //     title: "Hat Nike",
  //     image: hat,
  //     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat voluptates temporibus debitis vitae architecto quas quia deserunt voluptatum enim.",
  //     price: 350000,
  //   },
  // ];

  const [cart, setCart] = useState([]);
  const [totalClicked, setTotalClicked] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  function handleAddToCart(id) {
    setTotalClicked(true);
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
  }

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
      <div className="w-[95%] mx-auto">
        <div className="flex justify-between mt-5">
          <div className="w-full basis-3/5">
            <div className="flex flex-wrap gap-4">
              {products.length > 0 &&
                products.map((product) => (
                  <CardProduct key={product.id}>
                    <CardProduct.Header
                      title={product.title}
                      image={product.image}
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
          </div>
          <div className="basis-2/5">
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
            {totalClicked && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
