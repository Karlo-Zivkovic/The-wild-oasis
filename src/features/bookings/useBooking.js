import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/bookingsApi";
import { useParams } from "react-router-dom";

export function useBooking() {
  const param = useParams();
  const id = param.bookingId;
  const {
    data: booking,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["booking", id],
    queryFn: () => getBooking(id),
  });
  return { booking, isLoading, error, isError };
}
