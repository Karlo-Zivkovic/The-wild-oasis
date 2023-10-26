import Modal from "../../ui/Modal";
import CabinForm from "./CabinForm";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <button className="bg-indigo-500 text-slate-50 text-sm font-semibold mt-6 mb-3 h-12 rounded-md hover:bg-indigo-600 transition w-[10rem] ">
          Add new Cabin
        </button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CabinForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;
