import React, {useState} from 'react';
import './styles.css'
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';



export default function Logon() {
  const [id, setId] = useState(''); // começa com campo em branco
  const history = useHistory();

  async function handleLogon(e) {
    e.preventDefault(); //para não da reload na pagina

    try {
      const response = await api.post('session', {id});
      
      // para ficar disponivel em toda aplicação será salvo no storege
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      //envia para outra rota
      history.push('/profile');
      
      console.log(response.data.name);
    } catch (error) {
      alert('Fallha no Login, tente novamente.');
      
    }
    
  }

  return (
    <div className="logon-container">
      <section className="form">

        <img src = {logoImg} alt = "Be The Hero" />

        <form onSubmit = {handleLogon}>
          <h1>Faça seu Login</h1>

          <input placeholder = "Seu ID"
          value = { id}
          onChange = {e => setId(e.target.value)}
          />

          <button className="button" type= "submit">Entrar</button>

          <Link className = "back-link"  to= "/register">
            <FiLogIn size = {16} color = "#E02041"/>
            Não tenho cadastro
          </Link>
        </form>

      </section>

      <img src = {heroesImg} alt = "Heroes" />

    </div>
  );
}

