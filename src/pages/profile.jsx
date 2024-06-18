import { Link } from "react-router-dom";
import Navbar from "../fragment/navbar";
import { useLogin } from "../hooks/useLogin";

export default function ProfileUser() {
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
          <div className="bg-blue-300">
            <ul className="flex justify-around font-semibold pt-8 pb-2 relative">
              <li className="cursor-pointer">
                <span className="material-symbols-outlined absolute top-1.5 left-16 text-blue-700">
                  receipt_long
                </span>
                Total Spend
              </li>
              <li className="cursor-pointer">
                {" "}
                <span className="material-symbols-outlined absolute top-1.5 right-[173px] text-blue-700">
                  payments
                </span>
                Pay Later
              </li>
              <li className="cursor-pointer">
                <span className="material-symbols-outlined absolute top-1.5 right-12 text-blue-700">
                  wallet
                </span>{" "}
                E-Wallet
              </li>
            </ul>
          </div>
          {/* <div className="text-center">
            <Link className="bg-slate-300 px-3 py-1 rounded-lg" to="/products">
              Back
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
