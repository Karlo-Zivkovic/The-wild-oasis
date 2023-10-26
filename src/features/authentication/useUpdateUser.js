import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../../services/authApi";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: ({ fullName, avatar, password }) =>
      updateUserApi({ fullName, avatar, password }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("User successfully updated");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateUser, isLoading };
}
