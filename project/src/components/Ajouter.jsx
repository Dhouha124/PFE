import React, { useState } from 'react';

import './Admin.css';
const Ajouter = () => {
  const [user, setUser] = useState({
    prenom: '',
    nom: '',
    email: '',
    password: '',
    datenaissance:'',
    service:'',
    phone:'',
    password:'',
    grade:'',
    cin:'',

  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
      
    }));
   
  };
 
  const handleServiceChange = (e) => {
    setUser({ ...user, service: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted user:', user);
    // Ajoutez ici la logique pour traiter les données utilisateur
  };
  

  return (
    
    <div className="user-form-container">
        <div className="form-header">
          <h2>Ajout utilisateur</h2>
        </div>
      <div className="user-form">
      
        <div className="form-group">
          <label>Numéro de carte d'identité nationale:</label>
          <input
            type="number"
            placeholder='saisir cin'
            maxLength="8"
            name="cin"
            value={user.cin}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Nom:</label>
          <input
          placeholder='Saisir un nom'
            type="text"
            name="nom"
            value={user.nom}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Prénom:</label>
          <input
            type="text"
            placeholder='Saisir un prénom'
            name="prenom"
            value={user.prenom}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Date de naissance:</label>
          <input
            type="date"
            name="datenaissance"
            value={user.datenaissance}
            onChange={handleChange}
          />
          </div>
        <div className="form-group">
          <label>Email:</label>
          <input
          placeholder='Saisir un email'
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Numéro de telephone:</label>
          <input
            type="tel"
            name="phone"
            placeholder="Numéro de téléphone "
            value={user.phone}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
        
        <div>
      <label>Service:</label>
      <select
        name="service"
        value={user.service}
        onChange={handleServiceChange}
        className="form-control"
      >
        <option value="">Sélectionnez un service</option>
        <option value="service1">Chef service</option>
        <option value="Medecin">Médecin</option>
        <option value="service3">Secrétaire</option>
        <option value="service4">Directeur général</option>
        <option value="service5">Responsable administrative</option>
        <option value="service6">Agent administrative</option>
        <option value="service7">Agent d'alvéole</option>
      </select>

      {user.service === 'Medecin' && (
        <div>
          <label>Grade:</label>
          <select
            name="grade"
            value={user.grade}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Sélectionnez un grade</option>
            <option value="grade1">Professeur universitaire</option>
            <option value="grade2">Médecin légiste</option>
            <option value="grade3">Assistant hospitalo-universitaire</option>
            <option value="grade4">Interne</option>
            <option value="grade5">Chef de service</option>
            <option value="grade6">Directeur d'un institut médico-légal</option>
          </select>
        </div>
      )}
      </div>
      
          <div className="form-group">
          <label>Mot de passe:</label>
          <input
            type="password"
            name="password"
            placeholder='saisir un mot de passe'
            value={user.password}
            onChange={handleChange}
          />
        </div>
       <div className="btn">
        <button type="submit" onClick={handleSubmit}>Annuler</button>

          <button type="submit" onClick={handleSubmit}>Enregistrer</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Ajouter;
