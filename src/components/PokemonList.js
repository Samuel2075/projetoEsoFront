import React, { useState } from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons, clickPagination }) => {

    const handlePrevious = (e) => {
        e.preventDefault();
        setIsNext(false);
        clickPagination(false);
    };

    const handleNext = (e) => {
        e.preventDefault();
        setIsNext(true);
        clickPagination(true);
    };

    return (
        <div className="container">
            <div className="row">
                {pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
            <div className="row">
                <div className="col-md-12 footer">
                    <form className="filter-form-container">
                        <button type="button" onClick={handlePrevious} className="filter-button">
                            Anterior
                        </button>
                        <button type="button" onClick={handleNext} className="filter-button">
                            Próximo
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PokemonList;
