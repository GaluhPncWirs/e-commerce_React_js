import Navbar from "../fragment/navbar";
import { useLogin } from "../hooks/useLogin";

export default function ProfileUser() {
  return (
    <div>
      <Navbar />
      <div className="w-9/12 mx-auto h-screen flex justify-center items-center">
        <div className="w-2/5 bg-sky-600 h-80 shadow-md shadow-slate-600">
          <div className="flex h-[138px]">
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
        </div>
      </div>
    </div>
  );
}
