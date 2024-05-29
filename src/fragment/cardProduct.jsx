export default function CardProduct(props) {
  const { children } = props;
  return (
    <div className="max-w-sm bg-neutral-700 rounded-lg py-5 text-white">
      {children}
    </div>
  );
}

function Header(props) {
  const { title, image } = props;
  return (
    <div>
      <h1 className="text-center font-semibold text-lg mb-5">{title}</h1>
      <div className="flex justify-center items-center mb-5">
        <img src={image} className="w-2/5 rounded-2xl" />
      </div>
    </div>
  );
}

function Body(props) {
  const { children } = props;
  return (
    <div className="px-4 text-justify">
      <p>{children}</p>
    </div>
  );
}

function Footer({ price }) {
  return (
    <div className="flex justify-between items-center mt-4 px-4">
      <h4 className="font-semibold text-xl tracking-wide">{price}</h4>
      <button className="bg-blue-500 rounded-md px-5 py-0.5 font-medium">
        Add To Cart
      </button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
