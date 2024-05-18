import React, { useState } from 'react';

function Useradmin() {
  const [motdepasse, setMotdepasse] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vous pouvez envoyer les données du formulaire à votre backend ici
    console.log('Nom d\'utilisateur:', motdepasse);
   
    // Réinitialisation des champs après l'envoi
    setMotdepasse('');

  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '150 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Nouveau mot de passe</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label style={{ marginBottom: '10px', width: '100%' }}>
          Nouveau mot de passe :
          <output
            htmlFor="motdepasse"
            value={motdepasse}
            style={{ marginLeft: '10px', width: '100%' }}
          >
            {motdepasse}
          </output>
        </label>
        
        <a href='/' style={{ lineHeight: '48px', textDecoration: 'none', color: '#007bff' }}>login</a>

      </form>
    </div>
  );
}

export default Useradmin;
