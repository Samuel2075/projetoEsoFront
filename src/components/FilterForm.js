import React, { useState } from 'react';
import '../css/FilterForm.css';

const FilterForm = ({ onFilter, colors, types, habitats }) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [color, setColor] = useState('');
    const [minWeight, setMinWeight] = useState('');
    const [maxWeight, setMaxWeight] = useState('');
    const [minBaseExperience, setMinBaseExperience] = useState('');
    const [maxBaseExperience, setMaxBaseExperience] = useState('');
    const [habitat, setHabitat] = useState('');
    const [pokemonsCapturados, setPokemonsCapturados] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilter({ name, color, type, habitat, minWeight, maxWeight, minBaseExperience, maxBaseExperience, pokemonsCapturados });
    };

    return (
        <form className="filter-form-container" onSubmit={handleSubmit}>
            
            <div className="form-group">
                <input
                    type="text"
                    className="filter-input"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="form-group">
                <input
                    type="number"
                    className="filter-input"
                    placeholder="Peso mínimo"
                    value={minWeight}
                    onChange={(e) => setMinWeight(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input
                    type="number"
                    className="filter-input"
                    placeholder="Peso máximo"
                    value={maxWeight}
                    onChange={(e) => setMaxWeight(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input
                    type="number"
                    className="filter-input"
                    placeholder="Base experience mínima"
                    value={minBaseExperience}
                    onChange={(e) => setMinBaseExperience(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input
                    type="number"
                    className="filter-input"
                    placeholder="Base experience máxima"
                    value={maxBaseExperience}
                    onChange={(e) => setMaxBaseExperience(e.target.value)}
                />
            </div>
            
            <div className="form-group">
                <select
                    className="filter-select"
                    onChange={(e) => setColor(e.target.value)}
                    value={color}
                >
                    <option value="">Cor</option>
                    {colors.map((color, index) => (
                        <option key={index} value={color.name}>{color.name}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <select
                    className="filter-select"
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                >
                    <option value="">Tipo</option>
                    {types.map((type, index) => (
                        <option key={index} value={type.name}>{type.name}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <select
                    className="filter-select"
                    onChange={(e) => setHabitat(e.target.value)}
                >
                    <option value="">Habitat</option>
                    {habitats.map((habitat, index) => (
                        <option key={index} value={habitat.name}>{habitat.name}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <select
                    className="filter-select"
                    onChange={(e) => setPokemonsCapturados(e.target.value)}
                    defaultValue="0"
                >
                    <option value="0">Pokemons capturados</option>
                    <option key={1} value="1">Seus pokemons</option>
                    <option key={2} value="2">Todos capturados</option>
                    
                </select>
            </div>
            <button type="submit" className="filter-button">Filtrar</button>
        </form>
    );
};

export default FilterForm;
