import BookingsTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

function Bookings() {
  return (
    <div className="pb-16">
      <div className="flex justify-between items-center mb-7 text-neutral-600">
        <h1 className="text-3xl font-semibold dark:text-gray-100">
          All bookings
        </h1>
        <BookingTableOperations />
      </div>
      <BookingsTable />
    </div>
  );
}

export default Bookings;
