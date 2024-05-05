import React, { useState } from "react";

const Modifier = ({ user, updateUser }) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(editedUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cin">CIN :</label>
        <input
          type="text"
          id="cin"
          name="cin"
          value={editedUser.cin}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={editedUser.nom}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="prenom">Prénom :</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={editedUser.prenom}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="dateNaissance">Date de naissance :</label>
        <input
          type="date"
          id="dateNaissance"
          name="dateNaissance"
          value={editedUser.dateNaissance}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="telephone">Téléphone :</label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          value={editedUser.telephone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={editedUser.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="confirmEmail">Confirmer Email :</label>
        <input
          type="email"
          id="confirmEmail"
          name="confirmEmail"
          value={editedUser.confirmEmail}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="motDePasse">Mot de passe :</label>
        <input
          type="password"
          id="motDePasse"
          name="motDePasse"
          value={editedUser.motDePasse}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default Modifier;
