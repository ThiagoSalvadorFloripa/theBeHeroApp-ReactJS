import React, { useState} from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

export default function Profile(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState(''); // começa com campo em branco
    const [value, setValue] = useState(''); // começa com campo em branco

    // pegando o id do local storage
    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault(); //para não da reload na pagina

        const data = {
            title,
            description,
            value,

        };
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/profile');
            
        } catch (error) {
            alert('Erro ao cadastrar um caso, favor tente novamente')
            
        }
    }
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

                <form onSubmit = {handleNewIncident}>
                    <input placeholder="Titulo do Caso"
                    value = { title}
                    onChange = {e => setTitle(e.target.value)}
                    />

                    <textarea placeholder = "Descrição"
                    value = { description}
                    onChange = {e => setDescription(e.target.value)}
                    />

                    <input type="number" 
                    number placeholder="Valor em reais"
                    value = { value}
                    onChange = {e => setValue(e.target.value)}
                    />

                    <button className = "button" type = "submit"> Cadastrar </button>
                </form>
            </div>
        </div>
    )
}