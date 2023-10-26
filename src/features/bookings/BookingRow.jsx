import { isToday } from "date-fns";
import {
  formatCurrency,
  formatDate,
  formatDistanceFromNow,
} from "../../utils/helpers";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiOutlineTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../Check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const { checkout, isCheckingOut } = useCheckout();
  const navigate = useNavigate();
  const statusStyles = {
    "checked-in":
      " dark:bg-green-800 dark:text-gray-100 bg-green-300 text-green-800 bg-opacity-60",
    unconfirmed:
      "dark:bg-sky-900 dark:text-gray-100 bg-blue-300 text-blue-800 bg-opacity-60",
    "checked-out":
      "dark:text-gray-100 dark:bg-gray-600 bg-gray-300 text-gray-800 bg-opacity-60",
  };
  return (
    <div className=" grid grid-cols-[0.7fr_1.3fr_1.4fr_1fr_1fr] items-center text-sm bg-white h-20 px-4 py-3 dark:bg-gray-800">
      <span className="pl-4 font-[sono] text-base font-semibold dark:text-gray-100">
        {cabinName}
      </span>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium dark:text-gray-100">
          {guestName}
        </span>
        <span className="text-xs opacity-80 dark:text-gray-400">{email}</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium dark:text-gray-100">
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          &#10230; {`${numNights} nights stay`}
        </span>
        <span className="text-xs opacity-80 dark:text-gray-400">{`${formatDate(
          startDate
        )} - ${formatDate(endDate)}`}</span>
      </div>
      <div>
        <span
          className={` text-xs font-semibold text-opacity-80 px-2 py-1 uppercase rounded-full ${statusStyles[status]} `}
        >
          {status}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-[sono] dark:text-gray-100 text-sm font-medium ">
          {formatCurrency(totalPrice)}
        </span>
        <div className="flex flex-col gap-1 dark:text-gray-100  ">
          <button
            onClick={() => navigate(`/bookings/${bookingId}`)}
            className="bg-gray-200 rounded px-2 hover:bg-gray-300 flex items-center gap-2 text-xs dark:bg-gray-900"
          >
            <span>{<HiEye />}</span>
            <span>See details</span>
          </button>
          {status === "unconfirmed" && (
            <button
              onClick={() => navigate(`/checkin/${bookingId}`)}
              className="dark:bg-gray-900 bg-gray-200 rounded px-2 hover:bg-gray-300 flex items-center gap-2 text-xs"
            >
              <span>{<HiArrowDownOnSquare />}</span>
              <span>Check in</span>
            </button>
          )}
          {status === "checked-in" && (
            <button
              disabled={isCheckingOut}
              onClick={() => checkout(bookingId)}
              className="dark:bg-gray-900 bg-gray-200 rounded px-2  hover:bg-gray-300 flex items-center gap-2 text-xs"
            >
              <span>{<HiArrowUpOnSquare />}</span>
              <span>Check out</span>
            </button>
          )}
          <Modal>
            <Modal.Open opens="delete">
              <button
                disabled={isDeleting}
                className="bg-gray-200 rounded px-2 dark:bg-gray-900 hover:bg-gray-300 flex items-center gap-2 text-xs"
              >
                <span>{<HiOutlineTrash />}</span>
                <span>Delete</span>
              </button>
            </Modal.Open>
            <Modal.Window name="delete">
              <ConfirmDelete
                onDelete={() => deleteBooking(bookingId)}
                resourceName="booking"
              />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default BookingRow;
