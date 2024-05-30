export default function FormButton({ children }) {
  return (
    <div className="mt-5 text-center">
      <button
        className="bg-blue-400 py-1.5 rounded-lg hover:bg-blue-500 w-full"
        type="submit"
      >
        {children}
      </button>
    </div>
  );
}
