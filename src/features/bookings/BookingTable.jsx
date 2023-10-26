import Error from "../../ui/Error";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import BookingRow from "./BookingRow";
import { useBookings } from "./useBookings";
import Pagination from "../../ui/Pagination";

function BookingsTable() {
  const { bookings, isLoading, error, count } = useBookings();

  if (isLoading)
    return (
      <div className="ml-[45%] mt-[10rem]">
        <Spinner />
      </div>
    );

  if (!bookings.length) return <Error>{error?.message}</Error>;

  return (
    <Table>
      <Table.Header grid={"bookings"}>
        <span className="pl-4">CABIN</span>
        <span>GUEST</span>
        <span>DATES</span>
        <span>STATUS</span>
        <span>AMOUNT</span>
      </Table.Header>
      <Table.Body
        data={bookings}
        render={(booking) => <BookingRow key={booking.id} booking={booking} />}
      />
      <Table.Footer count={count}>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
}

export default BookingsTable;
