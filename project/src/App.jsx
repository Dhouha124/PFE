import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";

import UserProvider from "./components/Usercontext";
import { Header } from "./components/Accueil";
import { Service} from "./components/service";
import {About} from "./components/defunt";



import { GestionDesBiens} from "./components/biens";
import { GestionDesOrganes} from "./components/organnes";
import {GestionAlveoles } from "./components/alveole";
import {Team}  from "./components/Examen";
import  Rapport from "./components/Rapport";
import Admin from './components/Admin';
import JsonData from "./data/data.json";

import "./App.css";
import GuardAuth from "./gurad/GuradAuth";
import Navlayout from "./layout/Navlayout";
import Ajouter from "./components/Ajouter";
import AddUser from "./components/Miseajour";
import Password from "./components/Reccuperer";
import {Outputdefunt} from "./components/OutputDefunt";
import  { Outputajouter } from "./components/Outputajouter";
import  LoginMtp from "./components/LoginMtp";
import  { OutputBiens } from "./components/OutputBiens";
import Outputalveole from "./components/Outputalveole";
import Type from "./components/Type";
import EmailMtp from "./components/recupereremail";
import Useradmin from "./components/useradmin";


const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
   <UserProvider>
       
        <Routes>
          <Route path="/" element={<Login/>}/>
        <Route  element={<GuardAuth  redirectPath='/Login'/>}> 
          <Route element={<Navlayout/>}>
          <Route path="/accueil" element={<Header data={landingPageData.Header} />} />
          <Route path="/service" element={<Service data={landingPageData.Service} />} />
          <Route path="/about" element={<About data={landingPageData.About} />} />
          <Route path="/gestion-des-biens" element={<GestionDesBiens data={landingPageData.GestionDesBiens} />} />
          <Route path="/gestion-des-organes" element={<GestionDesOrganes data={landingPageData.GestionDesOrganes} />} />
          <Route path="/gestion-alveoles" element={<GestionAlveoles data={landingPageData.GestionAlveoles} />} />
          <Route path="/examen" element={<Team data={landingPageData.Team} />} />
          <Route path="/rapport" element={<Rapport data={landingPageData.Rapport} />} />
          <Route path="/admin" element={<Admin  data={landingPageData.Admin } />} />
          <Route path="/Ajouter" element={<Ajouter data={landingPageData.Ajouter} />}/>
          <Route path="/motdepasse" element={< Password data={landingPageData.Password} />}/>
          <Route path="/AddUser" element={<AddUser data={landingPageData.AddUser}/>}/>
          <Route path="/details" element={<Outputdefunt data={landingPageData.Outputdefunt}/>} />
          <Route path="/tableau" element={<Outputajouter data={landingPageData.Outputajouter}/>} />
          <Route path="/doudou" element={<LoginMtp data={landingPageData.LoginMtp}/>} />
          <Route path="/tableau-enregistrements" element={<OutputBiens data={landingPageData.OutputBiens}/>}/>
          <Route path="/detail" element={<Outputalveole data={landingPageData.Outputalveole}/>}/>
          <Route path="/type" element={<Type data={landingPageData.Type}/>}/>
          <Route path="/email" element={<EmailMtp data={landingPageData.EmailMtp}/>}/>
          <Route path="/useradmin" element={<Useradmin data={landingPageData.Useradmin}/>}/>
          </Route>
          </Route>
        </Routes>
       
        </UserProvider>
    </Router>
  );
};

export default App;
