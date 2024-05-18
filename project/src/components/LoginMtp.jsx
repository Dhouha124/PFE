import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoginMtp.css";
const LoginMtp= ({ onCancel }) => {
  const [username, setNom] = useState('');
  const [codePin, setCodePin] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const response = await fetch('http://localhost:3000/user/codepin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, codePin  }),
    });

    const data = await response.json();
    if (data.success) {
        navigate('/useradmin'); // Navigate based on role
    } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect.');
      }
    

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
            value={username}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="pin">Code Pin :</label>
          <input
            type="text"
            id="codePin"
            value={codePin}
            onChange={(e) => setCodePin(e.target.value)}
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
  <a href='/email' style={{ lineHeight: '48px', textDecoration: 'none', color: '#007bff' }}>recuperer avec email</a>
</div>
<div>
  <a href='/' style={{ lineHeight: '48px', textDecoration: 'none', color: '#007bff' }}>login</a>
</div>
</div>

      </form>
    </div>
  );
};

export default LoginMtp;
