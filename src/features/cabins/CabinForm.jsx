import { useForm } from "react-hook-form";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CabinForm({ cabin = {}, editMode = false, onCloseModal }) {
  const { createCabin, isCreating } = useCreateCabin();
  const { editCabin, isEditing } = useEditCabin();
  const { register, handleSubmit, formState, getValues, reset } = useForm({
    defaultValues: editMode ? cabin : {},
  });
  const { errors } = formState;
  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    if (editMode) {
      editCabin(data);
      onCloseModal();
    } else
      createCabin(data, {
        onSuccess: () => {
          onCloseModal();
          reset();
        },
      });
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="dark:bg-gray-800 bg-white py-4 dark:divide-gray-900 divide-y px-8 flex flex-col text-sm font-medium w-[62rem]"
    >
      <div className=" flex h-16 items-center ">
        <label htmlFor="name" className="w-60">
          Cabin name
        </label>
        <input
          type="text"
          id="name"
          disabled={isWorking}
          className="font-normal border w-[25rem] h-9 rounded-md border-neutral-300 pl-2  outline-none focus:border-indigo-600 focus:border-2 disabled:opacity-60 dark:bg-gray-800 dark:border-gray-600"
          {...register("name", { required: "This field is required" })}
        />
        {errors && (
          <p className="pl-6 text-xs text-red-500">{errors?.name?.message}</p>
        )}
      </div>

      <div className="flex h-16 items-center ">
        <label htmlFor="maxCapacity" className="w-60">
          Maximum capacity
        </label>
        <input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          className="font-normal border w-[25rem] h-9 rounded-md border-neutral-300 pl-2  outline-none focus:border-indigo-600 focus:border-2 disabled:opacity-60 dark:bg-gray-800 dark:border-gray-600"
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
        {errors && (
          <p className="pl-6 text-xs text-red-500">
            {errors?.maxCapacity?.message}
          </p>
        )}
      </div>

      <div className="flex h-16 items-center ">
        <label htmlFor="regularPrice" className="w-60">
          Regular Price
        </label>
        <input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          className="font-normal border w-[25rem] h-9 rounded-md border-neutral-300 pl-2  outline-none focus:border-indigo-600 focus:border-2 disabled:opacity-60 dark:bg-gray-800 dark:border-gray-600"
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
        {errors && (
          <p className="pl-6 text-xs text-red-500">
            {errors?.regularPrice?.message}
          </p>
        )}
      </div>

      <div className="flex h-16 items-center ">
        <label htmlFor="discount" className="w-60">
          Discount
        </label>
        <input
          type="number"
          defaultValue={0}
          disabled={isWorking}
          id="discount"
          className="font-normal border w-[25rem] h-9 rounded-md border-neutral-300 pl-2  outline-none focus:border-indigo-600 focus:border-2 disabled:opacity-60 dark:bg-gray-800 dark:border-gray-600"
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
        />
        {errors && (
          <p className="pl-6 text-xs text-red-500">
            {errors?.discount?.message}
          </p>
        )}
      </div>

      <div className="flex h-24 items-center ">
        <label htmlFor="description" className="w-60">
          Description
        </label>
        <textarea
          id="description"
          rows={3}
          disabled={isWorking}
          className="font-normal border w-[25rem]  rounded-md border-neutral-300 p-2  outline-none focus:border-indigo-600 focus:border-2 disabled:opacity-60 dark:bg-gray-800 dark:border-gray-600"
          {...register("description", { required: "This field is required" })}
        />
        {errors && (
          <p className="pl-6 text-xs text-red-500">
            {errors?.description?.message}
          </p>
        )}
      </div>

      <div className="flex h-16 items-center  ">
        <label htmlFor="image" className="w-60">
          Image
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          disabled={isWorking}
          className="font-normal w-[25rem] h-9 rounded-md border-neutral-300 outline-none focus:border-indigo-600 focus:border-2 file:bg-indigo-500 file:text-neutral-50 file:px-3 file:outline-none file:border-0 file:rounded file:cursor-pointer file:hover:bg-indigo-600 file:py-2 file:mr-3 file:transition file:disabled:opacity-60"
          {...register("image", {
            required: editMode ? false : "This field is required",
          })}
        />
      </div>
      <div className="flex gap-4 pt-4 justify-end ">
        <button
          onClick={onCloseModal}
          type="reset"
          className="py-3 px-4 border hover:bg-gray-100 transition rounded dark:hover:bg-gray-900 dark:border-gray-500 "
        >
          Cancel
        </button>
        <button
          disabled={isWorking}
          className="px-3 py-2 rounded  bg-indigo-500 text-neutral-50 hover:bg-indigo-600 transition"
        >
          {editMode
            ? isEditing
              ? "Editing"
              : "Edit cabin"
            : isCreating
            ? "Creating..."
            : "Create new cabin"}
        </button>
      </div>
    </form>
  );
}

export default CabinForm;
