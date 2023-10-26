import { useSettings } from "./useSettings";
import Spinner from "../../ui/Spinner";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const {
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
    isLoading,
  } = useSettings();

  const { updateSetting, isUpdating } = useUpdateSetting();

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [field]: value });
  }
  if (isLoading)
    return (
      <div className="ml-[45%] mt-[10rem]">
        <Spinner />
      </div>
    );

  return (
    <form className="dark:bg-gray-800 dark:text-gray-100 bg-white py-4 divide-y px-8 flex flex-col text-sm font-medium drop-shadow border dark:divide-gray-900 dark:border-gray-700">
      <div className="flex h-16 items-center ">
        <label className="w-60">Minimum nights/booking</label>
        <input
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
          defaultValue={minBookingLength}
          type="number"
          className="font-normal border w-[20rem] h-9 rounded-md border-neutral-300 pl-2  outline-none focus:border-indigo-600 focus:border-2 disabled:opacity-60 dark:bg-gray-800 dark:border-gray-600"
        />
      </div>

      <div className="flex h-16 items-center ">
        <label className="w-60">Maximum nights/booking</label>
        <input
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
          defaultValue={maxBookingLength}
          type="number"
          className="font-normal border w-[20rem] h-9 rounded-md border-neutral-300 pl-2  outline-none focus:border-indigo-600 focus:border-2 disabled:opacity-60 dark:bg-gray-800 dark:border-gray-600"
        />
      </div>

      <div className="flex h-16 items-center ">
        <label className="w-60">Maximum guests/booking</label>
        <input
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
          defaultValue={maxGuestsPerBooking}
          type="number"
          className="font-normal border w-[20rem] h-9 rounded-md border-neutral-300 pl-2  outline-none focus:border-indigo-600 focus:border-2 disabled:opacity-60 dark:bg-gray-800 dark:border-gray-600"
        />
      </div>

      <div className="flex h-16 items-center ">
        <label className="w-60">Breakfast price</label>
        <input
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
          defaultValue={breakfastPrice}
          type="number"
          className="font-normal border w-[20rem] h-9 rounded-md border-neutral-300 pl-2  outline-none focus:border-indigo-600 focus:border-2 disabled:opacity-60 dark:bg-gray-800 dark:border-gray-600"
        />
      </div>
    </form>
  );
}

export default UpdateSettingsForm;
