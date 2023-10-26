import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => open(opens),
  });
}

function Window({ name, children }) {
  const { openName, close } = useContext(ModalContext);

  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <>
      <div className="fixed top-0 backdrop-blur h-screen w-[100%]" />
      <div
        ref={ref}
        className="dark:bg-gray-800 dark:text-gray-100 fixed top-[50%] left-[50%] translate-y-[-70%] translate-x-[-50%] p-6 bg-white rounded drop-shadow-lg"
      >
        <button
          className="fixed right-4 top-4 rounded dark:hover:bg-gray-700 hover:bg-gray-100 p-1 transition-all "
          onClick={close}
        >
          <HiXMark size={26} />
        </button>
        {cloneElement(children, { onCloseModal: close })}
      </div>
    </>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
