import { useState } from 'react';
import { getPokemon } from '../../services';

const Main = () => {
    const [inputSearch, setInputSearch] = useState([]);

    const [pokemon, setPokemon] = useState();

    const handleInputSearch = (e) => {
        setInputSearch(e.target.value);
    };

    const handleSearch = (e) => {
        console.log(e);
        e.preventDefault();
        getPokemon(inputSearch).then(res => {
            console.log(res);
            setPokemon(res.data);
        });
    }

    const handleFavorites = (pokemon) => {
        let pokemonArrays = [];

        const favorites = localStorage.getItem('pokemon');

        if (favorites) {
            pokemonArrays = JSON.parse(favorites);
        }

        pokemonArrays.push(pokemon);

        localStorage.setItem('pokemon', JSON.stringify(pokemonArrays));
    }

    return (
        <div className='main'>
            <section>
                <h1>Pokemons</h1>
                <div>
                    <p>Search a pokemon</p>

                    <input onChange={(e) => {
                        handleInputSearch(e);
                    }} />

                    <button onClick={(e) => { handleSearch(e) }}>Search!</button>
                </div>
                <div className='main__pokemon-container'>
                    {pokemon && (
                        <div>
                            <img className='main__pokemon-image' src={pokemon.sprites.front_default} alt={pokemon.name} />
                            <div className='main__pokemon-header' >
                                <h2 className='main__pokemon-name'>{pokemon.name}</h2>
                                <p className='main__pokemon-order'>#{pokemon.order}</p>
                                <p className='main__pokemon-weight'>Weight: {pokemon.weight}</p>
                            </div>

                            <p className='main__pokemon-stats'>Stats</p>
                            <ul className='main__pokemon-list'>
                                {pokemon.stats && pokemon.stats.map(stat => (
                                    <li className='main__pokemon-list-item' key={stat.stat.name}>

                                        <span> {stat.stat.name}: {stat.base_stat}</span>
                                    </li>
                                ))}
                            </ul>

                            <i onClick={() => handleFavorites(pokemon)}>ADD to favorites</i>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )

}
export default Main;  