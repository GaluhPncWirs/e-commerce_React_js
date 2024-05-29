import CardProduct from "../fragment/cardProduct";
import reusableBag from "../../public/images/reusable-bag.jpg";

export default function Products() {
  return (
    <div className="w-[95%] mx-auto">
      <div className="flex basis-2/3 justify-between min-h-screen">
        <div className="w-full">
          <div className="flex flex-wrap mt-5 ml-5 gap-5">
            <CardProduct>
              <CardProduct.Header
                title="Reusable Totebag recycle"
                image={reusableBag}
              />
              <CardProduct.Body>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                voluptates temporibus debitis vitae architecto quas quia
                deserunt voluptatum enim, labore odit eaque! Voluptatibus
                placeat ratione a suscipit cumque explicabo minus.
              </CardProduct.Body>
              <CardProduct.Footer price="Rp. 1.000.000" />
            </CardProduct>

            <CardProduct>
              <CardProduct.Header title="Shoes Aliodas" image={reusableBag} />
              <CardProduct.Body>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                voluptates temporibus debitis vitae architecto quas quia
              </CardProduct.Body>
              <CardProduct.Footer price="Rp. 5.000.000" />
            </CardProduct>
          </div>
        </div>
        <div className="basis-1/3">
          <h1>hallo</h1>
        </div>
      </div>
    </div>
  );
}
