import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./Layout.css";
import Menus from "../Menus/Menus";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className="sidebar">
          <div className="sidebar-toggle-icons">
            <Menus toggle={toggle} />
            <p onClick={handleToggle}>
              {toggle ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </p>
          </div>
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
