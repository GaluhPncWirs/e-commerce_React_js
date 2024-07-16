export default function FormButton({ children, darkMode }) {
  return (
    <div className="mt-5 text-center">
      <button
        className={`bg-blue-400 py-1.5 rounded-lg hover:bg-blue-500 w-full ${
          darkMode && `bg-blue-300 hover:bg-blue-400 text-white`
        }`}
        type="submit"
      >
        {children}
      </button>
    </div>
  );
}
