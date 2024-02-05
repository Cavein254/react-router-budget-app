import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard, { DashboardLoader, dashboardAction } from "./pages/Dashboard";
import Error from "./pages/Error";
import Main, { MainLoader } from "./layout/Main";
import { logoutAction } from "./actions/logout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: MainLoader,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: DashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
