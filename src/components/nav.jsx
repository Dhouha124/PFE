import React from "react";
import { Link } from "react-router-dom";

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
            Adminmedico
          </Link>
         

        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            
            <li>
              <Link to="/service" className="page-scroll">
                Ajouter user
              </Link>
            </li>
         
           
         
            <li>
              <Link to="/contact" className="page-scroll">
                Modifier
              </Link>
            </li>
            <li>
              <Link to="/admin" className="page-scroll">
                Supprimer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
