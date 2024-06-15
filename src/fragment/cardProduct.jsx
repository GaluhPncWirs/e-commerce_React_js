import { Link } from "react-router-dom";

export default function CardProduct(props) {
  const { children } = props;
  return (
    <div className="max-w-sm bg-neutral-700 rounded-lg py-5 text-white flex flex-col justify-between hover:bg-neutral-600">
      {children}
    </div>
  );
}

function Header(props) {
  const { title, image, id } = props;
  return (
    <div className="mx-1">
      <h1 className="text-center font-semibold text-lg mb-5">
        {title.substring(0, 30)}...
      </h1>
      <Link
        className="flex justify-center items-center mb-5"
        to={`/productDetail/${id}`}
      >
        <img src={image} className="w-[90%] h-60 rounded-2xl object-cover" />
      </Link>
    </div>
  );
}

function Body({ children }) {
  return (
    <div className="px-4 text-justify h-full">
      <p>{children.substring(0, 170)}...</p>
    </div>
  );
}

function Footer({ price, handleAddToCart, id }) {
  return (
    <div className="flex justify-between items-center mt-4 px-4">
      <h4 className="font-semibold text-xl tracking-wide">
        {price.toLocaleString("id-ID", { style: "currency", currency: "USD" })}
      </h4>
      <button
        className="bg-blue-500 rounded-md px-5 py-0.5 font-medium hover:bg-blue-600"
        onClick={() => handleAddToCart(id)}
      >
        Add To Cart
      </button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
