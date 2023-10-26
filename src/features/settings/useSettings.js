import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/settingsApi";

export function useSettings() {
  const {
    data: settings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
  return { isLoading, error, settings };
}
