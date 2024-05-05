import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

const Navigation = () => {
 

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand page-scroll">
            <div className="dhouha" style={{flexDirection:"column", marginTop:"-7px", marginLeft:"-170px"}}>
          <img src={logo} alt="Logo" style={{ width:"40px" }} />
            Adminmedico
</div>
          </Link>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/service" className="page-scroll">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="page-scroll">
                Enregister décès
              </Link>
            </li>
            <li>
              <Link to="/gestion-des-biens" className="page-scroll">
                les biens
              </Link>
            </li>
            <li>
              <Link to="/gestion-des-organes" className="page-scroll">
                les organnes
              </Link>
            </li>
            <li>
              <Link to="/gestion-alveoles" className="page-scroll">
                Alveoles
              </Link>
            </li>
            <li>
              <Link to="/Team" className="page-scroll">
                examen
              </Link>
            </li>
            <li>
              <Link to="/contact" className="page-scroll">
                Contact
              </Link>
            </li>
           < ul className = "menus" > {
            menuItems.map((menu, index) => {
                const depthLevel = 0;
                return <MenuItems items = {
                    menu
                }
                key = {
                    index
                }
                depthLevel = {
                    depthLevel
                }
                />;
            })
        }
         </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
