import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function Profile(){
    return (
        <div className = "newIncident-container">
            <div className = "content">
                <section>
                    <img src = {logoImg} alt = "Be The Hero" />

                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para lhe ajudar</p>

                    <Link className = "back-link"  to= "/profile">
                        <FiArrowLeft size = {16} color = "#E02041"/>
                        Voltar para Home
                    </Link>
                </section>

                <form>
                    <input placeholder="Titulo do Caso"/>
                    <textarea placeholder = "Descrição"/>
                    <input type="number" number placeholder="Valor em reais"/>
                        

                    <button className = "button" type = "submit"> Cadastrar </button>
                </form>
            </div>
        </div>
    )
}