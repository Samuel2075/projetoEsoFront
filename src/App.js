import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonList from './components/PokemonList';
import FilterForm from './components/FilterForm';

function App() {
    const BASE_URL = "http://localhost:8080";
    const [pokemons, setPokemons] = useState([]);
    const [colors, setColors] = useState([]);
    const [types, setTypes] = useState([]);
    const [habitats, setHabitats] = useState([]);
    const [page, setPage] = useState(0);
    const [jsonFilter, setJsonFilter] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let responsePokemons;
                if (jsonFilter) {
                    const updatedFilter = { ...jsonFilter, page };
                    responsePokemons = await axios.post(`${BASE_URL}/pokemon/filter`, updatedFilter);
                } else {
                    responsePokemons = await axios.get(`${BASE_URL}/pokemon/${page}/10`);
                }
                setPokemons(responsePokemons.data);
                if (!colors.length) {
                    const responseColors = await axios.get(`${BASE_URL}/colors`);
                    setColors(responseColors.data);
                }
                if (!types.length) {
                    const responseTypes = await axios.get(`${BASE_URL}/types`);
                    setTypes(responseTypes.data);
                }
                if (!habitats.length) {
                    const responseHabitats = await axios.get(`${BASE_URL}/habitats`);
                    setHabitats(responseHabitats.data);
                }
            } catch (error) {
                console.error('Erro ao buscar Pokémon:', error);
            }
        };

        fetchData();
    }, [page, jsonFilter, colors, habitats, types]);

    const handleFilter = (filterData) => {
        const {
            name, color, type, habitat,
            minWeight, maxWeight,
            minBaseExperience, maxBaseExperience
        } = filterData;

        const jsonPost = {
            name: name || null,
            color: color || null,
            type: type || null,
            habitat: habitat || null,
            minWeight: minWeight || 0,
            maxWeight: maxWeight || 0,
            minBaseExperience: minBaseExperience || 0,
            maxBaseExperience: maxBaseExperience || 0,
            page: 0,
            size: 10
        };

        setJsonFilter(jsonPost);
        setPage(0);
    };

    const clickPagination = (isNext) => {
        const newPage = isNext ? page + 1 : Math.max(page - 1, 0);
        setPage(newPage);
    };

    return (
        <div className="container-pokedex">
                <h1 className="pokedex-title">Pokédex</h1>
                <div>
                    <div className="row">
                        <div className="col-md-12">
                            <FilterForm onFilter={handleFilter} colors={colors} types={types} habitats={habitats} />
                        </div>
                    </div>
                    <div className="row">
                        <PokemonList pokemons={pokemons} clickPagination={clickPagination} />
                    </div>
                </div>
            </div>
    );
}

export default App;
