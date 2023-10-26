import {
  HiOutlineDocumentDuplicate,
  HiOutlinePencil,
  HiOutlineTrash,
} from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
import { useDeleteCabin } from "./useDeleteCabin";
import CabinForm from "./CabinForm";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

function CabinRow({ cabin }) {
  const { deleteCabin, isDeleting } = useDeleteCabin();
  const { createCabin, isCreating } = useCreateCabin();
  const { discount, image, name, maxCapacity, regularPrice, id, description } =
    cabin;

  const isWorking = isDeleting || isCreating;

  function deleteHandler() {
    deleteCabin(id);
  }

  function duplicateHandler() {
    createCabin({
      discount,
      maxCapacity,
      regularPrice,
      image,
      description,
      name: `${name}-copy`,
    });
  }

  return (
    <Modal>
      <div className="grid gap-0 items-center h-20 grid-cols-[0.7fr_0.7fr_2fr_1fr_1fr_1.2fr] text-sm bg-white dark:bg-gray-800">
        <img className="h-20 py-1" src={image} alt="cabin" />
        <span className="ml-4 font-[sono] text-base font-semibold dark:text-gray-100">
          {name}
        </span>
        <span className="ml-16 dark:text-gray-100">
          Fits up to {maxCapacity} guests
        </span>
        <span className="place-self-center font-[sono] font-semibold dark:text-gray-100">
          {formatCurrency(regularPrice)}
        </span>
        <span className="ml-[60px] font-[sono] font-semibold text-green-600 dark:text-green-700">
          {discount === 0 ? <span>&mdash;</span> : formatCurrency(discount)}
        </span>
        <div className="flex gap-2 items-center justify-center dark:text-gray-100">
          <button
            onClick={duplicateHandler}
            disabled={isWorking}
            className="hover:text-violet-600"
          >
            {<HiOutlineDocumentDuplicate size={17} />}
          </button>
          <Modal.Open opens="edit">
            <button className="hover:text-green-700">
              {<HiOutlinePencil size={17} />}
            </button>
          </Modal.Open>
          <Modal.Open opens="delete">
            <button disabled={isWorking} className="hover:text-red-500 ">
              {<HiOutlineTrash size={17} />}
            </button>
          </Modal.Open>
        </div>
      </div>
      <Modal.Window name="edit">
        <CabinForm cabin={cabin} editMode={true} />
      </Modal.Window>
      <Modal.Window name="delete">
        <ConfirmDelete onDelete={deleteHandler} resourceName="cabin" />
      </Modal.Window>
    </Modal>
  );
}

export default CabinRow;
