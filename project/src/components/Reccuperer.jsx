import React, { useState, useEffect } from 'react';

function Password() {
  const [username, setUsername] = useState('');
  const [nouveaumtp, setPassword] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/user/getall')
      .then(res => res.json())
      .then(data => setUsername(data.username))
      .catch(err => console.error('Erreur lors de la récupération du nom d\'utilisateur :', err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch('http://localhost:3000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nouveaumtp })
    })
    .then(() => {
      console.log('Mot de passe envoyé avec succès');
      
      setPassword('');
    })
    .catch(err => console.error('Erreur lors de l\'envoi du mot de passe :', err));
  };
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '150 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Nouveau mot de passe</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label style={{ marginBottom: '10px', width: '100%' }}>
         Nom Utilisateur :
          <output
            htmlFor="username"
            value={username}
            style={{ marginLeft: '10px', width: '100%' }}
          >
            {username}
          </output>
        </label>
        <label style={{ marginBottom: '10px', width: '100%' }}>
          Mot de passe :
          <input
            type="password"
            value={nouveaumtp}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ marginLeft: '10px', width: '100%' }}
          />
        </label>
        <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}>Envoyer</button>
      </form>
    </div>
  );
}

export default Password;
