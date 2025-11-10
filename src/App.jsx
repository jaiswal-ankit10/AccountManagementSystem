import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AccountDetail from "./pages/AccountDetail";
import NotFound from "./pages/NotFound";
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
      element: <NotFound />,
    },
  ]);
  return (
    <div className="min-h-screen  bg-gray-400">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
