function Stat({ icon, title, value, color }) {
  const iconStyles = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    indigo: "bg-purple-100 text-indigo-700",
    yellow: "bg-yellow-100 text-yellow-700",
  };
  return (
    <div className="bg-white  h-24 flex py-5 px-4 items-center gap-4 rounded drop-shadow dark:border-gray-700 dark:border dark:divide-gray-900 dark:bg-gray-800 dark:text-gray-100">
      <div className={`text-4xl ${iconStyles[color]} p-4 rounded-full `}>
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xs text-gray-500 font-semibold to uppercase">
          {title}
        </p>
        <p className="font-medium text-2xl">{value}</p>
      </div>
    </div>
  );
}

export default Stat;
