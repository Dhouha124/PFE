import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { UserContext } from "../components/Usercontext";
import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

const Navigation = () => {
    const { userRole, isAuthenticated, logout } = useContext(UserContext); 
    return (
        <nav id="menu" className="navbar-default navbar-fixed-top">
           
                <div className="navbar-header">
               
                    <Link to="/accueil" className="navbar-brand page-scroll">
                        <div className="brand-container">
                            <img src={logo} alt="Logo" style={{ width: "40px" }} />
                            <span>Adminmedico</span>
                        </div>
                    </Link>
                </div>

                <div className="collapse navbar-collapse" id="navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                     
                        {/* Conditional rendering based on userRole */}
                        {userRole === "admin" && (
                            <>
                           
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
                                        les organes
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/gestion-alveoles" className="page-scroll">
                                        Alveoles
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/examen" className="page-scroll">
                                        examen
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/rapport" className="page-scroll">
                                       Rapport
                                    </Link>
                                </li>
                               
                              
                                <li>
                                    {menuItems.map((menu, index) => (
                                        <MenuItems
                                            items={menu}
                                            key={index}
                                            depthLevel={0}
                                        />
                                    ))}
                                     </li>
                                
                            </>
                        )}
                        {userRole === "Agent_administrative" && (
                            <>
                              
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
                                    <Link to="/gestion-des-organes" className="page-scroll">
                                        les organes
                                    </Link>
                                    </li>
                                
                            </>
                        )}
                         {userRole === "Medecin" && (
                            <>
                                   <li>
                            <Link to="/service" className="page-scroll">
                                Services
                            </Link>
                        </li> <li>
                                    <Link to="/examen" className="page-scroll">
                                        examen
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/rapport" className="page-scroll">
                                        Rapport
                                    </Link>
                                </li>
                                
                            </>
                        )}
                        {userRole === "chef_service" && (
                            <>
                                   <li>
                            <Link to="/service" className="page-scroll">
                                Services
                            </Link>
                        </li> <li>
                                    <Link to="/examen" className="page-scroll">
                                        examen
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/rapport" className="page-scroll">
                                        Rapport
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/type" className="page-scroll">
                                    Type
                                    </Link>
                                </li>
                                
                            </>
                        )}
                           {userRole === "Agent_d'alvéole" && (
                            <>
                             <li>
                            <Link to="/service" className="page-scroll">
                                Services
                            </Link>
                        </li>
                                 <li>
                                    <Link to="/gestion-alveoles" className="page-scroll">
                                        Alveoles
                                    </Link>
                                </li>
                                   
                                
                            </>
                        )}
                         {userRole === "Responsable_administrative" && (
                            <>
                             <li>
                            <Link to="/service" className="page-scroll">
                                Services
                            </Link>
                        </li>
                                    <li>
                                    <Link to="/gestion-des-biens" className="page-scroll">
                                    les biens
                                    </Link>
                                    </li>
                                
                            </>
                        )}
                          {userRole === "secretaire" && (
                            <>
                             <li>
                            <Link to="/service" className="page-scroll">
                                Services
                            </Link>
                        </li>
                                    <li>
                                    <Link to="/examen" className="page-scroll">
                                   Examen
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/rapport" className="page-scroll">
                                  Rapport
                                    </Link>
                                    </li>
                                
                            </>
                        )}
                        {isAuthenticated ? (
                            <li>
                                <Link to="/" onClick={logout} className="page-scroll">
                                    deconnexion
                                </Link>
                            </li>
                        ) : (
                            <li>
                                <Link to="/" onClick={logout}  className="page-scroll">
                                deconnexion
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            
        </nav>
    );
};

export default Navigation;
