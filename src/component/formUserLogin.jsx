import { forwardRef } from "react";

export default forwardRef(function FormUser(props, ref) {
  const { type, value, onBlur, onChange, onFocus, darkMode } = props;
  return (
    <input
      type={type}
      className={`focus:inputUser inputForm bg-blue-300 ${
        darkMode && `bg-slate-700`
      }`}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      ref={ref}
    />
  );
});
