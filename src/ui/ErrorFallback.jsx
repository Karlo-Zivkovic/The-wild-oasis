function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="flex  items-center justify-center h-screen bg-gray-200 ">
      <div className="flex flex-col text-center gap-6 tracking-wider py-[3rem] px-[7rem] bg-white drop-shadow">
        <h1 className="text-3xl font-semibold text-gray-700">
          Something went wrong 😐
        </h1>
        <p className="text-gray-600 text-sm">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="active:drop-shadow-md active:translate-y-[1px] hover:bg-indigo-600 rounded w-32 self-center mt-4 text-white px-4 py-2 bg-indigo-500"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export default ErrorFallback;
