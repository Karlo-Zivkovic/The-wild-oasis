import { NavLink } from "react-router-dom";

function SidebarNavLink({ children, to }) {
  return (
    <NavLink
      className="hover:bg-neutral-100 dark:hover:bg-gray-900 text-gray-400 px-6 py-3 flex items-center
    gap-3 hover:text-indigo-600 dark:aria-[current]:bg-gray-900 aria-[current]:bg-gray-100 aria-[current]:text-indigo-500    "
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default SidebarNavLink;
