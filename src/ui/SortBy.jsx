import { useSearchParams } from "react-router-dom";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <select
      className="dark:text-gray-100 dark:bg-gray-800 dark:border-gray-800 focus:outline-indigo-500 focus:border-2 focus:border-indigo-500 border-2 border-slate-50 drop-shadow rounded p-1 text-sm"
      onChange={handleChange}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default SortBy;
