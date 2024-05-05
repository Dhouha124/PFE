import React from "react";
import * as Components from './Components';

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





    const handleChange = (event) => {
      setText(event.target.value);
    };
    
     return(
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
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
                     <Components.Option disabled>--choisir nom</Components.Option>
      <Components.Option value="1">Abir Aissaoui Badraoui</Components.Option>
      <Components.Option value="2">Mohamed Amine Mesrati</Components.Option>
      <Components.Option value="3">Maroua Boussaid</Components.Option>
      <Components.Option value="4">Meriem Boughattas</Components.Option>
      </Components.Select>

                     <Components.Label htmlFor="inputField">Date de demande :</Components.Label>

                     <Components.Input 
                     type='date' 
                     placeholder='Date de demande' 
                     name='datedemande'
                      value={datedemande}
                      onChange={(e) => setDatedemande(e.target.value)} 
                      />

                     <Components.Label htmlFor="inputField">Lieu de demande  :</Components.Label>
                     <Components.Select>
                     <Components.Option disabled>--choisir lieu</Components.Option>
      <Components.Option value="1">Tribunal de Première Instance de Mahdia</Components.Option>
      <Components.Option value="2">Tribunal Cantonal de Mahdia </Components.Option>
      <Components.Option value="3">Tribunal Cantonal de Boumerdes</Components.Option>
      <Components.Option value="4">Poste de la Police de Ksour Essef</Components.Option>
      <Components.Option value="5">Poste de la Police de Chebba</Components.Option>
      <Components.Option value="6">Poste de la Police Judiciaire de Mahdia</Components.Option>
      <Components.Option value="7">Poste de la Garde Nationale de Chorbène</Components.Option>
      <Components.Option value="8">Tribunal Cantonal d'Eljem.</Components.Option>


    </Components.Select>
                    
                     <Components.Button>Enregistrer</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
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
                     <Components.Option disabled>--choisir service</Components.Option>
      <Components.Option value="1">Agression sexuelle</Components.Option>
      <Components.Option value="2">Violance</Components.Option>
      <Components.Option value="3">Les accidents de circulation</Components.Option>
      <Components.Option value="4">Responsabilités medicale</Components.Option>
      </Components.Select>

      <Components.Label htmlFor="inputField">Types d'examens médico-légaux  :</Components.Label>
                     <Components.Select>
                     <Components.Option disabled>--choisir service</Components.Option>
      <Components.Option value="1">Examen externe</Components.Option>
      <Components.Option value="2">Examen interne </Components.Option>
      <Components.Option value="3">Toxicologie</Components.Option>
      <Components.Option value="4">Examens complémentaires</Components.Option>
      <Components.Option value="4">Anatomopathologie</Components.Option>


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