import React, { useState } from "react";

export const GestionDesOrganes = () => {
  const [id, setId] = useState("");
  const [typeOrganne, setTypeOrganne] = useState("");
  const [lieuPrelevement, setLieuPrelevement] = useState("");
  const [datePrelevement, setDatePrelevement] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Id du organne :", id);
    console.log("Type d'organne :", typeOrganne);
    console.log("Lieu de prélèvement :", lieuPrelevement);
    console.log("Date de prélèvement :", datePrelevement);
    // Réinitialiser le formulaire après soumission
    setId("");
    setTypeOrganne("");
    setLieuPrelevement("");
    setDatePrelevement("");
  };

  return (
    <div id="GestionDesOrganes">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <h2>Enregistrer un organne </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="id">Id :</label>
                <input
                  type="text"
                  id="id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="form-control"
                  placeholder="Entrez le ID du organne"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="typeOrganne">Type d'organne :</label>
                <select
                  id="typeOrganne"
                  value={typeOrganne}
                  onChange={(e) => setTypeOrganne(e.target.value)}
                  className="form-control"
                  required
                >
                  <option value="">Sélectionnez le type d'organne</option>
                  <option value="Pieds">Pieds</option>
                  <option value="Orteils">Orteils</option>
                  <option value="Main">Main</option>
                  <option value="Doigts">Doigts</option>
                  {/* Ajoutez d'autres options ici */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="lieuPrelevement">Lieu de prélèvement :</label>
                <input
                  type="text"
                  id="lieuPrelevement"
                  value={lieuPrelevement}
                  onChange={(e) => setLieuPrelevement(e.target.value)}
                  className="form-control"
                  placeholder="Entrez le lieu de prélèvement de l'organe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="datePrelevement">Date de prélèvement :</label>
                <input
                  type="date"
                  id="datePrelevement"
                  value={datePrelevement}
                  onChange={(e) => setDatePrelevement(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn-primary">Enregistrer</button>
              <button type="reset" className="btn-second">Annuler</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

