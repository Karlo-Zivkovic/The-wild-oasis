import LoginForm from "../features/authentication/LoginForm";

function Login() {
  return (
    <div>
      <img src="/logo-light.png" alt="logo" className="mt-28 h-24 mx-auto" />
      <h1 className="text-center mt-10 text-3xl font-semibold opacity-80">
        Login to your account
      </h1>
      <LoginForm />
    </div>
  );
}

export default Login;
