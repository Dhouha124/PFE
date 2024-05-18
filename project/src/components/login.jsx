import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../components/Usercontext";
import './Login.css';
import { Link } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUserRole } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
    
        const response = await fetch('http://localhost:3000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password  }),
        });
    
        const data = await response.json();
        if (data.success) {
            setUserRole(data.role);
            navigate('/accueil'); // Navigate based on role
        } else {
            alert('Nom d\'utilisateur ou mot de passe incorrect.');
          }
  };





  return (
  
     <div id ='login'>
        <div className="login-container">
        <form onSubmit={handleLogin}>

          <h2>Login</h2>
        <div>
          <input
            type="text"
            placeholder="saisir votre email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          </div>
          <div>
          <input
            type="password"
            placeholder=" Saisir votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <button className="submit" >Connexion</button>
          </form>
           <div className="forget-password">
   mot de passe Oublier? 
  <span>
    <Link to="/doudou">Cliquez ici!</Link>
  </span>
</div>
            </div>
           
            </div>
  );
}

export default Login;
