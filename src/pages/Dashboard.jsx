import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";

function Dashboard() {
  return (
    <div className="h-[100vh] ">
      <div className="dark:text-gray-100 mb-10 flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <DashboardFilter />
      </div>
      <DashboardLayout />
    </div>
  );
}

export default Dashboard;
