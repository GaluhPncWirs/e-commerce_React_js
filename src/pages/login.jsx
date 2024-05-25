import FormInputUserLogin from "../fragment/allUserLoginForm";
import LayoutForm from "../layout/authLayout";

export default function Login() {
  return (
    <LayoutForm title="Login" desc="Please Enter Your Account">
      <FormInputUserLogin />
    </LayoutForm>
  );
}
