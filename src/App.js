import Homepage from "./pages/Homepage";
import About from "./pages/About";
import AuthPage from "./pages/AuthPage";
import MyQrs from "./pages/MyQrs";
import Settings from "./pages/Settings";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./pages/layouts/RootLayout";
import DashboardLayout from "./pages/layouts/DashboardLayout";
import CreateQR from "./pages/CreateQR";
// import { useState } from "react";
import UserProvider from "./context/UserProvider";
import Error404page from "./pages/Error404page";
function App() {
  // const [user, setUser] = useState(null);

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
        <Route path="*" element={<Error404page />} />
      </Route>
    )
  );
  return (
    <div className="">
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </div>
  );
}

export default App;
