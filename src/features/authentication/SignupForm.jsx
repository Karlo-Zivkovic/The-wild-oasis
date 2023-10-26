import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, reset, formState, handleSubmit, getValues } = useForm();

  const { errors } = formState;
  function onSubmit({ email, fullName, password }) {
    signup({ email, fullName, password }, { onSettled: () => reset() });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white py-4 dark:divide-gray-900 divide-y px-8 flex flex-col text-sm font-medium drop-shadow dark:bg-gray-800 rounded dark:border-gray-700 border dark:text-gray-100"
    >
      <div className="flex h-16 items-center ">
        <label htmlFor="fullName" className="w-60">
          Full name
        </label>
        <input
          disabled={isLoading}
          id="fullName"
          type="text"
          {...register("fullName", { required: "This field is required" })}
          className="dark:bg-gray-800 dark:border-gray-600 font-normal border w-[20rem] h-9 rounded-md border-neutral-300 pl-2  outline-none focus:border-indigo-600 focus:border-2 disabled:opacity-60"
        />
        {errors && (
          <p className="pl-6 text-xs text-red-500">
            {errors?.fullName?.message}
          </p>
        )}
      </div>

      <div className="flex h-16 items-center ">
        <label htmlFor="email" className="w-60">
          Email address
        </label>
        <input
          disabled={isLoading}
          id="email"
          type="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
          className="dark:bg-gray-800 dark:border-gray-600  font-normal border w-[20rem] h-9 rounded-md border-neutral-300 pl-2  outline-none focus:border-indigo-600 focus:border-2 disabled:opacity-60"
        />
        {errors && (
          <p className="pl-6 text-xs text-red-500">{errors?.email?.message}</p>
        )}
      </div>

      <div className="flex h-16 items-center ">
        <label htmlFor="password" className="w-60">
          Password (min 8 characters)
        </label>
        <input
          disabled={isLoading}
          id="password"
          type="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
          className="dark:bg-gray-800 dark:border-gray-600 font-normal border w-[20rem] h-9 rounded-md border-neutral-300 pl-2  outline-none focus:border-indigo-600 focus:border-2 disabled:opacity-60"
        />
        {errors && (
          <p className="pl-6 text-xs text-red-500">
            {errors?.password?.message}
          </p>
        )}
      </div>

      <div className="flex h-16 items-center ">
        <label htmlFor="passwordConfirm" className="w-60">
          Repeat password
        </label>
        <input
          disabled={isLoading}
          id="passwordConfirm"
          type="password"
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
          className="dark:bg-gray-800 dark:border-gray-600  font-normal border w-[20rem] h-9 rounded-md border-neutral-300 pl-2  outline-none focus:border-indigo-600 focus:border-2 disabled:opacity-60"
        />
        {errors && (
          <p className="pl-6 text-xs text-red-500">
            {errors?.passwordConfirm?.message}
          </p>
        )}
      </div>
      <div className="flex justify-end items-center gap-3 pt-4">
        <button
          disabled={isLoading}
          type="reset"
          className="dark:border-gray-600 dark:hover:bg-gray-900 py-3.5 px-4 border hover:bg-gray-100 transition rounded"
        >
          Cancel
        </button>
        <button
          disabled={isLoading}
          type="submit"
          className="bg-indigo-500 text-slate-50 text-sm font-semibold py-3.5 rounded-md hover:bg-indigo-600 transition w-[10rem] "
        >
          Create new user
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
