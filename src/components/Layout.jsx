import Footer from "./Footer";
import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router-dom";
import GameBG from "../assets/images/Game_BG.png";

const Layout = () => {
  const { pathname } = useLocation();
  const showGameBG = ["/game", "/mission", "/story"].some((path) =>
    pathname.startsWith(path)
  );

  return (
    <>
      {showGameBG && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <img src={GameBG} alt="" className="w-full h-full object-cover" />
        </div>
      )}

      <div className="relative z-10">
        <NavBar />
        <main className="bg-transparent">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
