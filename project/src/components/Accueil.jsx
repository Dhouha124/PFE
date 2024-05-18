import React from "react";
import video from "../assets/video.mp4";
export const Header = () => {
  return (
    <div className='main'>
    <video src={video} autoPlay loop muted />

 <div className="titre">
<h1> Chaque autopsie raconte une histoire, une vérité silencieuse</h1>
  <p> Gérer efficacement les autopsies et les expertises médico-légales pour une administration simplifiée</p>
 
 <div>
 <a 
                  href="/service"
                  className="btn btn-custom btn-lg page-scroll">
                  voir plus 
                </a>{" "}
                </div>
                </div>
 </div>
  );
};
