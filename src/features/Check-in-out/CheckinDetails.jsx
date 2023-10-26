import { useNavigate } from "react-router-dom";
import DetailsBox from "../../ui/DetailsBox";
import Spinner from "../../ui/Spinner";
import { useBooking } from "../bookings/useBooking";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings";

function CheckinDetails() {
  const { checkin, isCheckingIn } = useCheckin();
  const { settings, isLoading } = useSettings();
  const [checked, setIsChecked] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const { booking, isLoading: isBooking } = useBooking();
  const navigate = useNavigate();

  const totalBreakfastPrice =
    settings?.breakfastPrice * booking?.numGuests * booking?.numNights;

  if (isLoading || isBooking || isCheckingIn) return <Spinner />;

  function handleClick() {
    if (!booking.hasBreakfast) {
      checkin({
        bookingId: booking.id,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: totalBreakfastPrice,
          totalPrice: booking.totalPrice + totalBreakfastPrice,
        },
      });
    } else {
      checkin({ bookingId: booking.id, breakfast: {} });
    }
  }
  return (
    <div className="h-[100vh]">
      <div className="flex flex-col gap-8 drop-shadow">
        <div className="flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <h1 className="dark:text-gray-100 text-3xl font-semibold">
              Check in booking #{booking.id}
            </h1>{" "}
          </div>
          <button
            onClick={() => navigate("/bookings")}
            className="text-indigo-500 hover:text-indigo-600 active:translate-y-0.5"
          >
            &larr; Back
          </button>
        </div>
        <div>
          <DetailsBox booking={booking} />
        </div>
      </div>
      {!booking.hasBreakfast && (
        <div className="dark:text-gray-100 dark:bg-gray-800 h-20 bg-white rounded mt-10 drop-shadow px-10 py-7 flex gap-6 ">
          <input
            type="checkbox"
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setIsChecked(false);
            }}
            className="h-6 w-6"
          />
          <p>
            Want to add breakfast for {formatCurrency(totalBreakfastPrice)}?
          </p>
        </div>
      )}

      <div className="dark:bg-gray-800 h-20 bg-white rounded mt-10 drop-shadow px-10 py-7 flex gap-6 ">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setIsChecked((checked) => !checked)}
          className="h-6 w-6"
        />
        <p className="dark:text-gray-100">
          I confirm that {booking.guests.fullName} has paid the total amount of{" "}
          {addBreakfast
            ? `${formatCurrency(
                booking.totalPrice + totalBreakfastPrice
              )} (${formatCurrency(booking.totalPrice)} + ${formatCurrency(
                totalBreakfastPrice
              )})`
            : formatCurrency(booking.totalPrice)}
        </p>
      </div>
      <div className="flex justify-end mt-8">
        <button
          onClick={handleClick}
          disabled={!checked}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-4 text-sm font-semibold rounded disabled:cursor-not-allowed active:translate-y-0.5 active:drop-shadow-md"
        >
          Check in booking #{booking.id}
        </button>
      </div>
    </div>
  );
}

export default CheckinDetails;
