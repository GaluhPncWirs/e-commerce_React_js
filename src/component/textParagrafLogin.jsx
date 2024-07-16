export default function TextLogin(props) {
  const { textForm, isFocus, childern, darkMode } = props;
  return (
    <p
      className={`absolute ml-4 ${
        textForm === "Username" ? `top-3` : `bottom-4`
      } transition-all duration-200 ${
        (isFocus || childern !== "") && "-translate-y-6 scale-90 z-50 px-3"
      } ${
        darkMode === true ? `bg-slate-700 text-white` : `bg-blue-300 text-black`
      }`}
    >
      {textForm}
    </p>
  );
}
