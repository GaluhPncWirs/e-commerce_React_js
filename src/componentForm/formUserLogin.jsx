import { forwardRef } from "react";

export default forwardRef(function FormUser(props, ref) {
  const { type, value, onBlur, onChange, onFocus } = props;
  return (
    <input
      type={type}
      className={`focus:inputUser inputForm ${type === "password" && `pr-3`}`}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      ref={ref}
    />
  );
});
