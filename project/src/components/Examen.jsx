import React, { useState, useEffect } from "react";
import * as Components from './Components';
import axios from 'axios';

function Team() {
    const [signIn, toggle] = React.useState(true);
    const [text, setText] = React.useState('');
    const [nomPatient, setNomPatient] = React.useState('');
    const [prenomPatient, setPrenomPatient] = React.useState('');
    const [datenaissancePatient, setDatenaissancePatient] = React.useState('');
    const [cinPatient, setCinPatient] = React.useState('');
    const [telePatient, setTelePatient] = React.useState('');
    const [adressePatient, setAdressePatient] =React.useState('');
    const [datedemande, setDatedemande] =React.useState('');
    const [filter, setFilter] = React.useState('');
    const [Cindefunt,setCindefunt]= React.useState('');
    const [Nomdefunt, setNomdefunt]= React.useState('');
    const [Datedefunt, setDatedefunt]= React.useState('');
    const [typeExpertise, settypeExpertise]= React.useState('');
    const [typeExamen, settypeExamen]= React.useState('');



    const [doctors, setDoctors] = useState([]); // State to store doctors
    const [demandes, setDemande] = useState([]); // State to store doctors
    const [expertises,setExpertise]=useState([]);
    const [examen,setExamen]=useState([]);
    const handleChange = (event) => {
      setText(event.target.value);
    };

    const handleAutopsySubmit = async (event) => {
      event.preventDefault();
      const autopsyData = {
          cindefunt: Cindefunt,
          nomdefunt: Nomdefunt,
          datedefunt: Datedefunt,
          datedemande: datedemande,
          medecin: event.target.medecin.value,
          lieu: event.target.lieu.value,
      };
      try {
          await axios.post('http://localhost:3000/autopsie/add', autopsyData);
          alert('Autopsy data submitted successfully');
      } catch (error) {
          console.error('Error submitting autopsy data', error);
      }
  };

  const handleExaminationSubmit = async (event) => {
      event.preventDefault();
      const examinationData = {
          nomPatient: nomPatient,
          prenomPatient: prenomPatient,
          datenaissancePatient: datenaissancePatient,
          cinPatient: cinPatient,
          telePatient: telePatient,
          adressePatient: adressePatient,
          typeExpertise: typeExpertise,
          typeExamen: typeExamen, // Ensure typeExamen is included here
          details: text,
      };
      try {
          await axios.post('http://localhost:3000/medicolegal/add', examinationData);
          alert('Examination data submitted successfully');
      } catch (error) {
          console.error('Error submitting examination data', error);
      }
  };



    useEffect(() => {
        // Fetch doctors when component mounts
        fetchDoctors();
        fetchDemande();
        fetchExpertise();
        fetchExamen();

    }, []);

    const fetchDoctors = async () => {
        try {
            const response = await fetch('http://localhost:3000/type1/getall'); // Assuming this endpoint fetches the list of doctors
            const data = await response.json();
            // Update doctors state with fetched data

            setDoctors(data); // Update doctors state with fetched data
        } catch (error) {
            console.error('Error fetching doctors:', error);
        }
    };
    const fetchDemande = async () => {
      try {
          const response = await fetch('http://localhost:3000/type2/getall'); // Assuming this endpoint fetches the list of doctors
          const data1 = await response.json();
          // Update doctors state with fetched data

          setDemande(data1); // Update doctors state with fetched data
      } catch (error) {
          console.error('Error fetching doctors:', error);
      }
  };
  
  const fetchExpertise = async () => {
    try {
        const response = await fetch('http://localhost:3000/type3/getall'); // Assuming this endpoint fetches the list of doctors
        const data2 = await response.json();
        // Update doctors state with fetched data

        setExpertise(data2); // Update doctors state with fetched data
    } catch (error) {
        console.error('Error fetching doctors:', error);
    }
};
   
    const fetchExamen = async () => {
      try {
          const response = await fetch('http://localhost:3000/type4/getall'); // Assuming this endpoint fetches the list of doctors
          const data3 = await response.json();
          // Update doctors state with fetched data

          setExamen(data3); // Update doctors state with fetched data
      } catch (error) {
          console.error('Error fetching doctors:', error);
      }
  };
    
     return(
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form onSubmit={handleAutopsySubmit}>
                 <Components.Div>
                    
                    <Components.Input
                      type="text"
                      placeholder="recherche..."
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                      
                      />
                  
                  </Components.Div>
                     <Components.Title>Autopsie</Components.Title>
                     <Components.Label htmlFor="inputField">Date de demande :</Components.Label>

<Components.Input 
type='text' 
placeholder='cin' 
name='cindefunt'
 value={Cindefunt}
 onChange={(e) => setCindefunt(e.target.value)} 
 /> <Components.Label htmlFor="inputField">cin de defunt :</Components.Label>

 <Components.Input 
 type='text' 
 placeholder='nomdefunt' 
 name='nomdefunt'
  value={Nomdefunt}
  onChange={(e) => setNomdefunt(e.target.value)} 
  /> <Components.Label htmlFor="inputField">nom de defunt:</Components.Label>

  <Components.Input 
  type='date' 
  placeholder='Date de demande' 
  name='datedemande'
   value={Datedefunt}
   onChange={(e) => setDatedefunt(e.target.value)} 
   />
                     <Components.Label htmlFor="inputField">Nom de medecin:</Components.Label>
            <Components.Select>
                <Components.Option >--choisir nom</Components.Option>
                {doctors.map(doctor => (
                    <Components.Option >{doctor.name}</Components.Option>
                ))}
            </Components.Select>
            <Components.Label htmlFor="inputField">Lieu de demande  :</Components.Label>
            <Components.Select>
                <Components.Option >--choisir Lieu de demande  </Components.Option>{demandes.map(x => (
                    <Components.Option >{x.demande}</Components.Option>
                ))}
            </Components.Select>
                     <Components.Label htmlFor="inputField">Date de demande :</Components.Label>

                     <Components.Input 
                     type='date' 
                     placeholder='Date de demande' 
                     name='datedemande'
                      value={datedemande}
                      onChange={(e) => setDatedemande(e.target.value)} 
                      />

                    
                     <Components.Button>Enregistrer</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form onSubmit={handleExaminationSubmit}>
                      <Components.Title>Examen Medico-Légale</Components.Title>
                      <Components.Label htmlFor="inputField">Nom :</Components.Label>

                      <Components.Input 
                      type='text' 
                      placeholder='Nom de patient'
                      name='nomPatient'
                      value={nomPatient}
                      onChange={(e) => setNomPatient(e.target.value)} 
                      />
                      <Components.Label htmlFor="inputField">Prenom :</Components.Label>

                      <Components.Input 
                      type='text'
                       placeholder='Prenom de patient'
                       name='prenomPatient'
                      value={prenomPatient}
                      onChange={(e) => setPrenomPatient(e.target.value)} 
                       />
                      <Components.Label htmlFor="inputField">Date de naissance :</Components.Label>

                      <Components.Input type='date' 
                      placeholder='Date de Naissance' 
                      name='datenaissancePatient'
                      value={datenaissancePatient}
                      onChange={(e) => setDatenaissancePatient(e.target.value)} 
                      />

                      <Components.Label htmlFor="inputField">Carte d'identité :</Components.Label>

                      <Components.Input
                       type='number' 
                      placeholder=' CIN' 
                      name='cin'
                      value={cinPatient}
                      onChange={(e) => setCinPatient(e.target.value)} 
                      />
                      <Components.Label htmlFor="inputField">Numéro de telephone  :</Components.Label>

                      <Components.Input 
                      type='number' 
                      placeholder='Télephone' 
                      name='tele'
                      value={telePatient}
                      onChange={(e) => setTelePatient(e.target.value)} 
                      />
                      <Components.Label htmlFor="inputField">Adresse de patient  :</Components.Label>

                      <Components.Input type='text' 
                       placeholder='Adresse' 
                       name='adresse'
                      value={adressePatient}
                      onChange={(e) => setAdressePatient(e.target.value)} 
                      />
                     
                     <Components.Label htmlFor="inputField">Type d'expertise  :</Components.Label>
            <Components.Select>
                <Components.Option value={typeExpertise} onChange={(e) => settypeExpertise(e.target.value)} >--choisir type d'expertise </Components.Option>{expertises.map(y=> (
                    <Components.Option >{y.expertise}</Components.Option>
                ))}
            </Components.Select>
            <Components.Label htmlFor="inputField">Types d'examens médico-légaux   :</Components.Label>
            <Components.Select>
                <Components.Option value={typeExamen}onChange={(e) => settypeExamen(e.target.value)}  >--choisir type d'examen médico-légaux</Components.Option>{examen.map(z=> (
                    <Components.Option >{z.examen}</Components.Option>
                ))}
            </Components.Select>
                      <Components.Textarea
                      type='text'
      value={text}
      onChange={handleChange}
      rows={4} // Nombre de lignes par défaut
      cols={50} // Nombre de colonnes par défaut
      placeholder="Entrez les informations ici..."
    />

                      <Components.Button>Enregistrer</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>L'autopsie!</Components.Title>
                     <Components.Paragraph>
                     L'autopsie est un examen médical approfondi réalisé après la mort pour déterminer la cause et les circonstances du décès. 
                     Elle comprend l'inspection externe et interne du corps, ainsi que des analyses toxicologiques et anatomopathologiques.
                      L'autopsie est essentielle pour établir des diagnostics précis, 
                     clarifier les causes de décès et fournir des informations cruciales pour les enquêtes médico-légales et les procédures judiciaires.
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Option
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title> Examen médico-légal !</Components.Title>
                          <Components.Paragraph>
                       
                       L'examen médico-légal est une procédure médicale effectuée par des médecins légistes pour analyser un corps humain et déterminer les causes et circonstances du décès. Cela implique un examen externe et interne du corps .
                        Ces examens fournissent des preuves médicales cruciales pour les enquêtes judiciaires, contribuant ainsi à établir la vérité et à rendre justice.
                          </Components.Paragraph>
                    
                           <Components.GhostButton onClick={() => toggle(false)}>
                            Option
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

        </Components.Container>
                  )
                };
                export {Team};