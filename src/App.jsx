import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard, { DashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import Main, { MainLoader } from "./layout/Main";
import { logoutAction } from "./actions/logout";

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
    </div>
  );
}

export default App;
