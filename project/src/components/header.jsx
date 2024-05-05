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
   /* <header id="header">
      <div className='main'>
    <video src={video}autoPlay loop muted />
</div>
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
              <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a 
                  href="#Service"
                  className="btn btn-custom btn-lg page-scroll">
                  voir plus 
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>*/
  );
};
