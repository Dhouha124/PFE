import React, { useState } from 'react';

function Type() {
  const [valeurType1, setValeurType1] = useState('');
  const [valeurType2, setValeurType2] = useState('');
  const [valeurType3, setValeurType3] = useState('');
  const [valeurType4, setValeurType4] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Traiter les données ici
    console.log("Valeur de Type 1:", valeurType1);
    console.log("Valeur de Type 2:", valeurType2);
    console.log("Valeur de Type 3:", valeurType3);
    console.log("Valeur de Type 4:", valeurType4);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '150', textAlign: 'left', backgroundColor: '#f0f8ff', padding: '40px', borderRadius: '15px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
    <div style={{ textAlign: 'center' }}>
  <h1 style={{ color: '#007bff' }}>Ajouter les Types</h1>
</div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '20px', fontSize: '18px', width: '100%' }}>
          Type d'expertise:
          <input
            type="text"
            value={valeurType1}
            onChange={(e) => setValeurType1(e.target.value)}
            style={{ marginLeft: '10px', padding: '8px', width: '80%', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '20px', fontSize: '18px', width: '100%' }}>
          Type d'examen d'expertise médico-légal:
          <input
            type="text"
            value={valeurType2}
            onChange={(e) => setValeurType2(e.target.value)}
            style={{ marginLeft: '10px', padding: '8px', width: '80%', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '20px', fontSize: '18px', width: '100%' }}>
          Nom de médecin :
          <input
            type="text"
            value={valeurType3}
            onChange={(e) => setValeurType3(e.target.value)}
            style={{ marginLeft: '10px', padding: '8px', width: '80%', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '20px', fontSize: '18px', width: '100%' }}>
        Lieu de demande :
          <input
            type="text"
            value={valeurType4}
            onChange={(e) => setValeurType4(e.target.value)}
            style={{ marginLeft: '10px', padding: '8px', width: '80%', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </label>
      </div>
      <div style={{ textAlign: 'center' }}>
  <button 
    type="submit" 
    style={{
      padding: '12px 24px',
      borderRadius: '8px',
      background: '#007bff',
      color: '#fff',
      border: 'none',
      fontSize: '18px',
      cursor: 'pointer'
    }}
  >
    Soumettre
  </button>
</div>

    </form>
  );
}

export default Type;
