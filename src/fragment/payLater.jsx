export default function PayLater(props) {
  const { displayPrice } = props;
  return (
    <div className="w-[90%] h-32 mx-auto pt-2">
      <div>
        <h1 className="font-semibold text-lg">Total Pay Later :</h1>
        <div>
          {displayPrice.toLocaleString("id-ID", {
            style: "currency",
            currency: "USD",
          })}
        </div>
      </div>
    </div>
  );
}
