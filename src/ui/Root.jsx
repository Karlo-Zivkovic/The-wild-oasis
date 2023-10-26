import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Root() {
  return (
    <div className=" grid grid-cols-[16rem_1fr] grid-rows-[6vh_1fr] ">
      <Sidebar />
      <Header />
      <main className="dark:bg-gray-900 bg-neutral-50 text-neutral-700 h-[94vh] overflow-auto  ">
        <div className="h-[100%] flex flex-col w-[74rem]  mx-auto py-12  ">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Root;
