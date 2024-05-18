import React, { useRef, useState } from 'react';
import './Rapport.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import rapport from "../assets/rapport.jpg";

export default function Rapport(){

const [order,setOrder]=useState(1);
  
const PdfRef = useRef() ;
const [nom, setNom] = useState('');
const [prenom, setPrenom] = useState('');
const [nomdefunts, setNomdefunts] = useState('');



const downloadPDF = () => {
  const input = PdfRef.current;
  
  html2canvas(input).then((canvas) => {
  const imgData =canvas.toDataURL('image/png') ;
    const pdf = new jsPDF('p', 'mm', 'a5', true);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const interfaceHeight = 200; // Height of interface on the first page
    const contentHeight = imgHeight - interfaceHeight; // Remaining height for content
   
    const contentImgData = canvas.toDataURL('image/png', 0, interfaceHeight, imgWidth, contentHeight);
    const interfaceImgData=canvas.toDataURL('image/png',0,0,imgWidth,interfaceHeight);
    pdf.addImage(contentImgData, 'PNG', imgX, 10, imgWidth * ratio, contentHeight * ratio);

    pdf.save('RapportExamen.pdf');
    
  });
};
  return (
    <>
   <div id='rapporto'>
    <div className='roww'>
    <div className='container mt-5 border p-5' ref={PdfRef}>
    <div className="header">
      <div className="left">
        <p> REPUBLIQUE TUNISIENNE</p>
        <p>Ministère De La Santé</p>
        <div div className='fontF'>
        <p>Hôpital Tahar Sfar Mahdia</p>
        <p>Service de Médecine Légale</p>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
    <img src={rapport} alt='logoo'
    style={{ width: "50%", maxWidth: "300px", display: "block", margin: "0 auto" }} />
</div>

      <div className="right">
        <p>الجمهوريـة التونسيـة</p>
        <p>وزارة الصحــة</p>
        <div div className='font'>
        <p>مستشفى الطاهر صفر بالمهدية</p>
        <p>قسم الطب الشرعي</p>
        </div>
      </div>
    </div>
    <div>
    <hr/>
    </div>
    <strong className='str'>S.M.L (ordre numérique) /2024         			     <span>  Mahdia, le date de l'acte 2024</span>     </strong>
    <ul className='liste'>
   <li> <strong>Pr. Abir AISSAOUI Ep. BADRAOUI :</strong> Chef de Service </li>
<li><strong>Dr. Med Amine MESRATI :</strong> Pr. Ag.</li>
<li><strong>Dr. Marwa BOUSSAID : </strong>A H U</li>
<li><strong>Dr. Yosra MAHJOUB : </strong>Médecin Spécialiste </li>
<li><strong>Dr. Meriem BOUGHATTAS : </strong>Médecin Spécialiste </li>

    </ul>
    <h1>RAPPORT D'EXAMEN MEDICO-LEGALE</h1>
    <p>Je soussignée, 
    <input type="text" className="ecrit" placeholder='(nom)' id='nom'value={nom}onChange={(e) => setNom(e.target.value)}/>,
     <input type="text" className="ecrit" placeholder='(prenom)' id='prenom' value={prenom} onChange={(e) => setPrenom(e.target.value)}/> ,
      agissant à la demande de Monsieur le Chef de Poste de (Autorités requérante) (certifie avoir personnellement) : </p>

     <p>* procédé ce jour à l'examen extérieur et à l'autopsie du corps du nommé :</p>
 
<span>
<input type="text" className="ecrit" placeholder='(nom de défunts)'
id='nomdefunts'
value={nomdefunts}
onChange={(e) => setNomdefunts(e.target.value)}
 />
</span>
      <p>
        <strong>Avec mission de :</strong>
      </p>

      <ul>
        <li> Préciser la cause de sa mort</li>
        <li> Préciser le moment de son décès</li>
        <li> Préciser si l'intéressé présente des traces de violence.</li>
        <li> Préciser tous ce qui est de nature à éclairer la justice</li>
      </ul>
      <p> * dressé de mes constatations, le présent rapport dont j'affirme, sur l'honneur, le contenu sincère et véritable.      </p>

      <h3>Rappel des faits</h3>
<p>D'après les renseignements que nous ont été communiqués, il s'agit d'un <input type="text" className="ecrit" placeholder='(ecrire)' />. âgé de <input type="number" className="ecrit3" placeholder='(Age)'/> ans, déclaré décédé le <input type="number" className="ecrit3" placeholder='(Heure)'/> vers <input type="number" className="ecrit3" placeholder='(Heure)' /> heures du matin à <input type="number" className="ecrit" placeholder='(ecire)' />. </p>

      <h1>Données de l'examen extérieur</h1>

<ul>
  <li>	Corps de corpulence <input type="text" className="ecrit" placeholder='(ecrire)' /> ; </li>
<li>	Pupilles en position intermédiaire ; </li>
<li>	Rigidité du <input type="text" className="ecrit" placeholder='(ecrire)' />  lividités postérieures, cyaniques et mobiles ;</li>
<li>	Cyanose faciale et sous unguéale ; </li>
<li>	<input type="text" className="ecrit2" placeholder='(ecrire)' /></li>
<li>	Absence, à l'examen extérieur de lésions traumatiques ayant concouru dans la survenue du décès.</li>

</ul>


<h1>Données de l'autopsie</h1>

<h4>Au niveau de la tête :</h4>

<p>-   Absence de lésions traumatiques internes à ce niveau ; os du crâne intacts ;</p>
<p>-	Encéphale d'aspect macroscopique normal, pesant ….</p>

<h4>Au niveau du cou :</h4>

<p>-	Absence de lésions traumatiques internes à ce niveau ; appareil thyro-hyoïdien, rachis cervical et moelle épinière intacts.</p>

<h4>Au niveau du thorax :</h4>

<p>-	Absence de lésions traumatiques internes à ce niveau ;</p>
<p>-	Œsophage libre ;</p>
<p>-  Trachée libre ;</p>
<p>-	Cavités pleurales <input type="text" className="ecrit" placeholder='(ecrire)' /> ; poumons pesant <input type="number" className="ecrit3" placeholder='(ecrire)' />gr à droite et <input type="number" className="ecrit3" placeholder='(ecrire)' />gr à gauche;</p>   
<p>-	Péricarde ; cœur pesant   g ; valves cardiaques (valve mitrale à cm, valve tricuspide à  cm, valve aortique à cm et valve pulmonaire à cm) ; artères coronaires présentant de stries lipidiques ; épaisseur du myocarde à  cm au niveau du ventricule gauche aminci, à cm au niveau du ventricule droit et à   au niveau du septum ; myocarde d'aspect homogène, siège d'une zone de souffrance ancienne postéro-septale.</p>


<h4>Au niveau de l'abdomen et du petit bassin :</h4>
<p>-	Absence de lésions traumatiques à ce niveau ;</p>
<p>-	Foie pesant g sans anomalies à l'examen macroscopique ; vésicule biliaire et voies biliaires alithiasiques ;</p>
<p>-	Rate pesant  g sans anomalies macroscopiques ;</p>
<p>-	Estomac contenant une bouillie alimentaire sans éléments suspects visuellement identifiables vide ; muqueuse gastrique irrité (aspect de la gastrite de stress de l'agonie) ;</p>   
<p>-	Pancréas pesant <input type="number" className="ecrit3" placeholder='(ecrire)' />gr ;</p>
<p>-	Reins pesant <input type="number" className="ecrit3" placeholder='(ecrire)' /> gr à droite et <input type="number" className="ecrit3" placeholder='(ecrire)' />gr. à gauche ;</p>
<p>-	Surrénales d'aspect macroscopique hémorragique/normal ;</p>
<p>-	Intestins d'aspect normal ;</p>
<p>-	Appendice sain et en place ;</p>
<p>-	Vessie renfermant des urines claires ;</p>

<h3>Prélèvements effectués</h3>
<p>Dans la perspective de réaliser des analyses toxicologiques et anatomo-cytologiques, il a été procédé aux prélèvements suivants : </p>

<ul>
  <li>	cœur, poumon, foie, rate, pancréas et reins.</li>
  <li>	Sang, urine et contenu gastrique</li>
</ul>
<p>Ces prélèvements sont acheminés aux laboratoires correspondants de l'Hôpital Universitaire Tahar Sfar de Mahdia / sont  actuellement gardés à la disposition des autorités requérantes.</p>


<h2>Conclusions</h2>

<p>
1/ Compte tenu des commémoratifs et des données de l'examen extérieur et de l'autopsie, la mort du nommé nom de défunt<br />

2/ Il n'y a pas à l'examen extérieur et à l'autopsie de lésions traumatiques rentrant dans le mécanisme du décès.  
</p>
<div className="foot">
Fait à Mahdia <input type="date" className="ecrit4" placeholder='(le date )' /><br></br> 
<input type="texte" className="ecrit4" placeholder='(Médecin qui fait l`action)' /> 

</div>
 </div>
</div>




  <button className='batouna' onClick={downloadPDF}>Download PDF</button>
  

  </div>
    </>
  );
};