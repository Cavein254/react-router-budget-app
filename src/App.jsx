import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard, { DashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import Main, { MainLoader } from "./layout/Main";

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
