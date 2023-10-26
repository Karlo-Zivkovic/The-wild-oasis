import { HiOutlineMoon, HiOutlineSun, HiOutlineUser } from "react-icons/hi2";
import Logout from "../features/authentication/Logout";
import User from "./User";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkModeContext";

function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();

  return (
    <div className="flex justify-end items-center px-20 border-b dark:border-b-gray-600 gap-4 dark:bg-gray-800 dark:text-gray-100 ">
      <User />
      <button onClick={() => navigate("/account")}>
        <HiOutlineUser size={22} color="#4f46e5" />
      </button>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? (
          <HiOutlineSun size={22} color="#4f46e5" />
        ) : (
          <HiOutlineMoon size={22} color="#4f46e5" />
        )}
      </button>
      <Logout />
    </div>
  );
}

export default Header;
