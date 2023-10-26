import { useState } from "react";
import { useLogin } from "./useLogin";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[30rem] bg-white drop-shadow absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] h-[20rem] p-10 flex flex-col gap-6 text-sm"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="username" className="font-medium">
          Email adress
        </label>
        <input
          autoComplete="username"
          id="username"
          type="email"
          value={email}
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
          className="border h-10 rounded pl-3 focus:outline-indigo-500"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="font-medium">
          Password
        </label>
        <input
          disabled={isLoading}
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="focus:outline-indigo-500 border h-10 rounded pl-3"
        />
      </div>
      <button
        disabled={isLoading}
        className="bg-indigo-500 hover:bg-indigo-600 h-12 rounded mt-2 text-white text-base"
      >
        Log in
      </button>
    </form>
  );
}

export default LoginForm;
