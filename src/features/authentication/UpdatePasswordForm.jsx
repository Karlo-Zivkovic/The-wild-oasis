import { useForm } from "react-hook-form";
import { useUpdateUser } from "./useUpdateUser";
import { useUser } from "./useUser";

function UpdatePasswordForm() {
  const { updateUser, isLoading } = useUpdateUser();
  const { user } = useUser();
  const { register, formState, handleSubmit, getValues, reset } = useForm();
  console.log(user);
  const { errors } = formState;

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: () => reset() });
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white py-4 divide-y px-8 flex flex-col text-sm font-medium drop-shadow"
    >
      <div className="flex h-16 items-center ">
        <label htmlFor="password" className="w-60">
          New password (min 8 chars)
        </label>
        <input
          disabled={isLoading}
          type="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Please input minimum of 8 characters",
            },
          })}
          id="password"
          className="font-normal border w-[20rem] h-9 rounded-md border-neutral-300 pl-2  outline-none focus:border-indigo-600 focus:border-2 disabled:opacity-60"
        />
        {errors && (
          <p className="pl-6 text-xs text-red-500">
            {errors?.password?.message}
          </p>
        )}
      </div>

      <div className="flex h-16 items-center ">
        <label htmlFor="passwordConfirm" className="w-60">
          Confirm password
        </label>
        <input
          type="password"
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
          disabled={isLoading}
          id="passwordConfirm"
          className="font-normal border w-[20rem] h-9 rounded-md border-neutral-300 pl-2  outline-none focus:border-indigo-600 focus:border-2 disabled:opacity-60"
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
          className="py-3.5 px-4 border hover:bg-gray-100 transition rounded"
        >
          Cancel
        </button>
        <button
          disabled={isLoading}
          type="submit"
          className="bg-indigo-500 text-slate-50 text-sm font-semibold py-3.5 rounded-md hover:bg-indigo-600 transition w-[10rem] "
        >
          Update password
        </button>
      </div>
    </form>
  );
}

export default UpdatePasswordForm;
