import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/bookingsApi";
import { useSearchParams } from "react-router-dom";
import { RESULT_PER_PAGE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  const filteredValue = searchParams.get("status");
  const filter = filteredValue === "all" ? null : filteredValue;

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };
  // PAGINATION

  const page = Number(searchParams.get("page")) || 1;

  const {
    data: { bookings, count } = {},
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  const pageCount = Math.ceil(count / RESULT_PER_PAGE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });

  return { bookings, isLoading, error, isError, count };
}
