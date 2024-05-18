import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import anim2 from "./anim2.json";

export const About = () => {
  const [donnees, setDonnees] = useState([]);
  const [cin, setCin] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [dateDeces, setDateDeces] = useState("");
  const [lieuDeces, setLieuDeces] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      cin,
      nom,
      prenom,
      dateNaissance,
      dateDeces,
      lieuDeces,
    };

    setDonnees([...donnees, formData]);

    try {
      const response = await fetch("http://localhost:3000/defunt/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log(data.message);

      setCin("");
      setNom("");
      setPrenom("");
      setDateNaissance("");
      setDateDeces("");
      setLieuDeces("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("defuntData");
    if (storedData) {
      setDonnees(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("defuntData", JSON.stringify(donnees));
  }, [donnees]);

  const handleViewDetails = () => {
    navigate("/details", { state: { donnees } });
  };

  return (
    <div id="About">
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <h7>Enregistrer un défunt</h7>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="cin">Numéro de CIN :</label>
              <input
                type="text"
                id="cin"
                value={cin}
                onChange={(e) => setCin(e.target.value)}
                className="form-control"
                placeholder="Entrez le numéro de CIN du défunt"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="nom">Nom :</label>
              <input
                type="text"
                id="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="form-control"
                placeholder="Entrez le nom du défunt"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="prenom">Prénom :</label>
              <input
                type="text"
                id="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className="form-control"
                placeholder="Entrez le prénom du défunt"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dateNaissance">Date de naissance :</label>
              <input
                type="date"
                id="dateNaissance"
                value={dateNaissance}
                onChange={(e) => setDateNaissance(e.target.value)}
                className="form-control"
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
                placeholder="Entrez le lieu de décès du défunt"
                required
              />
            </div>
            <div className="form-group"></div>
            <button type="submit" className="btn-primary">
              Enregistrer
            </button>
            <button type="reset" className="btn-second">
              Annuler
            </button>
          </form>
        </div>
        <div className="col-xs-12 col-md-6">
        <h7 style={{ opacity: 0.0001 }}>Vérifier les données enregistrées :</h7>

          {/* Bouton pour afficher les détails */}
          <button onClick={handleViewDetails} style={{ fontSize:"25",display: "block", margin: "auto 300",backgroundColor:"steelblue" }}>Voir les détails</button>

          <div style={{ width: "40%", height: "50%" }}>
            <Lottie animationData={anim2} />
          </div>
        </div>
      </div>
    </div>

  );
};

