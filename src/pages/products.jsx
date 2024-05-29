import reusableBag from "../assets/reusable-bag.jpg";
export default function Products() {
  return (
    <div className="w-[95%] mx-auto">
      <div className="flex basis-2/3 justify-between min-h-screen">
        <div className="w-full bg-slate-400">
          <div className="flex">
            <div className=" bg-gray-200 max-w-sm">
              <h1 className="text-center">Reusable Totebag recycle</h1>
              <div className="bg-slate-300 flex justify-center items-center">
                <img src={reusableBag} alt="" className="w-2/6 " />
              </div>
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugiat voluptates temporibus debitis vitae architecto quas
                  quia deserunt voluptatum enim, labore odit eaque! Voluptatibus
                  placeat ratione a suscipit cumque explicabo minus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/3">
          <h1>hallo</h1>
        </div>
      </div>
    </div>
  );
}
