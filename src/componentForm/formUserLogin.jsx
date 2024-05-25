export default function FormUser(props) {
  const { type, value, onBlur, onChange, onFocus } = props;
  return (
    <input
      type={type}
      className={`focus:inputUser inputForm ${type === "password" && `pr-3`}`}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
    />
  );
}
