import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const getPokemons = () => {
    return axios.get(BASE_URL);
};

const getPokemon = (pokemon) => {
    return axios.get(`${BASE_URL}/${pokemon}`);
};

export { getPokemons, getPokemon };


// const pokemonService = () => {
//     const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

//     const getPokemons = () => {
//         return axios.get(BASE_URL);
//     };

//     return { getPokemons };
// };

// export default pokemonService;