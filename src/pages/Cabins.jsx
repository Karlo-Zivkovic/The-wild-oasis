import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  return (
    <div className="pb-16">
      <div className="flex justify-between items-center mb-7">
        <h1 className="text-3xl font-semibold dark:text-gray-100">
          All cabins
        </h1>
        <CabinTableOperations />
      </div>
      <CabinTable />
      <AddCabin />
    </div>
  );
}

export default Cabins;
