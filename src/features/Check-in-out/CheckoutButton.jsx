import { useCheckout } from "./useCheckout.js";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();
  return (
    <button
      className="text-center w-24 py-0.5 rounded bg-indigo-500 text-white active:drop-shadow-md active:translate-y-[1px] hover:bg-indigo-600 "
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </button>
  );
}

export default CheckoutButton;
