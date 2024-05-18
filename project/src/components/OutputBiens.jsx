import React from "react";
import { useLocation } from "react-router-dom";

export const OutputBiens = () => {
  const location = useLocation();
  const donnees = location.state.donnees;

  const containerStyle = {
    display: "flex",
    padding:"80px",
  
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
              <th style={thStyle}>Bijoux</th>
              <th style={thStyle}>Argents</th>
              <th style={thStyle}>autre biens</th>
            </tr>
          </thead>
          <tbody>
         
            {donnees.map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.CinDefunt}</td>
                <td style={tdStyle}>{item.nomDefunt}</td>
                <td style={tdStyle}>{item.prenomDefunt}</td>
                <td style={tdStyle}>{item.bijoux}</td>
                <td style={tdStyle}>{item.argent}</td>
                <td style={tdStyle}>{item.autresBiens}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      

    </div>
  );
};
export default OutputBiens;
