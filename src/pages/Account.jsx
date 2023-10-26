import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";

function Account() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-10">Update your account</h1>
      <p className="text-xl font-medium mb-6">Update user data</p>

      <UpdateUserDataForm />
      <p className="text-xl font-medium mt-10 mb-4">Update user data</p>
      <UpdatePasswordForm />
    </>
  );
}

export default Account;
