export default function AllProductBuy({ displayPrice }) {
  return (
    <div className="w-[90%] h-32 mx-auto pt-2">
      <div>
        <h1>
          Grand Total :{" "}
          {displayPrice.toLocaleString("id-ID", {
            style: "currency",
            currency: "USD",
          })}
        </h1>
      </div>
    </div>
  );
}
