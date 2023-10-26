import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/authApi";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verify the new acount from the user's email address"
      );
    },
  });
  return { signup, isLoading };
}
