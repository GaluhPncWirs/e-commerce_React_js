import FormInputUserRegister from "../fragment/allUserRegisterForm";
import LayoutForm from "../layout/authLayout";

export default function Register() {
  return (
    <LayoutForm
      title="Register"
      desc="Welcome, Please Enter Your Detail for Create Account"
    >
      <FormInputUserRegister />
    </LayoutForm>
  );
}
