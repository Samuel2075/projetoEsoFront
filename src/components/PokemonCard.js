import { React, useState } from 'react';
import '../css/PokemonCard.css';
import PokemonModal from './PokemonModal';

const PokemonCard = ({ pokemon }) => {
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCaptured, setIsCaptured] = useState(pokemon.user != null);

    const openModal = (pokemon) => {
        setSelectedPokemon(pokemon);
        setIsModalOpen(true);
    };

    const capturePokemon = (pokemon) => {
        console.log(`Capturando Pokémon: ${pokemon.name}`);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPokemon(null);
    };

    const statusClass = isCaptured ? "captured-text" : "free-text";
    const statusText = isCaptured ? "Capturado" : "Livre";

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
