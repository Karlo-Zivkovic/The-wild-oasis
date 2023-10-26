import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/bookingsApi";

export function useTodayActivity() {
  const { isLoading, data: activities } = useQuery({
    queryKey: ["today-activity"],
    queryFn: getStaysTodayActivity,
  });
  return { activities, isLoading };
}
