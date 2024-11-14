import { React, useState } from 'react';
import '../css/PokemonCard.css';
import PokemonModal from './PokemonModal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const PokemonCard = ({ pokemon }) => {
    const BASE_URL = "https://damp-waters-81236-5574034b183b.herokuapp.com";
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCaptured, setIsCaptured] = useState(pokemon.user != null);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (!token) {
        navigate('/login');
        return;
    }

    const openModal = (pokemon) => {
        setSelectedPokemon(pokemon);
        setIsModalOpen(true);
    };

    const capturePokemon = async (pokemon) => {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        };
        const params = {
            "idPokemon": pokemon.id,
            "idUser": userId
        }
        let responsePokemons;
        let data;
        responsePokemons = await axios.post(`${BASE_URL}/user/pokemon/capture`, params, config);
        data = JSON.parse(responsePokemons.data);
        setIsCaptured(data.error);
        Swal.fire({
            title: data.message,
            icon: data.error ? 'error' : 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            navigate('/');
          });
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPokemon(null);
    };

    let statusClass = isCaptured ? "captured-text" : "free-text";
    let statusText = isCaptured ? "Capturado" : "Livre";

    return (
        <div className="col-md-4 mb-4">
            <div className="card card-pokemon">
                <img src={pokemon.front_default} className="card-img-top img-pokemon" alt={pokemon.name} />
                <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    <h5>Tipo</h5>
                    {pokemon.types.map((type, index) => (
                        <p key={index} className="card-text">{type.name}</p>
                    ))}
                    <h5>Peso</h5>
                    <p>{pokemon.weight}</p>
                    
                    <button 
                        className="btn btn-primary b-none filter-button mt-2" 
                        onClick={() => openModal(pokemon)}
                    >
                        Detalhe
                    </button>
                    <button 
                        className="btn btn-primary b-none filter-button mt-2" 
                        onClick={() => capturePokemon(pokemon)}
                        disabled={isCaptured}
                    >
                        Capturar
                    </button>
                    <h5 className={statusClass}>{statusText}</h5>
                </div>
            </div>
            {selectedPokemon && (
                <PokemonModal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    pokemon={selectedPokemon}
                />
            )}
        </div>
    );
};

export default PokemonCard;
