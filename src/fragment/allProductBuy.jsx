export default function AllProductBuy(props) {
  const { displayProduk } = props;
  return (
    <div className="w-[90%] h-32 mx-auto pt-2">
      <div>
        <h1 className="font-semibold text-lg">Your History :</h1>
        <div>
          <ul className="list-decimal ml-4">
            {displayProduk.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
