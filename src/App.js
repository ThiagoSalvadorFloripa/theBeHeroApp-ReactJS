import React from 'react';
import './global.css';
import { FiLogIn } from 'react-icons/fi';

import heroesImg from './assets/heroes.png';
import logoImg from './assets/logo.svg';


function App() {
  return (
    <div className="logon-container">
      <section className="form">

        <img src = {logoImg} alt = "Be The Hero" />

        <form>
          <h1>Faça seu Login</h1>

          <input placeholder = "Seu ID"/>

          <button type= "submit">Entrar</button>

          <a href = "/register">
            <FiLogIn size = {16} color = "#E02041"/>
            Não tenho cadastro
          </a>
        </form>


      </section>

      <img src = {heroesImg} alt = "Heroes" />

    </div>
  );
}

export default App;
