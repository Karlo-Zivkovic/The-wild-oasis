import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { RESULT_PER_PAGE } from "../utils/constants";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const numberOfPages = Math.ceil(count / RESULT_PER_PAGE);

  const curPage = Number(searchParams.get("page")) || 1;

  function nextPage() {
    const next = curPage === numberOfPages ? curPage : curPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  function previousPage() {
    const previous = curPage === 1 ? curPage : curPage - 1;
    searchParams.set("page", previous);
    setSearchParams(searchParams);
  }

  return (
    <>
      <div>
        Showing{" "}
        <span className="font-semibold">
          {RESULT_PER_PAGE * (curPage - 1) + 1}
        </span>{" "}
        to{" "}
        <span className="font-semibold">
          {curPage * RESULT_PER_PAGE > count
            ? count
            : curPage * RESULT_PER_PAGE}
        </span>{" "}
        of <span className="font-semibold">{count}</span>
      </div>
      <div className="flex gap-3 font-medium">
        <button
          disabled={curPage === 1}
          onClick={previousPage}
          className=" flex items-center gap-0.5 enabled:hover:bg-indigo-500 enabled:hover:text-white pl-0.5 py-1 rounded pr-3 transition duration-200 enabled:active:drop-shadow-md enabled:active:translate-y-[1px]  disabled:cursor-not-allowed  "
        >
          <span className="text-base">
            <HiChevronLeft />
          </span>
          <span>Previous</span>
        </button>
        <button
          disabled={curPage === numberOfPages}
          onClick={nextPage}
          className="flex items-center gap-0.5 enabled:hover:bg-indigo-500 enabled:hover:text-white pr-0.5 py-1 rounded pl-3 transition duration-200 enabled:active:drop-shadow-md enabled:active:translate-y-[1px]  disabled:cursor-not-allowed"
        >
          <span className="">Next</span>
          <span className="text-base">
            <HiChevronRight />
          </span>
        </button>
      </div>
    </>
  );
}

export default Pagination;
