import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard, { DashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import Main, { MainLoader } from "./layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: MainLoader,
  },
  {
    path: "/",
    element: <Dashboard />,
    loader: DashboardLoader,
  },
  {
    path: "*",
    element: <Error />,
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
