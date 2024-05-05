import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import  Navigation  from "./components/nav";

import { Header } from "./components/header";
import { Service} from "./components/service";
import { About} from "./components/defunt";

import { GestionDesBiens} from "./components/biens";
import { GestionDesOrganes} from "./components/organnes";
import {GestionAlveoles } from "./components/alveole";
import {Team}  from "./components/Examen";
import { Contact } from "./components/Rapport";
import AdminPage from"./components/Admin";
import JsonData from "./data/data.json";

import "./App.css";



const App1 = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
        
          <Route path="/" element={<Header data={landingPageData.Header} />} />
          <Route path="/service" element={<Service data={landingPageData.Service} />} />
                                        
          <Route path="/Ajouter" element={<Contact data={landingPageData.Contact} />} />
          <Route path="/admin" element={<AdminPage data={landingPageData.AdminPage} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App1;
