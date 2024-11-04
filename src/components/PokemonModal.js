import React from 'react';
import '../css/PokemonModal.css';

const PokemonModal = ({ isOpen, onRequestClose, pokemon }) => {
    return (
        <div className={`modal ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content modal-pokemon">
                    <div className="modal-header">
                        <h5 className="modal-title color-title">{pokemon.name}</h5>
                        <button type="button" className="close" onClick={onRequestClose} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p><strong className='color-title'>Cor: </strong>
                            {pokemon.colors.map(color => (
                                color.name + '/'
                            ))}
                        </p>
                        <p><strong className='color-title'>Tipo: </strong> 
                            {pokemon.types.map(type => (
                                type.name + '/'
                            ))}
                        </p>
                        <p><strong className='color-title'>Habitat: </strong> {pokemon.habitat.name}</p>
                        <p><strong className='color-title'>Peso: </strong> {pokemon.weight}</p>
                        <p><strong className='color-title'>Base de experiência: </strong>{pokemon.base_experience}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onRequestClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonModal;
