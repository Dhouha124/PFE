import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export const Outputdefunt = () => {
  const location = useLocation();
  const donneesInitiales = location.state.donnees;
  const [donnees, setDonnees] = useState(donneesInitiales); // Utiliser useState pour gérer les données

  const containerStyle = {
    display: "flex",
    padding: "80px",
  };

  const tableStyle = {
    borderCollapse: "collapse",
    width: "150%", // Ajustez la largeur du tableau selon vos besoins
    marginTop: "20px", // Ajoute une marge en haut pour l'éloigner du haut de la page
  };

  const thStyle = {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "12px",
    backgroundColor: "#b7f8d8",
  };

  const tdStyle = {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "12px",
  };

  const handleDelete = (index) => {
    // Créez une copie des données actuelles
    const updatedDonnees = [...donnees];
    updatedDonnees.splice(index, 1); // Supprime l'élément à l'index spécifié
    // Mettre à jour les données avec la nouvelle copie
    setDonnees(updatedDonnees);
  };

  return (
    <div style={containerStyle}>
      <div>
        <h8 style={{ display: "flex", margin: "20px", textAlign: "center", justifyContent: "center", color: "#00796b", fontSize: "35px" }}>Détails du défunt</h8>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Numéro de CIN</th>
              <th style={thStyle}>Nom</th>
              <th style={thStyle}>Prénom</th>
              <th style={thStyle}>Date de Naissance</th>
              <th style={thStyle}>Date de Décès</th>
              <th style={thStyle}>Lieu de Décès</th>
              <th style={thStyle}>Actions</th> {/* Nouvelle colonne pour les actions */}
            </tr>
          </thead>
          <tbody>
            {donnees.map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.cin}</td>
                <td style={tdStyle}>{item.nom}</td>
                <td style={tdStyle}>{item.prenom}</td>
                <td style={tdStyle}>{item.dateNaissance}</td>
                <td style={tdStyle}>{item.dateDeces}</td>
                <td style={tdStyle}>{item.lieuDeces}</td>
                <td style={tdStyle}>
                  <button onClick={() => handleDelete(index)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <a href="/about" style={{ position: "absolute", bottom: "10px", left: "10px", fontSize: "34px", color: "#00796b", textDecoration: "underline" }}>Retour</a>
    </div>
  );
};
