import { useState } from "react";
import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

function UpdateUserDataForm() {
  const { user } = useUser();
  const [fullName, setFullName] = useState(user.user_metadata.fullName);
  const [avatar, setAvatar] = useState(null);
  const { updateUser, isLoading } = useUpdateUser();

  function handleSubmit(e) {
    e.preventDefault();

    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white py-4 divide-y px-8 flex flex-col text-sm font-medium drop-shadow dark:text-gray-100 dark:bg-gray-800 dark:divide-gray-900 dark:border-gray-700 dark:border "
    >
      <div className="flex h-16 items-center ">
        <label className="w-60">Email address</label>
        <input
          defaultValue={user.email}
          disabled
          className="font-normal border w-[20rem] h-9 rounded-md border-neutral-300 pl-2  outline-none focus:border-indigo-600 focus:border-2 disabled:opacity-60 dark:bg-gray-800 dark:border-gray-600"
        />
      </div>

      <div className="flex h-16 items-center ">
        <label htmlFor="fullName" className="w-60">
          Full name
        </label>
        <input
          disabled={isLoading}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          className="font-normal border w-[20rem] h-9 rounded-md border-neutral-300 pl-2  outline-none focus:border-indigo-600 focus:border-2 disabled:opacity-60 dark:bg-gray-800 dark:border-gray-600"
        />
      </div>

      <div className="flex h-16 items-center ">
        <label htmlFor="image" className="w-60">
          Avatar image
        </label>
        <input
          disabled={isLoading}
          onChange={(e) => setAvatar(e.target.files[0])}
          id="image"
          type="file"
          accept="image/*"
          className="font-normal w-[25rem] h-9 rounded-md border-neutral-300 outline-none focus:border-indigo-600 focus:border-2 file:bg-indigo-500 file:text-neutral-50 file:px-3 file:outline-none file:border-0 file:rounded file:cursor-pointer file:hover:bg-indigo-600 file:py-2 file:mr-3 file:transition file:disabled:opacity-60"
        />
      </div>

      <div className="flex justify-end items-center gap-3 pt-4">
        <button
          disabled={isLoading}
          type="reset"
          className="py-3.5 px-4 border hover:bg-gray-100 transition rounded hover:dark:bg-gray-900 dark:border-gray-700"
        >
          Cancel
        </button>
        <button
          disabled={isLoading}
          type="submit"
          className="bg-indigo-500 text-slate-50 text-sm font-semibold py-3.5 rounded-md hover:bg-indigo-600 transition w-[10rem] "
        >
          Update account
        </button>
      </div>
    </form>
  );
}

export default UpdateUserDataForm;
