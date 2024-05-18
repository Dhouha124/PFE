import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Lottie from 'lottie-react';
import anim from './anim.json';

export const GestionAlveoles = () => {
  const [numero, setNumero] = useState("");
  const [nomDefunt, setNomDefunt] = useState("");
  const [dateDeces, setDateDeces] = useState("");
  const [lieuDeces, setLieuDeces] = useState("");
  const [causeDeces, setCauseDeces] = useState("");
  const navigate = useNavigate();
  const [donnees, setDonnees] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create an object with the form data
    const formData = {
      numero,
      nomDefunt,
      dateDeces,
      lieuDeces,
      causeDeces,
    };

    setDonnees([...donnees, formData]);
  
  
  try {
    const response = await fetch("http://localhost:3000/alveole/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    console.log(data.message);

    setNumero("");
    setNomDefunt("");
    setDateDeces("");
    setLieuDeces("");
    setCauseDeces("");
  
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

useEffect(() => {
  const storedData = localStorage.getItem("alveoleData");
  if (storedData) {
    setDonnees(JSON.parse(storedData));
  }
}, []);

useEffect(() => {
  localStorage.setItem("alveoleData", JSON.stringify(donnees));
}, [donnees]);

  const handleDetailsPage = () => {
    navigate("/detail", { state: { donnees } });
  };

  return (
    <div id="GestionAlveoles">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <h6>Ajouter le Décès aux Alvéoles</h6>
              <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="numero">Numéro de l'alvéole :</label>
                <input
                  type="text"
                  id="numero"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  className="form-control"
                  placeholder="Entrez le numéro de l'alvéole"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="nomDefunt">Nom du défunt :</label>
                <input
                  type="text"
                  id="nomDefunt"
                  value={nomDefunt}
                  onChange={(e) => setNomDefunt(e.target.value)}
                  className="form-control"
                  placeholder="Entrez le nom du défunt"
                  required
                />
              </div>
              <div className="form-group">
                
                <label htmlFor="dateDeces">Date de décès :</label>
                <input
                  type="date"
                  id="dateDeces"
                  value={dateDeces}
                  onChange={(e) => setDateDeces(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lieuDeces">Lieu de décès :</label>
                <input
                  type="text"
                  id="lieuDeces"
                  value={lieuDeces}
                  onChange={(e) => setLieuDeces(e.target.value)}
                  className="form-control"
                  placeholder="Entrez le lieu de décès"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="causeDeces">Cause de décès :</label>
                <textarea
                  id="causeDeces"
                  value={causeDeces}
                  onChange={(e) => setCauseDeces(e.target.value)}
                  className="form-control"
                  rows="4"
                  placeholder="Entrez la cause de décès"
                  required
                ></textarea>
              </div>
             
              <button type="submit" className="btn-primary">Enregistrer</button>
              <button type="reset" className="btn-second" >Annuler</button>
              
              <button onClick={handleDetailsPage} >Voir les détails</button>
              
              </form>
            </div>
          </div>
        </div>
        
        <div style={{ position: 'absolute', top: 0, right: 0, width: '72%', height: '50%', zIndex: 1 }}>
  <Lottie animationData={anim} /> 
</div>

        
      </div>
    </div>
  );
};