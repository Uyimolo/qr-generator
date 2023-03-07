import Homepage from "./pages/Homepage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/layouts/Layout";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />}></Route>
      </Route>
    )
  );
  return (
    <div className="relative">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
