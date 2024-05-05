
import React, { useState } from "react";
import Lottie from 'lottie-react';
import anim from './anim.json';

export const GestionAlveoles = () => {
  const [numero, setNumero] = useState("");
  const [nomDefunt, setNomDefunt] = useState("");
  const [dateDeces, setDateDeces] = useState("");
  const [lieuDeces, setLieuDeces] = useState("");
  const [causeDeces, setCauseDeces] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vous pouvez envoyer les données de l'alvéole à votre serveur ou effectuer toute autre action requise
    console.log("Numéro de l'alvéole:", numero);
    console.log("Nom du défunt:", nomDefunt);
    console.log("Date de décès:", dateDeces);
    console.log("Lieu de décès:", lieuDeces);
    console.log("Cause de décès:", causeDeces);
    // Réinitialiser le formulaire après soumission
    setNumero("");
    setNomDefunt("");
    setDateDeces("");
    setLieuDeces("");
    setCauseDeces("");
  };

  return (

    <div id="GestionAlveoles">
     <div style={{ display: "flex", flexDirection: "columun" }}>
           
      <div className="container" >
    
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
            </form>
          </div>
        </div>
      </div>
      
     <div  style={{ width: "70%" , height:"50%"}}>
                
                <Lottie animationData={anim} />
            </div>
            
      </div>
    </div>
  );
};
