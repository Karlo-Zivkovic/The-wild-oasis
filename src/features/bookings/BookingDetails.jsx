import Spinner from "../../ui/Spinner";
import { useBooking } from "./useBooking";

import { useNavigate } from "react-router-dom";
import DetailsBox from "../../ui/DetailsBox";
import { useCheckout } from "../Check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Empty from "../../ui/Empty";

function BookingDetails() {
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const navigate = useNavigate();
  const { booking, isLoading } = useBooking();

  if (isLoading) return <Spinner />;
  if (!booking) return <Empty resource="booking" />;

  const statusStyles = {
    "checked-in":
      "dark:bg-green-800 dark:text-gray-100 bg-green-300 text-green-800 bg-opacity-60",
    unconfirmed:
      "dark:bg-sky-900 dark:text-gray-100 bg-blue-300 text-blue-800 bg-opacity-60",
    "checked-out":
      "dark:text-gray-100 dark:bg-gray-600 bg-gray-300 text-gray-800 bg-opacity-60",
  };

  return (
    <div className="h-[100vh]">
      <div className="flex flex-col gap-8 drop-shadow dark:text-gray-100">
        <div className="flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <h1 className="text-3xl font-semibold">Booking #{booking.id}</h1>{" "}
            <span
              className={`text-xs font-semibold text-opacity-80 px-2 py-1 uppercase rounded-full ${
                statusStyles[booking.status]
              } `}
            >
              {booking.status}
            </span>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="text-indigo-500 hover:text-indigo-600 active:translate-y-0.5"
          >
            &larr; Back
          </button>
        </div>
        <div>
          <DetailsBox booking={booking} />
        </div>
      </div>
      {booking.status === "unconfirmed" && (
        <div className="flex items-center gap-4 justify-end mt-6">
          <Modal>
            <Modal.Open opens="delete">
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 text-sm font-semibold rounded disabled:cursor-not-allowed active:translate-y-0.5 active:drop-shadow-md transition-all">
                Delete Booking
              </button>
            </Modal.Open>
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="booking"
                disabled={isDeleting}
                onDelete={() =>
                  deleteBooking(booking.id, { onSettled: () => navigate(-1) })
                }
              />
            </Modal.Window>
          </Modal>
          <button
            onClick={() => navigate(`/checkin/${booking.id}`)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 text-sm font-semibold rounded disabled:cursor-not-allowed active:translate-y-0.5 active:drop-shadow-md transition-all"
          >
            Check in
          </button>
        </div>
      )}
      {booking.status === "checked-in" && (
        <div className="flex justify-end mt-6">
          <button
            disabled={isCheckingOut}
            onClick={() => checkout(booking.id)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 text-sm font-semibold rounded disabled:cursor-not-allowed active:translate-y-0.5 active:drop-shadow-md"
          >
            Check out
          </button>
        </div>
      )}
    </div>
  );
}
export default BookingDetails;
