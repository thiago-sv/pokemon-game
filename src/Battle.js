
import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import Resultado from './Resultado';


const Battle = () => {
    const [pokemon, setPokemon] = useState(null);
    const [pokemon2, setPokemon2] = useState(null);

    const [pokemonSelecionado, setPokemonSelecionado] = useState(null);
    const [pokemonSelecionado2, setPokemonSelecionado2] = useState(null);

    const [id, setId] = useState(2);
    const [id2, setId2] = useState(3);
    const [resultado, setResultado] = useState(null);
    const navigate = useNavigate();



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
        if (pokemonSelecionado2 && pokemonSelecionado) {
            setPokemonSelecionado2(pokemonSelecionado2 - 10);
        }
    };

    const atacar2 = () => {
        if (pokemonSelecionado2 && pokemonSelecionado) {
            setPokemonSelecionado(pokemonSelecionado - 10);
        }
    };

    const selecionaProximoPokemon = () => {
        setId(id + 1);
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPokemon(data);
            });
    };
    const selecionaPokemonAnterior = () => {
        if (id > 1) {
            setId(id - 1);
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    setPokemon(data);
                });
        }
    };

    const selecionaPokemonAnterior2 = () => {
        if (id2 > 1) {
            setId2(id2 - 1);
            fetch(`https://pokeapi.co/api/v2/pokemon/${id2}`)
                .then((response) => response.json())
                .then((data) => {
                    setPokemon2(data);
                });
        }
    };

    const selecionaProximoPokemon2 = () => {
        setId2(id2 + 1);
        fetch(`https://pokeapi.co/api/v2/pokemon/${id2}`)
            .then((response) => response.json())
            .then((data) => {
                setPokemon2(data);
            });
    };

    const redirecionaPraTeladeResultado = () => {
        if (pokemonSelecionado2 && pokemonSelecionado) {
            if (pokemonSelecionado2 <= 0 || pokemonSelecionado <= 0) {
                navigate('/resultado');
            }
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 style={{ display: "flex", alignItems: "center", margin: "0" }}>Batalha</h1>

            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "100%", textTransform: "uppercase" }}>
                {redirecionaPraTeladeResultado()}

                <div style={{ width: "300px", display: "flex", alignItems: "center", flexDirection: "column", lineHeight: "0" }}>
                    <h2>Jogador 1</h2>
                    {pokemon && (
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
                            <div style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "row" }}>
                                <button onClick={selecionaPokemonAnterior}>POKEMON ANTERIOR</button>
                                <button onClick={() => setPokemonSelecionado(pokemon.stats[0].base_stat)}>SELECIONAR</button>
                                <button onClick={selecionaProximoPokemon}>PROXIMO POKEMON</button>
                            </div>
                        </div>
                    )}
                    <button onClick={atacar}>ATACAR</button>

                </div>

                <div style={{ width: "300px", display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <h2>Jogador 2</h2>
                    {pokemon2 && (
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: "0" }}>
                            <img src={pokemon2.sprites.front_default} alt={pokemon2.name} />
                            <p style={{}}>{pokemon2.name}</p>
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
                            <div style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "row" }}>
                                <button onClick={selecionaPokemonAnterior2}>POKEMON ANTERIOR</button>
                                <button onClick={() => setPokemonSelecionado2(pokemon2.stats[0].base_stat)}>SELECIONAR</button>
                                <button onClick={selecionaProximoPokemon2}>PROXIMO POKEMON</button>
                            </div>
                        </div>
                    )}
                    <button onClick={atacar2}>ATACAR</button>
                </div>
            </div>
        </div>
    );
}

export default Battle;

