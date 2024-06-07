import CardProduct from "../fragment/cardProduct";
import reusableBag from "/images/reusable-bag.jpg";
import shoesAliodas from "/images/shoes-aliodas.jpg";
import hat from "/images/hat.jpg";
import { useState } from "react";

export default function Products() {
  const products = [
    {
      key: Math.random() * 100,
      id: 1,
      title: "Reusable Totebag recycle",
      image: reusableBag,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat voluptates temporibus debitis vitae architecto quas quia deserunt voluptatum enim labore odit eaque! Voluptatibus placeat ratione a suscipit cumque explicabo minus.",
      price: 1000000,
    },
    {
      key: Math.random() * 100,
      id: 2,
      title: "Shoes Aliodas",
      image: shoesAliodas,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat voluptates temporibus debitis vitae architecto quas quia deserunt voluptatum enim labore odit eaque! Voluptatibus.",
      price: 3000000,
    },
    {
      key: Math.random() * 100,
      id: 3,
      title: "Hat Nike",
      image: hat,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat voluptates temporibus debitis vitae architecto quas quia deserunt voluptatum enim.",
      price: 350000,
    },
  ];

  const [cart, setCart] = useState([
    {
      key: Math.random() * 20,
      id: 1,
      qty: 1,
    },
  ]);

  function handleAddToCart(id) {
    setCart([
      ...cart,
      {
        key: Math.random() * 20,
        id: id,
        qty: 1,
      },
    ]);
  }

  function handleLogout() {
    window.location.href = "/";
    localStorage.clear();
  }
  return (
    <>
      <div className="bg-blue-400 h-16 w-full">
        <div className="flex h-full">
          <div className="basis-1/3 flex justify-center items-center">
            <h1 className="font-semibold text-xl max-w-32">
              Train Create E-Commerce
            </h1>
          </div>
          <div className="basis-2/3 flex justify-end items-center gap-10">
            <h1>Hello {localStorage.getItem("name")}</h1>
            <div className="mr-10 border border-white rounded-lg hover:bg-blue-500">
              <button
                className="px-4 py-1.5 font-semibold"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] mx-auto">
        <div className="flex justify-between mt-5">
          <div className="w-full basis-2/3">
            <div className="flex flex-wrap gap-4">
              {products.map((product) => (
                <CardProduct key={product.key}>
                  <CardProduct.Header
                    title={product.title}
                    image={product.image}
                  />
                  <CardProduct.Body>{product.desc}</CardProduct.Body>
                  <CardProduct.Footer
                    price={product.price}
                    handleAddToCart={handleAddToCart}
                    id={product.id}
                  />
                </CardProduct>
              ))}
            </div>
          </div>
          <div className="basis-1/3">
            <h1 className="text-xl font-semibold mb-3">Cart</h1>
            <table className="text-left table-auto border-separate border-spacing-x-4 border-spacing-y-1">
              <thead>
                <tr>
                  <td>Qty</td>
                  <td>Product Name</td>
                  <td>Price</td>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.key}>
                      <td>{item.id}</td>
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td>{item.qty * product.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
