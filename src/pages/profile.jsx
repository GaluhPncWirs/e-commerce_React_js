import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useState, useEffect } from "react";
import AllProductBuy from "../fragment/allProductBuy";
import { fakeStoreApi } from "../services/getDataApi";
import PayLater from "../fragment/payLater";
import Navbar from "../layout/navbar";

export default function ProfileUser() {
  const [bar, setBar] = useState("");
  const [getProduk, setGetProduk] = useState([]);
  const [getDataToApi, setGetDataToApi] = useState([]);
  const [displayProduk, setDisplayProduk] = useState([]);
  const [displayPrice, setDisplayPrice] = useState([]);

  useEffect(() => {
    setGetProduk(JSON.parse(localStorage.getItem("product")) || []);
  }, []);

  useEffect(() => {
    fakeStoreApi((getData) => setGetDataToApi(getData));
  }, []);

  useEffect(() => {
    const filtered = getDataToApi.filter((acc) => fillterId(acc.id));
    setDisplayProduk(filtered.map((a) => a.title));
  }, [getDataToApi]);

  function fillterId(id) {
    return getProduk.find((identity) => identity.id === id);
  }

  useEffect(() => {
    let sum = 0;
    for (const i of getDataToApi) {
      const sumPrice = fillterId(i.id);
      if (sumPrice) {
        sum += i.price * sumPrice.qty;
      }
    }
    setDisplayPrice(Math.floor(sum));
  }, [getDataToApi]);

  useEffect(() => {
    const navigate = document.querySelectorAll(".navigate li");
    function navClick() {
      navigate.forEach((nav) => {
        nav.classList.remove("bgProfile");
      });
      this.classList.add("bgProfile");
    }

    navigate.forEach((item) => item.addEventListener("click", navClick));
    return () => {
      navigate.forEach((item) => item.removeEventListener("click", navClick));
    };
  }, []);

  function handleNavBar(event) {
    setBar(event);
  }

  return (
    <div>
      <Navbar />
      <div className="w-9/12 mx-auto h-screen flex justify-center mt-28">
        <div className="w-1/2 bg-sky-600 h-3/4 shadow-md shadow-slate-600">
          <h1 className="font-semibold text-xl text-center my-1.5">
            Your Profile
          </h1>
          <div className="flex h-[158px]">
            <div className="basis-1/3">
              <img src="img/userProfile.png" className="w-full" />
            </div>
            <div className="basis-2/3 flex items-center bg-slate-200 justify-center">
              <ul className="tracking-wide font-semibold">
                <li>
                  Subs <span className="ml-7 mr-1">:</span> {useLogin().sub}
                </li>
                <li>
                  Name <span className="ml-5 mr-1 ">:</span> {useLogin().user}
                </li>
                <li>
                  IAT <span className="ml-[41px] mr-1">:</span> {useLogin().iat}
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-300 h-12">
            <ul className="flex font-semibold relative h-full navigate">
              <li
                className="profileBar bgProfile"
                onClick={() => handleNavBar("kesatu")}
              >
                <span className="material-symbols-outlined absolute top-1 left-[70px] text-blue-700">
                  receipt_long
                </span>
                Purchase History
              </li>
              <li className="profileBar" onClick={() => handleNavBar("kedua")}>
                {" "}
                <span className="material-symbols-outlined absolute top-1 left-[48%] text-blue-700">
                  payments
                </span>
                Pay Later
              </li>
              <li className="profileBar" onClick={() => handleNavBar("ketiga")}>
                <span className="material-symbols-outlined absolute top-1 right-[68px] text-blue-700">
                  wallet
                </span>{" "}
                E-Wallet
              </li>
            </ul>
          </div>
          <div className="overflow-auto h-48">
            {bar === "kedua" ? (
              <PayLater displayPrice={displayPrice} />
            ) : bar === "ketiga" ? (
              <p>hello world</p>
            ) : (
              <AllProductBuy displayProduk={displayProduk} />
            )}
          </div>
          <div className="flex justify-center items-center h-10">
            <Link className="bg-slate-300 px-3 rounded-lg" to="/products">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
