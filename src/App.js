import Homepage from "./pages/Homepage";
import About from "./pages/About";
import AuthPage from "./pages/AuthPage";
import MyQrs from "./pages/MyQrs"
import Settings from "./pages/Settings"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./pages/layouts/RootLayout";
import DashboardLayout from "./pages/layouts/DashboardLayout";
import CreateQR from "./pages/CreateQR";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<CreateQR />} />
          <Route path="myqrs" element={<MyQrs />} />
          <Route path="settings" element={<Settings />} />
        </Route>
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
