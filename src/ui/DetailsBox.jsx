import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";
import { formatCurrency, formatDistanceFromNow } from "../utils/helpers";
import { format, isToday } from "date-fns";

function DetailsBox({ booking }) {
  return (
    <>
      <header className="flex justify-between h-20 rounded-t p-4 items-center bg-indigo-500 text-gray-200 text-lg px-10">
        <div className="flex items-center  gap-4">
          <HiOutlineHomeModern
            className="transition-colors duration-300"
            size={32}
          />
          <span className="font-semibold">
            {booking.numNights} nights in Cabin{" "}
            <span className="font-[Sono] text-xl ml-2">
              {booking.cabins.name}
            </span>
          </span>
        </div>
        <p className="font-medium">
          {format(new Date(booking.startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(booking.startDate))
            ? "Today"
            : formatDistanceFromNow(booking.startDate)}
          ) &mdash; {format(new Date(booking.endDate), "EEE, MMM dd yyyy")}
        </p>
      </header>
      <main className="bg-white h-content dark:text-gray-100 dark:bg-gray-800 rounded-b px-10 py-8">
        <div className="flex gap-2">
          <img
            className="h-6 w-6"
            src={booking.guests.countryFlag}
            alt={`${booking.guests.nationality} flag`}
          />
          <p className="font-medium">
            {booking.guests.fullName}{" "}
            {booking.numGuests > 1 ? `+ ${booking.numGuests - 1} guests` : ""}
          </p>
          <span>&bull;</span>
          <p className="opacity-80">{booking.guests.email}</p>
          <span>&bull;</span>
          <p className="opacity-80">National ID {booking.guests.nationalID}</p>
        </div>
        {booking.observations && (
          <div className="mt-6 flex gap-2 items-center">
            <span>
              <HiOutlineChatBubbleBottomCenterText size={20} color="#7e22ce" />
            </span>
            <span className="font-medium">Observations</span>
            <span className="ml-4">{booking.observations}</span>
          </div>
        )}
        <div className="flex mt-4 gap-2">
          <span>
            <HiOutlineCheckCircle size={20} color="7e22ce" />
          </span>
          <span className="font-medium">Breakfast included?</span>
          <span className="ml-2">
            {booking.hasBreakfast === true ? "Yes" : "No"}
          </span>
        </div>
        <div
          className={`${
            booking.isPaid
              ? "dark:bg-green-800 dark:text-gray-100 bg-green-300 text-green-800 bg-opacity-60"
              : "dark:bg-yellow-900 dark:text-yellow-200 bg-yellow-300 text-yellow-800 bg-opacity-60"
          } flex mt-6 items-center h-16  px-8  justify-between rounded`}
        >
          <div className="flex gap-2 items-center">
            <span>
              <HiOutlineCurrencyDollar size={24} />
            </span>
            <span className=" font-medium ">Total price</span>
            <span className="ml-3 ">
              {formatCurrency(booking.totalPrice)}
              {booking.hasBreakfast && (
                <span className="ml-2">
                  ({formatCurrency(booking.cabinPrice)} cabin + {``}
                  {formatCurrency(booking.extrasPrice)} breakfast)
                </span>
              )}
            </span>
          </div>
          <p className=" font-medium">
            {booking.isPaid ? "Paid" : "Will pay at property"}
          </p>
        </div>
        <p className="text-end mt-6 text-xs">
          Booked {format(new Date(booking.created_at), "EEE, MMM dd yyyy, p")}
        </p>
      </main>
    </>
  );
}

export default DetailsBox;
