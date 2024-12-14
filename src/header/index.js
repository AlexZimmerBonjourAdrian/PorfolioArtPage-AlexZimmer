import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link  className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
          <Themetoggle />
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
          
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link  onClick={handleToggle} to="/" className="my-3">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/portfolio" className="my-3"> Portfolio</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3">About</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3"> Contact</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/draconianoproject" className="my-3"> Draconiano</Link>
                  </li>

                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/chatbellow" className="my-3"> Chatbellow</Link>
                  </li>

                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/howtointerviewrabbit" className="my-3"> how to Interview rabbit</Link>
                  </li>

                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/Finaatfreedys" className="my-3"> Final at freedys fangame</Link>
                  </li>

                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/loopdetectiveadventure" className="my-3"> Loop Detective Adventure</Link>
                  </li>

                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/monsterdemonsanddragons" className="my-3"> Monster Demonsand Dragons</Link>
                  </li>

                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/notsurrender" className="my-3"> Not Surrender</Link>
                  </li>

                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/powergunofchildrens" className="my-3"> A Power Gun Of Childrens</Link>
                  </li>

                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/shattermainds" className="my-3"> Shattered Mainds</Link>
                  </li>
                  
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/outsideofthecult" className="my-3"> Outside Of the cult</Link>
                  </li>

                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/wonderlandofhorror" className="my-3"> Wonderland of Morror</Link>
                  </li>
                  
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/agoodandbadplace" className="my-3"> A good And Bad Place</Link>
                  </li>

                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/travelers" className="my-3"> Travelers</Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
            <a href={socialprofils.facebook}>Facebook</a>
            <a href={socialprofils.github}>Github</a>
            <a href={socialprofils.twitter}>Twitter</a>
            </div>
            <p className="copyright m-0">copyright Zimmzimmgames 2022. all rights reserved.{logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

export default Headermain;
