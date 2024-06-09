import CardProduct from "../fragment/cardProduct";
import reusableBag from "/images/reusable-bag.jpg";
import shoesAliodas from "/images/shoes-aliodas.jpg";
import hat from "/images/hat.jpg";
import { useState } from "react";

export default function Products() {
  const products = [
    {
      id: 1,
      title: "Reusable Totebag recycle",
      image: reusableBag,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat voluptates temporibus debitis vitae architecto quas quia deserunt voluptatum enim labore odit eaque! Voluptatibus placeat ratione a suscipit cumque explicabo minus.",
      price: 1000000,
    },
    {
      id: 2,
      title: "Shoes Aliodas",
      image: shoesAliodas,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat voluptates temporibus debitis vitae architecto quas quia deserunt voluptatum enim labore odit eaque! Voluptatibus.",
      price: 3000000,
    },
    {
      id: 3,
      title: "Hat Nike",
      image: hat,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat voluptates temporibus debitis vitae architecto quas quia deserunt voluptatum enim.",
      price: 350000,
    },
  ];

  const [cart, setCart] = useState([]);
  const [clicked, setClicked] = useState(false);

  function handleAddToCart(id) {
    setClicked(true);
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

  const totalAllPrice = cart.reduce((acc, current) => {
    const produk = products.find((item) => item.id === current.id);
    return acc + current.qty * produk.price;
  }, 0);

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
          <div className="w-full basis-3/5">
            <div className="flex flex-wrap gap-4">
              {products.map((product) => (
                <CardProduct key={product.id}>
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
                {cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  let total = item.qty * product.price;
                  return (
                    <tr key={item.key}>
                      <td>{item.qty}</td>
                      <td>{product.title}</td>
                      <td>
                        {product.price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td>
                        {total.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {clicked && (
              <div className="relative bg-slate-900">
                <span className="absolute top-0 text-base mt-1">
                  Total All Price ={" "}
                  {totalAllPrice.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </span>
                <hr className="border-black border-b w-full mt-1" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
