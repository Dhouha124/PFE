import React, { useState, useEffect } from "react";

export const GestionDesOrganes = () => {
  const [donnees, setDonnees] = useState([]);
  const [cin, setCin] = useState("");
  const [typeOrganne, setTypeOrganne] = useState("");
  const [datePrelevement, setDatePrelevement] = useState("");
  const [organnesEnregistres, setOrgannesEnregistres] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      cin,
      typeOrganne,
      datePrelevement,
    };

    setDonnees([...donnees, formData]);

    try {
      const response = await fetch("http://localhost:3000/organne/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log(data.message);

      // Update organnesEnregistres state with the new organ
      setOrgannesEnregistres([...organnesEnregistres, formData]);

      setCin("");
      setTypeOrganne("");
      setDatePrelevement("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/organne/getall");
        const data = await response.json();
        setOrgannesEnregistres(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="GestionDesOrganes">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <h2>Enregistrer organe</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="id">CIN du défunt :</label>
                <input
                  type="text"
                  id="Cin"
                  value={cin}
                  onChange={(e) => setCin(e.target.value)}
                  className="form-control"
                  placeholder="Entrez le CIN du défunt"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="typeOrganne">Type d'organe :</label>
                <select
                  id="typeOrganne"
                  value={typeOrganne}
                  onChange={(e) => setTypeOrganne(e.target.value)}
                  className="form-control"
                  required
                >
                  <option value="">Sélectionnez le type d'organe</option>
                  <option value="Pieds">Pieds</option>
                  <option value="Orteils">Orteils</option>
                  <option value="Main">Main</option>
                  <option value="Doigts">Doigts</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="datePrelevement">Date de prélèvement :</label>
                <input
                  type="date"
                  id="datePrelevement"
                  value={datePrelevement}
                  onChange={(e) => setDatePrelevement(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn-primary">
                Enregistrer
              </button>
              <button type="reset" className="btn-second">
                Annuler
              </button>
            </form>
          </div>
          <div className="col-xs-12 col-md-6">
            <h2>Organes enregistrés</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>CIN du défunt</th>
                  <th>Type d'organe</th>
                  <th>Date de prélèvement</th>
                </tr>
              </thead>
              <tbody>
                {organnesEnregistres.map((organe, index) => (
                  <tr key={index}>
                    <td>{organe.cin}</td>
                    <td>{organe.typeOrganne}</td>
                    <td>{organe.datePrelevement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
