import React, { useState } from "react";

export const GestionDesBiens = () => {
  const[CinDefunt,setCinDefunt]=useState("");
  const [nomDefunt, setNomDefunt] = useState("");
  const [prenomDefunt, setPrenomDefunt] = useState("");
  const [bijoux, setBijoux] = useState("");
  const [argent, setArgent] = useState("");
  const [documents, setDocuments] = useState("");
  const [autresBiens, setAutresBiens] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vous pouvez envoyer les données des biens du défunt à votre serveur ou effectuer toute autre action requise
    console.log("Cin du defunt:",CinDefunt);
    console.log("Nom du défunt:", nomDefunt);
    console.log("Prénom du défunt:", prenomDefunt);
    console.log("Bijoux:", bijoux);
    console.log("Argent:", argent);
    console.log("Documents:", documents);
    console.log("Autres biens:", autresBiens);
    // Réinitialiser le formulaire après soumission
    setCinDefunt("");
    setNomDefunt("");
    setPrenomDefunt("");
    setBijoux("");
    setArgent("");
    setDocuments("");
    setAutresBiens("");
  };

  return (
    <div id="GestionDesBiens">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
          <h5>Gestion les biens du défunt</h5>
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
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
