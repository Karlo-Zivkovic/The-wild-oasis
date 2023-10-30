import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/authApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  createBookings,
  createCabins,
  createGuests,
  deleteBookings,
  deleteCabins,
  deleteGuests,
} from "../../data/cabins/Uploader";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: async (user) => {
      await deleteBookings();
      await deleteGuests();
      await deleteCabins();
      await createGuests();
      await createCabins();
      await createBookings();
      queryClient.setQueryData(["user"], user.user);

      navigate("/dashboard");
    },
    onError: (err) => {
      toast.error("Provided email or password are incorrect");
    },
  });
  return { login, isLoading };
}
