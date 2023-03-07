import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
const Layout = () => {
  return (
    <div className="relative">
      <header className="fixed w-full left-0 top-0">
        <Header />
      </header>
      <main className="mt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
