import React, { useState } from 'react';
import "./LoginMtp.css";
const EmailMtp= ({ onCancel }) => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email envoyé pour la récupération de mot de passe:',email );
  };

  return (
    <div className='login-container'>
      <h2>Mot de passe oublié ?</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom Utilisateur :</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">email :</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ textAlign: 'center' }}>
  <button 
    type="submit"
    style={{
      padding: '12px 24px',
      borderRadius: '40%', // Rendre le bouton circulaire
      background: 'rgba(75, 177, 206, 0.845); ',
      color: '#fff',
      border: 'none',
      fontSize: '15px',
      cursor: 'pointer',
      marginRight: '10px' // Ajouter un espacement entre les boutons
    }}
  >
    Envoyer
  </button>
  <button 
    type="button"
    onClick={onCancel}
    style={{
      padding: '12px 24px',
      borderRadius: '40%', // Rendre le bouton circulaire
      background: 'rgba(75, 177, 206, 0.845); ',
      color: '#fff',
      border: 'none',
      fontSize: '15px',
      cursor: 'pointer',
      marginRight: '10px' // Ajouter un espacement entre les boutons
    }}
  >
    Annuler
  </button>
 
<div>
  <a href='/' style={{ lineHeight: '48px', textDecoration: 'none', color: '#007bff' }}>login</a>
</div>
</div>

      </form>
    </div>
  );
};

export default EmailMtp;
