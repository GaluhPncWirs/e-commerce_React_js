import { Link } from "react-router-dom";

export default function LayoutForm(props) {
  const { children, title, desc, type } = props;
  return (
    <div className="w-full max-w-sm">
      <h1 className="text-blue-700 font-bold text-4xl mb-5">{title}</h1>
      <p>{desc}</p>
      {children}
      <p className="text-sm">
        {type === "login"
          ? "Don't have an account ?"
          : "Already have an account ?"}
        <Link className="formButton" to={type === "login" ? "/register" : "/"}>
          {type === "login" ? "Sign Up" : "Login"}
        </Link>
      </p>
    </div>
  );
}
