export default function FormButton(props) {
  const { textButton } = props;
  return (
    <div className="mt-5 text-center">
      <button className="bg-blue-400 py-1.5 rounded-lg hover:bg-blue-500 w-full">
        {textButton}
      </button>
    </div>
  );
}
