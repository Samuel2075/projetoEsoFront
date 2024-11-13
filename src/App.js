import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonList from './components/PokemonList';
import FilterForm from './components/FilterForm';

function App() {
    const BASE_URL = "https://damp-waters-81236-5574034b183b.herokuapp.com";
    const [pokemons, setPokemons] = useState([]);
    const [colors, setColors] = useState([]);
    const [types, setTypes] = useState([]);
    const [habitats, setHabitats] = useState([]);
    const [page, setPage] = useState(0);
    const [jsonFilter, setJsonFilter] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                console.error("Token não encontrado");
                return;
            }

            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            };

            try {
                let responsePokemons;
                
                if (jsonFilter) {
                    const updatedFilter = { ...jsonFilter, page };
                    responsePokemons = await axios.post(`${BASE_URL}/pokemon/filter`, updatedFilter, config);
                } else {
                    responsePokemons = await axios.get(`${BASE_URL}/pokemon/${page}/10`, config);
                }
                
                setPokemons(responsePokemons.data);
                console.log(pokemons);

                if (!colors.length) {
                    const responseColors = await axios.get(`${BASE_URL}/colors`, config);
                    setColors(responseColors.data);
                }
                if (!types.length) {
                    const responseTypes = await axios.get(`${BASE_URL}/types`, config);
                    setTypes(responseTypes.data);
                }
                if (!habitats.length) {
                    const responseHabitats = await axios.get(`${BASE_URL}/habitats`, config);
                    setHabitats(responseHabitats.data);
                }
            } catch (error) {
                console.error('Erro ao buscar Pokémon:', error);
            }
        };

        fetchData();
    }, [page, jsonFilter, colors.length, habitats.length, types.length]);

    const handleFilter = (filterData) => {
        const { name, color, type, habitat, minWeight, maxWeight, minBaseExperience, maxBaseExperience } = filterData;

        const jsonPost = {
            name: name || undefined,
            color: color || undefined,
            type: type || undefined,
            habitat: habitat || undefined,
            minWeight: minWeight || undefined,
            maxWeight: maxWeight || undefined,
            minBaseExperience: minBaseExperience || undefined,
            maxBaseExperience: maxBaseExperience || undefined,
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
