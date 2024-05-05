
import React, { useState } from "react";
import Lottie from "lottie-react";
import anim2 from "./anim2.json"

export const About = () => {
  const [cin, setCin] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [dateDeces, setDateDeces] = useState("");
  const [lieuDeces, setLieuDeces] = useState("");
  const [lieuDemande, setLieuDemande] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vous pouvez envoyer les données du défunt à votre serveur ou effectuer toute autre action requise
    console.log("Numéro CIN:", cin);
    console.log("Nom:", nom);
    console.log("Prenom:", prenom);
    console.log("Date de naissance:", dateNaissance);
    console.log("Date de décès:", dateDeces);
    console.log("Lieu  de décès:", lieuDeces);
    console.log("lieu de demande:", lieuDemande);
    // Réinitialiser le formulaire après soumission
    
    
    setCin("");
    setNom("");
    setPrenom("");
    setDateNaissance("");
    setDateDeces("");
    setLieuDeces("");
    setLieuDemande("");
  };

  return (
    <div id="About">
      
            
    
      <div className="container" style={{ display: "flex", flexDirection: "columun" }}>
     
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
                <label htmlFor="prenom"> Prenom:</label>
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
                <label htmlFor="lienActeDeces">Lieu  de décès :</label>
                <input
                  type="text"
                  id="lieuDeces"
                  value={lieuDeces}
                  onChange={(e) => setLieuDeces(e.target.value)}
                  className="form-control"
                  placeholder="Entrez le lieu de décès  du défunt"
                  required
                />
              </div>
              <div className="form-group">
                

<label for="inputField">Lieu de demande :</label>
<select id="lieuDemande" value={lieuDemande} onChange={(e)=> setLieuDemande(e.target.value)}>
    <option disabled>-- choisir lieu --</option>
    <option value="1">Tribunal de Première Instance de Mahdia</option>
    <option value="2">Tribunal Cantonal de Mahdia</option>
    <option value="3">Tribunal Cantonal de Boumerdes</option>
    <option value="4">Poste de la Police de Ksour Essef</option>
    <option value="5">Poste de la Police de Chebba</option>
    <option value="6">Poste de la Police Judiciaire de Mahdia</option>
    <option value="7">Poste de la Garde Nationale de Chorbène</option>
    <option value="8">Tribunal Cantonal d'Eljem.</option>
</select>

              </div>
              <button type="submit" className="btn-primary">Enregistrer</button>
              <button type="reset" className="btn-second" >Annuler</button>
            </form>
          </div>
        </div>
      <div  style={{ width: "40%" , height:"50%"}}>
                
                <Lottie animationData={anim2} />
            </div>
      </div>
    </div>
  );
};
