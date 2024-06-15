import { useEffect, useState } from "react";
import Navbar from "../fragment/navbar";
import { useParams } from "react-router-dom";
import { detailProduck } from "../services/getDataApi";

export default function ProductDetail() {
  const { id } = useParams();
  const [produk, setProduk] = useState({
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });
  useEffect(() => {
    detailProduck(id, (res) => {
      setProduk(res);
    });
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="w-[60%] mx-auto my-44">
        <div className="flex font-sans">
          <div className="flex-none w-52 relative">
            <img
              src={produk.image}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <form className="flex-auto p-6 bg-slate-300">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-lg font-semibold text-slate-900">
                {produk.title}
              </h1>
              <div className="text-lg font-semibold text-slate-500">
                $ {produk.price}
              </div>
              <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                Stock ({produk.rating.count})
              </div>
            </div>
            <div className="flex space-x-4 mb-3 text-sm font-medium mt-3 items-center">
              <div className="flex-auto flex space-x-4">
                <button
                  className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                  type="submit"
                >
                  Buy Now
                </button>
                <button
                  className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                  type="button"
                >
                  Add To Cart
                </button>
              </div>
              <h2 className="font-bold text-sm text-slate-500">
                Rate {produk.rating.rate} / 5
              </h2>
            </div>
            <p className="text-sm text-slate-700">{produk.description}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
