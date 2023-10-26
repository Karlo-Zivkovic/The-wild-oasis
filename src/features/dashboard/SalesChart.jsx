import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useDarkMode } from "../../contexts/DarkModeContext";

function SalesChart({ bookings, numDays }) {
  const { isDarkMode } = useDarkMode();
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    return {
      label: format(date, "MMM dd"),
      totalSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.totalPrice, 0),
      extrasSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.extrasPrice, 0),
    };
  });
  let darkmodeStyles = "#374151";
  if (isDarkMode) {
    darkmodeStyles = "#f3f4f6";
  }

  return (
    <div className="col-start-1 col-end-5 row-start-3 bg-white drop-shadow px-10 py-7 rounded dark:border-gray-700 dark:divide-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:border">
      <h1 className="mb-6 text-xl font-semibold  ">
        Sales from {format(allDates.at(0), "MMM dd yyyy")} &mdash;{" "}
        {format(allDates.at(-1), "MMM dd yyyy")}
      </h1>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: darkmodeStyles }}
            tickLine={{ stroke: "#374151" }}
          />
          <YAxis
            unit="$"
            tick={{ fill: darkmodeStyles }}
            tickLine={{ stroke: "#374151" }}
          />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip contentStyle={{ backgroundColor: "#fff" }} />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke={"#4338ca"}
            fill={"#c4b5fd"}
            strokeWidth={2}
            name="Total sales"
            unit="$"
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            stroke={"#15803d"}
            fill={"#86efac"}
            strokeWidth={2}
            name="Extras sales"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
