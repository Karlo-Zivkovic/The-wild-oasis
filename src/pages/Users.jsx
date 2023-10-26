import SignupForm from "../features/authentication/SignupForm";

function Users() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-10 dark:text-gray-100">
        Create a new user
      </h1>
      <SignupForm />
    </div>
  );
}

export default Users;
