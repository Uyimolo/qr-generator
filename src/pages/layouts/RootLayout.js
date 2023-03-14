import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
const Layout = () => {
  return (
    <div className="relative">
      <header className="fixed w-full left-0 top-0">
        <Header />
      </header>
      <main className="mt-20 bg-white min-h-[70vh] lg:min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;