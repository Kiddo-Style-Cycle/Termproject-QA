import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const MobileMenu = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative z-50">
      <div className="flex items-center justify-end px-4 py-3 bg-[#FAFAFA] relative z-50">
        <button
          onClick={() => setIsOpen(o => !o)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="focus:outline-none"
        >
          {isOpen ? (
            <FiX className="h-6 w-6 text-[#4caf50]" />
          ) : (
            <FiMenu className="h-6 w-6 text-[#4caf50]" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div className="flex-1" onClick={() => setIsOpen(false)} />
          <div className="bg-[#FAFAFA]  w-2/4 max-w-xs h-full shadow-lg">
            <nav className="flex flex-col items-start justify-center h-full px-6 space-y-6">
              {links.map(({ name, path }) => (
                <NavLink
                  key={name}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium text-[#b30047] w-full text-left"
                >
                  {name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
