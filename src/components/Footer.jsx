import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#b30047] text-white-50 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Left side - Brand information */}
          <div className="flex-1">
            <h3 className="text-xl font-bold winky-font mb-2">Kiddo Style Cycle</h3>
            <p className="mb-4 max-w-md font-['Inter'] text-base font-normal leading-[1.4]">
              Helping kids discover how to make smart, fair, and kind fashion choices.
            </p>
            {/* Copyright - visible on desktop */}
            <p className="font-['Inter'] text-sm hidden md:block">
              © 2025 Kiddo Style Cycle
            </p>
          </div>
          
          {/* Right side - Navigation links */}
          <nav className="flex sm:flex-row gap-8 winky-font text-white-50 text-base justify-center items-center">
            <a 
              href="/" 
              className="hover:text-pink-200 transition-colors duration-200 font-normal"
            >
              Home
            </a>
            <a 
              href="/learn" 
              className="hover:text-pink-200 transition-colors duration-200 font-normal"
            >
              Learn
            </a>
            <a 
              href="/game" 
              className="hover:text-pink-200 transition-colors duration-200 font-normal"
            >
              Game
            </a>
            <a 
              href="/act" 
              className="hover:text-pink-200 transition-colors duration-200 font-normal"
            >
              Act
            </a>
          </nav>
        </div>
        
        {/* Copyright - visible on mobile at bottom */}
        <div className="mt-6 pt-4 border-t border-pink-400/30 md:hidden">
          <p className="font-['Inter'] text-sm text-center">
            © 2025 Kiddo Style Cycle
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
