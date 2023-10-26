import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Root from "./ui/Root";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";
import Login from "./pages/Login";
import ProtectedRoute from "./ui/ProtectedRoute";
import Account from "./pages/Account";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "./ui/ErrorFallback";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary
        FallbackComponent={ErrorFallBack}
        onReset={() => window.location.replace("/")}
      >
        <ProtectedRoute>
          <Root />
        </ProtectedRoute>
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" />,
      },
      { path: "dashboard", element: <Dashboard /> },
      {
        path: "bookings",
        element: <Bookings />,
      },

      {
        path: "/bookings/:bookingId",
        element: <Booking />,
      },
      {
        path: "/checkin/:bookingId",
        element: <Checkin />,
      },
      {
        path: "cabins",
        element: <Cabins />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "/account",
        element: <Account />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 5000 }}
      />
    </QueryClientProvider>
  );
}

export default App;
