import { Link } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <li className="grid grid-cols-[1fr_0.5fr_1.5fr_1fr_1fr]  text-sm items-center py-2.5  border-b">
      {status === "unconfirmed" && (
        <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full w-fit">
          Arriving
        </span>
      )}
      {status === "checked-in" && (
        <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full w-fit">
          Departing
        </span>
      )}
      <img
        className="w-6"
        src={guests.countryFlag}
        alt={`Flag of ${guests.contry}`}
      />
      <div className="text-sm font-medium">{guests.fullName}</div>
      <div className="justify-self-center ">{numNights} nights</div>
      {status === "unconfirmed" && (
        <Link
          className="text-center w-24 py-0.5 rounded bg-indigo-500 text-white active:drop-shadow-md active:translate-y-[1px] hover:bg-indigo-600"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Link>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </li>
  );
}

export default TodayItem;
