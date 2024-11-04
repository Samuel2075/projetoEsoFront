import React from 'react';
import '../css/PokemonCard.css'

const PokemonCard = ({ pokemon }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card card-pokemon">
                <img src={pokemon.front_default} className="card-img-top img-pokemon" alt={pokemon.name} />
                <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    <h5>Tipo</h5>
                    {pokemon.types.map(type => (
                        <p className="card-text">{type.name}</p>
                    ))}
                    <h5>Peso</h5>
                    <p>{pokemon.weight}</p>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
