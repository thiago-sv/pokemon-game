
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Battle = () => {
    const [pokemon, setPokemon] = useState(null);
    const [pokemon2, setPokemon2] = useState(null);
    const [pokemonSelecionado, setPokemonSelecionado] = useState(null);
    const [pokemonSelecionado2, setPokemonSelecionado2] = useState(null);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/1')
            .then((response) => response.json())
            .then((data) => {
                setPokemon(data);
            });
    }, []);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/2')
            .then((response) => response.json())
            .then((data) => {
                setPokemon2(data);
            });
    }, []);

    const atacar = () => {
        setPokemonSelecionado2(pokemonSelecionado2 - 10);
    };

    return (
        <div>
            <h1>Batalha</h1>
            <div>
                <h2>Seu Pokemon</h2>
                {pokemon && (
                    <div>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <p>{pokemon.name}</p>
                        <p>HP: {pokemonSelecionado}</p>
                        <button onClick={() => setPokemonSelecionado(pokemon.stats[0].base_stat)}>SELECIONAR</button>
                    </div>
                )}
            </div>
            <div>
                <h2>Pokemon Adversário</h2>
                {pokemon2 && (
                    <div>
                        <img src={pokemon2.sprites.front_default} alt={pokemon2.name} />
                        <p>{pokemon2.name}</p>
                        <p>HP: {pokemonSelecionado2}</p>
                        <button onClick={() => setPokemonSelecionado2(pokemon2.stats[0].base_stat)}>SELECIONAR</button>
                    </div>
                )}
            </div>
            <button onClick={atacar}>ATACAR</button>
            <Link to="/resultado">
                <button>RESULTADO</button>
            </Link>
        </div>
    );
}

export default Battle;

