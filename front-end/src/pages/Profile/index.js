import React, {useEffect, useState} from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';


export default function Profile(){
    //armazena dados da tabelas
    const [incidents, setIncidents] = useState([]);
    // pegando nome ong do local storage
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    const history = useHistory(); // para navegar entre as rotas


    // carrega os icident assim que entra na pagina
    useEffect(() => {
        api.get('profile', {
            //pegando o id do header
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers:{
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (error) {
            alert('Erro ao deletar um incident, tente novamente');
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
    <div className  = "profile-container">
        <header>
            <img src = {logoImg} alt=" Be The Hero"/>
            <h2>Bem vinda, {ongName}</h2>
            <Link className = 'button' to = "/incident/new">Cadastrar novo caso</Link>
            <button onClick = {handleLogout} type = 'button'>
                <FiPower size = {18} color = "#E02041"/>
            </button>
        </header>

        <h1>Casos Cadastrados</h1>

        <ul>
            {incidents.map(incident => (
                // Key serve para ajudar nas atualizações
                <li key= {incident.id}>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                    <button onClick = {() => handleDeleteIncident(incident.id)} type = "button">
                        <FiTrash2 size = {20} color = "#a8a8b3"/>
                    </button>
                </li>
            ))}

        </ul>

    </div>
)
}
