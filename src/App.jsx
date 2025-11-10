import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AccountDetail from "./pages/AccountDetail";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/account-detail",
      element: <AccountDetail />,
    },
    {
      path: "*",
      element: (
        <div className="flex items-center justify-center pt-110 text-4xl font-semibold">
          404 Not Found
        </div>
      ),
    },
  ]);
  return (
    <div className="min-h-screen  bg-gray-400">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
