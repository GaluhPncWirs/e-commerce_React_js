export default function TextLogin(props) {
  const { textForm, isFocus, childern } = props;
  return (
    <p
      className={`absolute ml-4 ${
        textForm === "Email" ? `top-3` : `bottom-4`
      } transition-all duration-200 ${
        (isFocus || childern !== "") &&
        "-translate-y-6 scale-90 z-50 px-3 bg-blue-300"
      }`}
    >
      {textForm}
    </p>
  );
}
