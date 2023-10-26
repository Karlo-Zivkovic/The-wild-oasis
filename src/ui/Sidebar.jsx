import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import SidebarNavLink from "./SidebarNavLink";
import Uploader from "../data/cabins/Uploader";
import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

function Sidebar() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <div className="h-[100%] p-6 row-span-2 dark:bg-gray-800  border-r dark:border-r-gray-600  ">
      <img
        src={isDarkMode ? "/logo-dark.png" : "/logo-light.png"}
        alt="logo"
        className="mb-12 h-24 mx-auto"
      />
      <div className="flex flex-col gap-2 font-medium">
        <SidebarNavLink to="dashboard">
          <HiOutlineHome
            className="transition-colors duration-300 "
            size={23}
          />
          <span className="text-gray-900  dark:text-gray-100  ">Home</span>
        </SidebarNavLink>
        <SidebarNavLink to="bookings">
          <HiOutlineCalendarDays
            className="transition-colors duration-300"
            size={23}
          />
          <span className="text-neutral-900 dark:text-gray-100">Bookings</span>
        </SidebarNavLink>
        <SidebarNavLink to="cabins">
          <HiOutlineHomeModern
            className="transition-colors duration-300"
            size={23}
          />
          <span className="text-neutral-900 dark:text-gray-100">Cabins</span>
        </SidebarNavLink>
        <SidebarNavLink to="users">
          <HiOutlineUsers
            className="transition-colors duration-300"
            size={23}
          />
          <span className="text-neutral-900 dark:text-gray-100">Users</span>
        </SidebarNavLink>
        <SidebarNavLink to="settings">
          <HiOutlineCog6Tooth
            className="transition-colors duration-300"
            size={23}
          />
          <span className="text-neutral-900 dark:text-gray-100">Settings</span>
        </SidebarNavLink>
      </div>
      <Uploader />
    </div>
  );
}

export default Sidebar;
