import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import HamsBurger from "./HamsBurger";

const Navbar = () => {
  const [screenSize, setScreenSize] = useState(false);
  const [showmenu, setShowmenu] = useState(false);

  const changedisplay = () => {
    if (window.innerWidth <= 1024) setScreenSize(true);
    else {
      setScreenSize(false);
      setShowmenu(false);
    }
  };

  window.addEventListener("resize", changedisplay);

  const hamsburgerhandler = () => {
    setShowmenu(!showmenu);
  };

  useEffect(() => {
    changedisplay();
  }, []);

  return (
    <div className={`w-screen bg-richblack-900 fixed`}>
      <div
        className={`flex text-xl px-6 py-4 justify-between items-center`}
      >
        {/* Logo */}
        <div className="-z-50">
          <Link to="/">
            {/* <img src={Logo} alt="Logo" height={32} width={160} loading="lazy" /> */}
            <h4 className="text-red-800 font-bold text-xl">GDSC</h4>
          </Link>
        </div>
        {/* Logo */}

        {/* Other navigation buttons */}
        <div className={``}>
        {screenSize ? (
            <HamsBurger
              hamsburgerhandler={hamsburgerhandler}
              status={showmenu}
            />
          ):(
            <ul className={`flex gap-x-8 text-lg z-20 font-semibold text-white ${screenSize ? "hidden" : "block"}`}>
            <li className="cursor-pointer relative inline-block group">
              <Link to="/reviews">
                Home
                <span className="absolute w-full transform scale-x-0 h-[2px] bottom-0 left-0 bg-white transform-origin-bottom-right transition-transform duration-250 ease-out group-hover:transform-origin-bottom-left group-hover:scale-x-100"></span>
              </Link>
            </li>
            <li className="cursor-pointer relative inline-block group">
              <Link to="/contact">
                About
                <span className="absolute w-full transform scale-x-0 h-[2px] bottom-0 left-0 bg-white transform-origin-bottom-right transition-transform duration-250 ease-out group-hover:transform-origin-bottom-left group-hover:scale-x-100"></span>
              </Link>
            </li>
            <li className="cursor-pointer relative inline-block group">
              <Link to="/reviews">
                Problems
                <span className="absolute w-full transform scale-x-0 h-[2px] bottom-0 left-0 bg-white transform-origin-bottom-right transition-transform duration-250 ease-out group-hover:transform-origin-bottom-left group-hover:scale-x-100"></span>
              </Link>
            </li>
            <li className="cursor-pointer relative inline-block group">
              <Link to="/reviews">
                Prizes
                <span className="absolute w-full transform scale-x-0 h-[2px] bottom-0 left-0 bg-white transform-origin-bottom-right transition-transform duration-250 ease-out group-hover:transform-origin-bottom-left group-hover:scale-x-100"></span>
              </Link>
            </li>
            <li className="cursor-pointer relative inline-block group">
              <Link to="/contact">
                Sponsors
                <span className="absolute w-full transform scale-x-0 h-[2px] bottom-0 left-0 bg-white transform-origin-bottom-right transition-transform duration-250 ease-out group-hover:transform-origin-bottom-left group-hover:scale-x-100"></span>
              </Link>
            </li>
            <li className="cursor-pointer relative inline-block group">
              <Link to="/contact">
                Timeline
                <span className="absolute w-full transform scale-x-0 h-[2px] bottom-0 left-0 bg-white transform-origin-bottom-right transition-transform duration-250 ease-out group-hover:transform-origin-bottom-left group-hover:scale-x-100"></span>
              </Link>
            </li>
            <li className="flex items-center text-lg font-normal gap-x-4 button-grp text-richblack-100">
            <Link to="/login" onClick={() => setShowmenu(false)}>
                <button className="text-white">Register</button>
              </Link>
            </li>
          </ul>
          )}
          
        </div>
        {/* Other navigation buttons */}
      </div>

      {/* HamsburgerMenu */}
      <div
        className={`bg-richblack-900 text-white font-normal text-lg w-[70%] h-screen absolute -z-10  top-0 transition-all duration-500 ${
          showmenu ? "right-0" : "-right-[70%]"
        }`}
      >
        <div className="mt-24 text-center">
          <ul className="flex flex-col gap-y-4">
            {/* <li>
              <Link to="/" onClick={()=>setShowmenu(false)}>Home</Link>
            </li> */}
            <li>
              <Link to="/reviews" onClick={() => setShowmenu(false)}>
                Reviews
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setShowmenu(false)}>
                DSA Q-Cards
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setShowmenu(false)}>
                Tech Blogs
              </Link>
            </li>
            <li className="">
              <Link to="/contact" onClick={() => setShowmenu(false)}>
                Sample Resume
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/contact" onClick={() => setShowmenu(false)}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-y-4 button-grp">
          <Link to="/login" onClick={() => setShowmenu(false)}>
                <button className="text-white">Sign in</button>
             </Link>
          </div>
        </div>
      </div>
      {/* HamsburgerMenu */}
    </div>
  );
};

export default Navbar;
