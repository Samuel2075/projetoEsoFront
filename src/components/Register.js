import React, { useState } from 'react';
import '../css/PokedexLogin.css';

function Register() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email, 'Password:', password);
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
        <h3 className="pokedex-title">Pokédex Cadastro</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Usuário</label>
            <input
              type="text"
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
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nome</label>
            <input
              type="text"
              className="form-control pokedex-input"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn pokedex-btn">Entrar</button>
          <button type="submit" className="btn pokedex-btn mt-2">Sou novo no jogo</button>
        </form>
      </div>
    </div>
  );
}

export default Login;