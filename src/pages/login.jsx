import FormInputUserLogin from "../fragment/allUserLoginForm";
import LayoutForm from "../layout/authLayout";

export default function Login() {
  return (
    <div className="flex justify-center items-center bg-blue-300 h-screen">
      <LayoutForm title="Login" desc="Please Enter Your Account" type="login">
        <FormInputUserLogin />
      </LayoutForm>
    </div>
  );
}
