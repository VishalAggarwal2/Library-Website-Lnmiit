import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import HamsBurger from "./HamsBurger";
import { Links } from "../../data/data";
import Logo from "./logo.jpg";

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
    <div className={`w-screen bg-black fixed`}>
      <div className={`flex text-xl px-6 py-4 justify-between items-center`}>
        {/* Logo */}
        <div className="-z-50">
          <Link to="/">
            {/* <h4 className="text-red-800 font-bold text-xl cursor-pointer"> */}
              <img src={Logo} alt="LNMIIT" className="w-1/2"></img>
            {/* </h4> */}
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
          ) : (
            <ul
              className={`flex gap-x-8 text-lg z-20 font-semibold text-white ${
                screenSize ? "hidden" : "block"
              }`}
            >
              {Links?.map((e) => (
                <li className="cursor-pointer relative inline-block group">
                  <Link to={e.route}>
                    {e.title}
                    <span className="absolute w-full transform scale-x-0 h-[2px] bottom-0 left-0 bg-white transform-origin-bottom-right transition-transform duration-250 ease-out group-hover:transform-origin-bottom-left group-hover:scale-x-100"></span>
                  </Link>
                </li>
              ))}
              {/* <li className="flex items-center text-lg font-normal gap-x-4 button-grp text-richblack-100">
            <Link to="/login" onClick={() => setShowmenu(false)}>
                <button className="text-white">Register</button>
              </Link>
            </li>  */}
            </ul>
          )}
        </div>
        {/* Other navigation buttons */}
      </div>

      {/* HamsburgerMenu */}
      <div
        className={`bg-black text-white font-normal text-lg w-[70%] h-screen absolute -z-10  top-0 transition-all duration-500 ${
          showmenu ? "right-0" : "-right-[70%]"
        }`}
      >
        <div className="mt-24 text-center">
          <ul className="flex flex-col gap-y-4">
            {/* <li>
              <Link to="/" onClick={()=>setShowmenu(false)}>Home</Link>
            </li> */}
            {Links?.map((e) => (
              <li>
                <Link to={e.route} onClick={() => setShowmenu(false)}>
                  {e.title}
                </Link>
              </li>
            ))}
          </ul>
          {/* <div className="flex flex-col gap-y-4 button-grp">
          <Link to="/login" onClick={() => setShowmenu(false)}>
                <button className="text-white">Sign in</button>
             </Link>
          </div> */}
        </div>
      </div>
      {/* HamsburgerMenu */}
    </div>
  );
};

export default Navbar;
