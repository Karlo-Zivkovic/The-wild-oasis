import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const curParam = searchParams.get(filterField) || options[0].value;

  function handleClick(value) {
    if (searchParams.get("page")) searchParams.set("page", 1);
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="dark:bg-gray-800 flex gap-2 p-1 bg-white drop-shadow rounded">
      {options.map((option) => (
        <button
          className={`dark:bg-gray-800 dark:text-gray-100 disabled:cursor-not-allowed disabled:active:translate-y-0 disabled:active:drop-shadow-none text-sm font-basic px-2 h-7 rounded-md  active:drop-shadow-md active:translate-y-[1px] hover:bg-indigo-500 hover:text-white transition ${
            curParam === option.value
              ? "dark:bg-indigo-500 bg-indigo-500 text-white"
              : "text-neutral-800 bg-white"
          }`}
          key={option.label}
          onClick={() => handleClick(option.value)}
          disabled={option.value === curParam}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
