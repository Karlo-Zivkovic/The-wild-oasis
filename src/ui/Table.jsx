import { RESULT_PER_PAGE } from "../utils/constants";

function Table({ children }) {
  return (
    <div className="dark:border-gray-700 rounded-md border divide-y dark:divide-gray-600">
      {children}
    </div>
  );
}
export default Table;

function Header({ children, grid }) {
  const grids = {
    cabins: `grid-cols-[1fr_2fr_1fr_1.8fr] pl-[140px]`,
    bookings: `grid-cols-[0.7fr_1.3fr_1.4fr_1fr_1fr]`,
  };
  return (
    <div
      className={`dark:bg-gray-900 dark:text-gray-100  bg-neutral-50 grid ${grids[grid]} p-4 text-sm font-semibold grid-rows-1`}
    >
      {children}
    </div>
  );
}
function Body({ data, render }) {
  return data?.map(render);
}
function Footer({ children, count }) {
  const numbPage = count / RESULT_PER_PAGE;
  if (numbPage < 2) return null;
  return (
    <footer className="dark:text-gray-100 h-12 px-6 flex items-center text-sm justify-between">
      {children}
    </footer>
  );
}
Table.Header = Header;
Table.Body = Body;
Table.Footer = Footer;
