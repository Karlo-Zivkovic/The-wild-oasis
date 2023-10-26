import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <button onClick={logout} disabled={isLoading}>
      <HiArrowRightOnRectangle size={22} color="#4f46e5" />
    </button>
  );
}

export default Logout;
