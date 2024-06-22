import { Link } from "react-router-dom";
import Navbar from "../fragment/navbar";
import { useLogin } from "../hooks/useLogin";
import { useState } from "react";
import { useEffect } from "react";
import AllProductBuy from "../component/allProductBuy";
import { fakeStoreApi } from "../services/getDataApi";

export default function ProfileUser() {
  const [bar, setBar] = useState("");
  const [getProduk, setGetProduk] = useState([]);
  const [getDataToApi, setGetDataToApi] = useState([]);
  const [displayPrice, setDisplayPrice] = useState(0);

  useEffect(() => {
    setGetProduk(JSON.parse(localStorage.getItem("product")) || []);
  }, []);

  useEffect(() => {
    fakeStoreApi((getData) => setGetDataToApi(getData));
  }, []);

  useEffect(() => {
    let sum = 0;
    for (const i of getProduk) {
      const findId = getDataToApi.find((identity) => identity.id === i.id);
      if (findId) {
        sum += i.qty * findId.price;
      }
    }
    setDisplayPrice(sum);
  }, [getProduk, getDataToApi]);

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
      <div className="w-9/12 mx-auto h-screen flex justify-center items-center">
        <div className="w-2/5 bg-sky-600 h-3/5 shadow-md shadow-slate-600">
          <h1 className="font-semibold text-xl text-center my-1.5">
            Your Profile
          </h1>
          <div className="flex h-[137px]">
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
                <span className="material-symbols-outlined absolute top-1 left-14 text-blue-700">
                  receipt_long
                </span>
                Total Spend
              </li>
              <li className="profileBar" onClick={() => handleNavBar("kedua")}>
                {" "}
                <span className="material-symbols-outlined absolute top-1 right-[185px] text-blue-700">
                  payments
                </span>
                Pay Later
              </li>
              <li className="profileBar" onClick={() => handleNavBar("ketiga")}>
                <span className="material-symbols-outlined absolute top-1 right-[54px] text-blue-700">
                  wallet
                </span>{" "}
                E-Wallet
              </li>
            </ul>
          </div>
          <div className="overflow-auto">
            {bar === "kedua" ? (
              <div>Total paylater you</div>
            ) : bar === "ketiga" ? (
              <div>Total wallet You</div>
            ) : (
              <AllProductBuy displayPrice={displayPrice} />
            )}
          </div>
          <div className="text-center mt-2">
            <Link className="bg-slate-300 px-3 py-1 rounded-lg" to="/products">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
