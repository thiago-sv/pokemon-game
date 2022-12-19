
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Battle = () => {
    const [pokemon, setPokemon] = useState(null);
    const [pokemon2, setPokemon2] = useState(null);

    const [pokemonSelecionado, setPokemonSelecionado] = useState(null);
    const [pokemonSelecionado2, setPokemonSelecionado2] = useState(null);

    const [id, setId] = useState(2);
    const [id2, setId2] = useState(3);


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

    const atacar2 = () => {
        setPokemonSelecionado(pokemonSelecionado - 10);
    };

    const selecionaProximoPokemon = () => {
        setId(id + 1);
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPokemon(data);
            });
    };

    const selecionaProximoPokemon2 = () => {
        setId2(id2 + 1);
        fetch(`https://pokeapi.co/api/v2/pokemon/${id2}`)
            .then((response) => response.json())
            .then((data) => {
                setPokemon2(data);
            });
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
                        <p>Ataque: {pokemon.stats[1].base_stat}</p>
                        <p>Defesa: {pokemon.stats[2].base_stat}</p>
                        <p>Ataque Especial: {pokemon.stats[3].base_stat}</p>
                        <p>Defesa Especial: {pokemon.stats[4].base_stat}</p>
                        <p>Velocidade: {pokemon.stats[5].base_stat}</p>
                        <p>Experiência: {pokemon.base_experience}</p>
                        <p>Altura: {pokemon.height}</p>
                        <p>Peso: {pokemon.weight}</p>
                        <p>Tipo: {pokemon.types[0].type.name}</p>
                        <p>Habilidade: {pokemon.abilities[0].ability.name}</p>
                        <button onClick={() => setPokemonSelecionado(pokemon.stats[0].base_stat)}>SELECIONAR</button>
                        <button onClick={selecionaProximoPokemon}>SELECIONAR PROXIMO POKEMON</button>

                    </div>
                )}
                <button onClick={atacar}>Atacar</button>

            </div>

            <div>
                <h2>Pokemon Adversário</h2>
                {pokemon2 && (
                    <div>
                        <img src={pokemon2.sprites.front_default} alt={pokemon2.name} />
                        <p>{pokemon2.name}</p>
                        <p>HP: {pokemonSelecionado2}</p>

                        <p>Ataque: {pokemon2.stats[1].base_stat}</p>
                        <p>Defesa: {pokemon2.stats[2].base_stat}</p>
                        <p>Ataque Especial: {pokemon2.stats[3].base_stat}</p>
                        <p>Defesa Especial: {pokemon2.stats[4].base_stat}</p>
                        <p>Velocidade: {pokemon2.stats[5].base_stat}</p>
                        <p>Experiência: {pokemon2.base_experience}</p>
                        <p>Altura: {pokemon2.height}</p>
                        <p>Peso: {pokemon2.weight}</p>
                        <p>Tipo: {pokemon2.types[0].type.name}</p>
                        <p>Habilidade: {pokemon2.abilities[0].ability.name}</p>
                        <button onClick={() => setPokemonSelecionado2(pokemon2.stats[0].base_stat)}>SELECIONAR</button>
                        <button onClick={selecionaProximoPokemon2}>SELECIONAR PROXIMO POKEMON</button>

                    </div>
                )}
            </div>
            <button onClick={atacar2}>ATACAR</button>
            <Link to="/resultado">
                <button>RESULTADO</button>
            </Link>
        </div>
    );
}

export default Battle;

