function ConfirmDelete({ onCloseModal, onDelete, resourceName }) {
  return (
    <div className="dark:text-gray-100 text-neutral-600 w-[25rem] px-3 py-3">
      <h1 className="text-xl font-semibold mb-4">Delete {resourceName}</h1>
      <p className="text-md mb-4">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>
      <div className="text-sm flex justify-end gap-3 pt-2">
        <button
          onClick={onCloseModal}
          type="reset"
          className="py-2.5 px-4 border hover:bg-gray-100 transition rounded dark:hover:bg-gray-900 dark:border-gray-600"
        >
          Cancel
        </button>
        <button
          onClick={onDelete}
          className=" font-semibold px-4 rounded bg-red-600 text-neutral-50 hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
