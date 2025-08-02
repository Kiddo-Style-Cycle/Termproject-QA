import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileNav";
import Logo from "../assets/images/Logo.png";

const NavBar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Learn", path: "/learn" },
    { name: "Game", path: "/game" },
    { name: "Act", path: "/act" },
  ];

  return (
    <nav className="bg-[#FAFAFA] w-full fixed top-0 left-0 z-50">
        <div className="max-w-[1440px] h-20 md:h-[88px] mx-auto flex items-center justify-between px-4 md:px-[160px]"> 
        {/* LOGO */}
        <div className="w-[174px]">
          <NavLink to="/">
            <img src={Logo} alt="kiddo style cycle" className="h-auto w-full" />
          </NavLink>
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-[20px]">
          {links.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `relative flex items-center justify-center leading-none h-10 min-w-[96px] px-4 winky-font font-normal text-[16px] rounded-full transition-all duration-200
                ${isActive ? "text-white" : "text-[#1E1E1E]"}
                before:absolute before:inset-0 before:rounded-full before:bg-[#4CAF50]
                    before:-z-10 before:transition-all before:duration-200
                  ${
                    isActive
                      ? "before:opacity-100 before:scale-100"
                      : "hover:before:opacity-100 hover:before:scale-100 before:opacity-0 before:scale-90"
                  }`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>
      <MobileMenu links={links}/>
      </div>
    </nav>
  );
};

export default NavBar;
