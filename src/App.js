import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Auth from "./pages/Auth";
import LoginForm from "./components/LoginForm"
import SignupForm from "./components/SignupForm"

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
        <Route index element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="auth" element={<Auth />}>
          <Route path="signin" element={<LoginForm />} />
          <Route path="signout" element={<SignupForm />} />
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
