import React from "react";
import { useLocation } from "react-router-dom";

const Outputalveole = () => {
  const location = useLocation();
  const donnees = location.state.donnees;

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px' }}>Détails de l'enregistrement :</h2>
    
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#f2f2f2' }}>
            <tr>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Numéro de l'alvéole</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Nom du défunt</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Date de décès</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Lieu de décès</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Cause de décès</th>
            </tr>
          </thead>
         
          <tbody>
          {donnees.map((item, index) => (
             <tr key={index}>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.numero}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.nomDefunt}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.dateDeces}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.lieuDeces}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.causeDeces}</td>
            </tr>
             ))}
          </tbody>
        </table>
    
    </div>
  );
};

export default Outputalveole;
