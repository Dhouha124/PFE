/*import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  return (
    <div id='login'>
    <div className='container'>
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>  
        </div>
      <div className="inputs">
        <div className="input">
            <img src="public/userrr.png" alt=''/>
            <input type="text" placeholder='Nom'/>
        </div>
        <div className="input">
            <img src="public/password.png" alt=''/>
            <input type="password" placeholder='Mot de passe' />
        </div>
      </div>
      <div className="forget-password">Oublier mot de passe? <span>Cliquez ici!</span></div>
        <button className="submit" onClick={()=>{ 
          localStorage.setItem("token","hjshhi")
          navigate("/");

        }}>Login</button>
      </div>
      </div>
  )
}

export default Login;*/
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () =>{
  const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Ici, vous pouvez implémenter la logique de connexion, par exemple, une vérification côté serveur
    // Pour cet exemple, je vais simplement vérifier si les champs sont remplis
    if (username && password) {
      setLoggedIn(true);
    } else {
      alert('Veuillez remplir tous les champs!');
    }
  };

  return (
  
     <div id ='login'>
        <div className="login-container">
          <h2>Login</h2>
          
          <input
            type="text"
            placeholder="saisir votre email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder=" Saisir votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="submit" onClick={()=>{ 
            localStorage.setItem("token","hjshhi")
            navigate("/");
  
          }}>Connexion</button>
            </div>
            </div>
  );
}

export default Login;
