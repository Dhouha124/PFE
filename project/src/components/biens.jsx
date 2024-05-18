import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const GestionDesBiens = () => {
  const [CinDefunt, setCinDefunt] = useState("");
  const [nomDefunt, setNomDefunt] = useState("");
  const [prenomDefunt, setPrenomDefunt] = useState("");
  const [bijoux, setBijoux] = useState("");
  const [argent, setArgent] = useState("");
  const [autresBiens, setAutresBiens] = useState("");
  const [donnees, setDonnees] = useState([]);
  const navigate = useNavigate();

  const handleSubmit =async (event) => {
    event.preventDefault();
    const formData = {
      CinDefunt,
      nomDefunt,
      prenomDefunt,
      bijoux,
      argent,
      autresBiens,
    };
    setDonnees([...donnees, formData]);
    try {
      const response = await fetch("http://localhost:3000/biens/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      

    const data = await response.json();

      console.log("Données enregistrées :", formData);
    // Réinitialiser le formulaire après soumission
    setCinDefunt("");
    setNomDefunt("");
    setPrenomDefunt("");
    setBijoux("");
    setArgent("");
    setAutresBiens("");
  
}
catch (error) {
  console.error("Error submitting form:", error);
}
};
  

  useEffect(() => {
    const storedData = localStorage.getItem("DataBiens");
    if (storedData) {
      setDonnees(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("DataBiens", JSON.stringify(donnees));
  }, [donnees]);

  const handleDataBiens = () => {
    navigate("/tableau-enregistrements", { state: { donnees } });
  };

  return (
    <div id="GestionDesBiens">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <h5>Gestion des biens du défunt</h5>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="CinDefunt">cin du défunt :</label>
                <input
                  type="text"
                  id="CinDefunt"
                  value={CinDefunt}
                  onChange={(e) => setCinDefunt(e.target.value)}
                  className="form-control"
                  placeholder="Entrez cin du défunt"
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
                <label htmlFor="prenomDefunt">Prénom du défunt :</label>
                <input
                  type="text"
                  id="prenomDefunt"
                  value={prenomDefunt}
                  onChange={(e) => setPrenomDefunt(e.target.value)}
                  className="form-control"
                  placeholder="Entrez le prénom du défunt"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="bijoux">Bijoux :</label>
                <textarea
                  id="bijoux"
                  value={bijoux}
                  onChange={(e) => setBijoux(e.target.value)}
                  className="form-control"
                  rows="4"
                  placeholder="Entrez les bijoux du défunt"
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="argent">Argent :</label>
                <textarea
                  id="argent"
                  value={argent}
                  onChange={(e) => setArgent(e.target.value)}
                  className="form-control"
                  rows="4"
                  placeholder="Entrez l'argent du défunt"
                  required
                ></textarea>
              </div>
             
              <div className="form-group">
                <label htmlFor="autresBiens">Autres biens :</label>
                <textarea
                  id="autresBiens"
                  value={autresBiens}
                  onChange={(e) => setAutresBiens(e.target.value)}
                  className="form-control"
                  rows="4"
                  placeholder="Entrez d'autres biens du défunt"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn-pri">Enregistrer</button>
              <button type="reset" className="btn-sec" >Annuler</button>
              <button onClick={handleDataBiens} style={{ fontSize:"25",display: "block", margin: "auto 300",backgroundColor:"steelblue" }}>Voir les détails</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}; 
