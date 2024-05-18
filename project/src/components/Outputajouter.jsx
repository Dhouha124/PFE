import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

export const Outputajouter = () => {
  const location = useLocation();
  const donneesInitiales = location.state.donnees;
  const [donnees, setDonnees] = useState(donneesInitiales);

  const containerStyle = {
    display: "flex",
    padding: "50px",
  };

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    marginTop: "45px",
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

  const buttonStyle = {
    backgroundColor: "#f44336",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const handleDelete = (index) => {
    const newData = [...donnees];
    newData.splice(index, 1); // Supprimer l'élément correspondant à l'index
    setDonnees(newData); // Mettre à jour les données avec la nouvelle liste
  };

  return (
    <div style={containerStyle}>
      <div>
        <h2 style={{ display: "flex", margin: "30px", textAlign: "center", justifyContent: "center", color: "#00796b", fontSize: "35px" }}>Tableau des utilisateurs</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Numéro de carte d'identité</th>
              <th style={thStyle}>Nom</th>
              <th style={thStyle}>Prénom</th>
              <th style={thStyle}>Date de naissance</th>
              <th style={thStyle}>Role</th>
              <th style={thStyle}>Grade</th>
              <th style={thStyle}>Numéro de téléphone</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Code Pin</th>
              <th style={thStyle}>Mot de passe</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
          {donnees.map((item, index) => (
            <tr key={index}>
              <td style={tdStyle}>{item.cin}</td>
              <td style={tdStyle}>{item.nom}</td>
              <td style={tdStyle}>{item.prenom}</td>
              <td style={tdStyle}>{item.dateNaissance}</td>
              <td style={tdStyle}>{item.role}</td>
              <td style={tdStyle}>{item.grade}</td>
              <td style={tdStyle}>{item.phone}</td>
              <td style={tdStyle}>{item.email}</td>
              <td style={tdStyle}>{item.codePin}</td>
              <td style={tdStyle}>{item.password}</td>
              <td style={tdStyle}>
                <button style={buttonStyle} onClick={() => handleDelete(index)}>Supprimer</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Outputajouter;
