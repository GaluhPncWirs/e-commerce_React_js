export default function TextRegister(props) {
  const { textForm, isFocus, childern, id } = props;
  return (
    <p
      className={`absolute ml-4 ${
        textForm === "Full Name"
          ? `top-3`
          : textForm === "Username"
          ? `top-[87px]`
          : textForm === "Password"
          ? `bottom-[92px]`
          : `bottom-4`
      } transition-all duration-200 ${
        (isFocus || childern !== "") &&
        "-translate-y-6 scale-90 z-50 px-3 bg-blue-300"
      }`}
      htmlFor={id}
    >
      {textForm}
    </p>
  );
}
