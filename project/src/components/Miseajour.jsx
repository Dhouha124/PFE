import React, { useState } from "react";
import "./Miseajour.css";

const AddUser = ({ onUpdateUser }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    service: "",
    grade: "",
    telephone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleServiceChange = (e) => {
    setUser({ ...user, service: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifiez si les champs requis sont remplis
    if (
      !user.firstName ||
      !user.lastName ||
      !user.dateOfBirth ||
      !user.service ||
      !user.grade ||
      !user.telephone ||
      !user.email ||
      !user.password
    ) {
      alert("Veuillez remplir tous les champs");
      return;
    }
    // Appelez la fonction de rappel pour mettre à jour l'utilisateur
    onUpdateUser(user);
    // Réinitialisez le formulaire après la mise à jour de l'utilisateur
    setUser({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      service: "",
      grade: "",
      telephone: "",
      email: "",
      password: "",
    });
  };

  return (
    <div id="update">
      <div className="container">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nom:</label>
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Prénom:</label>
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Date de naissance:</label>
        <input
          type="date"
          name="dateOfBirth"
          value={user.dateOfBirth}
          onChange={handleChange}
        />
      </div>
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
        <label>Téléphone:</label>
        <input
          type="tel"
          name="telephone"
          value={user.telephone}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Mot de passe:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <div className="btn">
      <button type="submit">Mettre à jour</button>
      <button type="reset">Annuler</button>

      </div>
    </form>
    </div>
    </div>
  );
};

export default AddUser;
