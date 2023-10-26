function Error({ children }) {
  return (
    <div className="flex gap-5 rounded-md m-auto w-[25rem] text-red-800 bg-red-200 p-4 text-center items-center justify-center">
      <span className="text-red-800 border-red-800 px-4 border-2 rounded-full text-5xl">
        !
      </span>
      <p className="text-xl">{children}</p>
    </div>
  );
}

export default Error;
