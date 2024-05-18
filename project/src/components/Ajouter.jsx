import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./Ajouter.css";

const Ajouter = () => {
  const navigate = useNavigate();
  const [donnees, setDonnees] = useState([]);
  const [cin, setCin] = useState('');
  const [username, setUsername] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [role, setrole] = useState('');
  const [grade, setGrade] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [codePin, setCodePin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      username,
       password ,
        role,
        cin,
        codePin,
         nom,
          prenom ,
          dateNaissance, 
          grade,
          phone ,
          email ,
         
    };
    setDonnees([...donnees, formData]);
    try {
      const response = await fetch("http://localhost:3000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log(data.message);

    // Réinitialiser les champs du formulaire après soumission
    setCin("");
    setUsername("");
    setNom("");
    setPrenom("");
    setDateNaissance("");
    setrole("");
    setGrade("");
    setPhone("");
    setEmail("");
    setCodePin("");
    setPassword("");
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

  useEffect(() => {
    const storedData = localStorage.getItem("AjouterData");
    if (storedData) {
      setDonnees(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("AjouterData", JSON.stringify(donnees));
  }, [donnees]);

  const handleTableaupage = () => {
    navigate("/tableau", { state: { donnees } });
  };

  return (
    <div id="ajouter">
      <div className="user-form-container">
        <div className="form-header">
          <h2>Ajouter utilisateur</h2>
        </div>
        <div className="user-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Numéro de carte d'identité:</label>
              <input
                type="number"
                placeholder="Saisir le numéro de CIN"
                value={cin}
                onChange={(e) => setCin(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Nom utilisateur:</label>
              <input
                type="text"
                placeholder="Saisir Nom d'utlisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Nom:</label>
              <input
                type="text"
                placeholder="Saisir le nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Prénom:</label>
              <input
                type="text"
                placeholder="Saisir le prénom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Date de naissance:</label>
              <input
                type="date"
                value={dateNaissance}
                onChange={(e) => setDateNaissance(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>role:</label>
              <select
                value={role}
                onChange={(e) => setrole(e.target.value)}
              >
                <option value="">Sélectionnez un role</option>
                <option value="chef_service">Chef service</option>
                <option value="Medecin">Médecin</option>
                <option value="secretaire">Secrétaire</option>
                <option value="Directeur_general">Directeur général</option>
                <option value="Responsable_administrative">Responsable administrative</option>
                <option value="Agent_administrative">Agent administrative</option>
                <option value="Agent_d'alvéole">Agent d'alvéole</option>
              </select>
            </div>
            {role === 'Medecin' && (
              <div className="form-group">
                <label>Grade:</label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                >
                  <option value="">Sélectionnez un grade</option>
                  <option value="Professeur universitaire">Professeur universitaire</option>
                  <option value="Médecin légiste">Médecin légiste</option>
                  <option value="Assistant hospitalo-universitaire">Assistant hospitalo-universitaire</option>
                  <option value="Interne">Interne</option>
                  <option value="Chef de role">Chef de role</option>
                  <option value="Directeur d'un institut médico-légal">Directeur d'un institut médico-légal</option>
                </select>
              </div>
            )}
            <div className="form-group">
              <label>Numéro de téléphone:</label>
              <input
                type="tel"
                placeholder="Saisir le numéro de téléphone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                placeholder="Saisir l'email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>code PIN:</label>
              <input
                type="text"
                placeholder="Saisir le code PIN "
                value={codePin}
                onChange={(e) => setCodePin(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Mot de passe:</label>
              <input
                type="password"
                placeholder="Saisir le mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Enregistrer</button>
            <button type="reset">Annuler</button>
          </form>
        </div>
      </div>

      {/* Lien vers la page TableauPage */}
      <div style={{ position: 'absolute', fontSize: '30px', top: '200px', right: '200px' }}>
  <button onClick={handleTableaupage} style={{ backgroundColor: '#40E0D0', color: 'white', borderRadius: '10px', padding: '15px 32px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px' }}>Voir le tableau des utilisateurs</button>
</div>



    </div>
  );
};

export default Ajouter;
