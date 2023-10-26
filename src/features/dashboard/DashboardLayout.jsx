import { useRecentBookings } from "../dashboard/useRecentBookings";
import { useRecentStays } from "../dashboard/useRecentStays";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../Check-in-out/TodayActivity";

function DashboardLayout() {
  const { bookings, isLoading } = useRecentBookings();
  const { confirmedStays, isLoading: isLoading1, numDays } = useRecentStays();
  const { cabins, isLoading: isLoading2 } = useCabins();

  if (isLoading || isLoading1 || isLoading2)
    return (
      <div className="ml-[45%] mt-[10rem]">
        <Spinner />
      </div>
    );

  return (
    <div className="grid grid-cols-4 grid-rows-[1fr_none  _1fr] gap-[2.4rem] pb-16">
      <Stats
        bookings={bookings}
        numDays={numDays}
        cabinCount={cabins.length}
        confirmedStays={confirmedStays}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />

      <SalesChart bookings={bookings} numDays={numDays} />
    </div>
  );
}

export default DashboardLayout;
