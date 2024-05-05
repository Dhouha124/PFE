import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login";
import  Navigation  from "./components/navigation";

import { Header } from "./components/header";
import { Service} from "./components/service";
import { About} from "./components/defunt";

import { GestionDesBiens} from "./components/biens";
import { GestionDesOrganes} from "./components/organnes";
import {GestionAlveoles } from "./components/alveole";
import {Team}  from "./components/Examen";
import { Contact } from "./components/Rapport";
import Admin from './components/Admin';
import JsonData from "./data/data.json";

import "./App.css";
import GuardAuth from "./gurad/GuradAuth";
import Navlayout from "./layout/Navlayout";
import Ajouter from "./components/Ajouter";
import Modifier from"./components/modifier";




const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
   
       
        <Routes>
          <Route path="/login" element={<Login/>}/>
        <Route  element={<GuardAuth     redirectPath='/Login'/>}> 
          <Route element={<Navlayout/>}>
          <Route path="/" element={<Header data={landingPageData.Header} />} />
          <Route path="/service" element={<Service data={landingPageData.Service} />} />
          <Route path="/about" element={<About data={landingPageData.About} />} />
          <Route path="/gestion-des-biens" element={<GestionDesBiens data={landingPageData.GestionDesBiens} />} />
          <Route path="/gestion-des-organes" element={<GestionDesOrganes data={landingPageData.GestionDesOrganes} />} />
          <Route path="/gestion-alveoles" element={<GestionAlveoles data={landingPageData.GestionAlveoles} />} />
          <Route path="/team" element={<Team data={landingPageData.Team} />} />
          <Route path="/contact" element={<Contact data={landingPageData.Contact} />} />
          <Route path="/admin" element={<Admin data={landingPageData.Admin} />} />
          <Route path="/Ajouter" element={<Ajouter data={landingPageData.Ajouter} />}/>
          <Route path="/Modifier" element={<Modifier data={landingPageData.Modifier} />}/>
          </Route>
          </Route>
        </Routes>
       
    
    </Router>
  );
};

export default App;
