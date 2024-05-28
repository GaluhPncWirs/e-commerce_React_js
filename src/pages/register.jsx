import FormInputUserRegister from "../fragment/allUserRegisterForm";
import LayoutForm from "../layout/authLayout";

export default function Register() {
  return (
    <div className="flex justify-center items-center bg-blue-300 h-screen">
      <LayoutForm
        title="Register"
        desc="Welcome, Please Enter Your Detail for Create Account"
        type="register"
      >
        <FormInputUserRegister />
      </LayoutForm>
    </div>
  );
}
