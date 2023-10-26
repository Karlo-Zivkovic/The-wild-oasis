import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/cabinsApi";

export function useCabins() {
  const {
    data: cabins,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  return { cabins, isLoading, error, isError };
}
