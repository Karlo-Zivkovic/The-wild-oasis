import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";

function Account() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-10 dark:text-gray-100">
        Update your account
      </h1>
      <p className="dark:text-gray-100 text-xl font-medium mb-6">
        Update user data
      </p>

      <UpdateUserDataForm />
      <p className="dark:text-gray-100 text-xl font-medium mt-10 mb-4">
        Update password
      </p>
      <UpdatePasswordForm />
    </>
  );
}

export default Account;
