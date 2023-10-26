import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Error from "../../ui/Error";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";

function CabinTable() {
  const { cabins, isLoading, isError, error } = useCabins();

  const [searchParams, setSearchParams] = useSearchParams();

  const curSearchParam = searchParams.get("discount") || "all";

  useEffect(function () {
    searchParams.set("discount", "all");
    setSearchParams(searchParams);
  }, []);

  if (isLoading)
    return (
      <div className="ml-[45%] mt-[5rem]">
        <Spinner />
      </div>
    );

  if (isError) return <Error>{error?.message}</Error>;
  if (!cabins.length) return <Empty resource="cabins" />;

  // FILTER
  let filteredCabins;

  if (curSearchParam === "all") filteredCabins = cabins;
  if (curSearchParam === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (curSearchParam === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // SORT
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );
  return (
    <Table>
      <Table.Header grid="cabins">
        <div>CABIN</div>
        <div>CAPACITY</div>
        <div>PRICE</div>
        <div>DISCOUNT</div>
      </Table.Header>
      <Table.Body
        data={sortedCabins}
        render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
      />
    </Table>
  );
}

export default CabinTable;
