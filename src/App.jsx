import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard, { DashboardLoader } from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: DashboardLoader,
  },
  {
    path: "/:1d",
    element: <h1>Home id</h1>,
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
