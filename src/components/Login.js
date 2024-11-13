import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/PokedexLogin.css';
import axios from 'axios';
import Swal from 'sweetalert2';

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const BASE_URL = "http://localhost:8080";
  const navigate = useNavigate(); 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const jsonParam = {
        "username": username,
        "password": password
    };
    try {
        const responseLogin = await axios.post(`${BASE_URL}/auth/login`, jsonParam);
        localStorage.setItem('token', responseLogin.data.token);
        localStorage.setItem('userId', responseLogin.data.user.id);
        
        Swal.fire({
            title: 'Login efetuado com sucesso!',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            navigate('/');
          });

    } catch (error) {
        if (error.response.status === 403) {
            Swal.fire({
                title: 'Falha na autenticação!',
                text: "Usuário ou senha não estão corretos.",
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }
  };

  return (
    <div className="pokedex-container">
      <div className="pokedex-card">
        <div className="pokedex-header">
          <div className="light big-light"></div>
          <div className="small-lights">
            <div className="light red-light"></div>
            <div className="light yellow-light"></div>
            <div className="light green-light"></div>
          </div>
        </div>
        <h3 className="pokedex-title">Pokédex Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Usuário</label>
            <input
              type="username"
              className="form-control pokedex-input"
              id="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Senha</label>
            <input
              type="password"
              className="form-control pokedex-input"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn pokedex-btn">Entrar</button>
          <Link to="/register" className="btn pokedex-btn mt-2">Sou novo no jogo</Link>

        </form>
      </div>
    </div>
  );
}

export default Login;
