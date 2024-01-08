import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import HamsBurger from "./HamsBurger";
import { Links } from "../../data/data";
import Logo from "./logo.jpg";

const Navbar = () => {
  const [visibleMenuIndex, setVisibleMenuIndex] = useState(null);

  const handleMenuToggle = (index) => {
    setVisibleMenuIndex(index === visibleMenuIndex ? null : index);
  };

  const [screenSize, setScreenSize] = useState(false);
  const [showmenu, setShowmenu] = useState(false);
const [isVisible, setIsVisible] = useState(false);
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
          <Link to="/"><img src={Logo} alt="LNMIIT" className="w-1/2"></img>
          </Link>
        </div>


        {/* Other navigation buttons */}
        <div className={``}>
          {screenSize ? (
            <HamsBurger
              hamsburgerhandler={hamsburgerhandler}
              status={showmenu}
            />
          ) : (
            <ul style={{color:"white",display:"flex",flexDirection:"row",justifyContent:"space-evenly",gap:"20px"}}>
      {Links?.map((e, index) => (
        <li key={index} className="cursor-pointer relative inline-block group">
          <Link to={e.route} onClick={() => handleMenuToggle(index)}>
            <div>
              <span  >{e.title}</span>
            </div>
          </Link>
          <ul
            style={{
              display: visibleMenuIndex === index ? 'block' : 'none',
              position: 'absolute',
              marginTop: '2rem',
              textAlign: 'start',
              width: 'fit-content'
            }}
            className="text-center"
          >
            {e.submenu.map((ele, subIndex) => (
              <li key={subIndex} className="submenu">
                {ele.name}
              </li>
            ))}
          </ul>
        </li>
      ))}
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
        <ul style={{color:"white",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"space-evenly",gap:"20px"}}>
      {Links?.map((e, index) => (
        <li key={index} className="cursor-pointer relative inline-block group">
          <Link to={e.route} onClick={() => handleMenuToggle(index)}>
            <div>
              <span  >{e.title}</span>
            </div>
          </Link>
          <ul
            style={{
              display: visibleMenuIndex === index ? 'block' : 'none',
              position: 'relative',
              marginTop: '2rem',
              textAlign: 'start',
              width: 'fit-content',
    margin:"auto"
            }}
            className="text-center"
          >
            {e.submenu.map((ele, subIndex) => (
              <li key={subIndex} className="submenu">
                {ele.name}
              </li>
            ))}
          </ul>
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
