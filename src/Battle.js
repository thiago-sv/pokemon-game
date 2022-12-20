
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
let id = 1;
let id2 = 2;

const Battle = () => {
    const [pokemon, setPokemon] = useState(null);
    const [pokemon2, setPokemon2] = useState(null);

    const [pokemonSelecionado, setPokemonSelecionado] = useState(null);
    const [pokemonSelecionado2, setPokemonSelecionado2] = useState(null);
    let aux1 = pokemonSelecionado;
    let aux2 = pokemonSelecionado2;
    const navigate = useNavigate();



    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPokemon(data);
            });
    }, []);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id2}`)
            .then((response) => response.json())
            .then((data) => {
                setPokemon2(data);
            });
    }, []);

    const atacar = () => {

        if (pokemonSelecionado2 && pokemonSelecionado) {
            setPokemonSelecionado2(pokemonSelecionado2 - 10);
            aux2 -= 10;
            if (aux2 <= 0) {
                navigate('/resultado');
            }
        }
    };

    const atacar2 = () => {
        if (pokemonSelecionado2 && pokemonSelecionado) {
            setPokemonSelecionado(pokemonSelecionado - 10);
            aux1 -= 10;
            if (aux1 <= 0) {
                navigate('/resultado');
            }

        }
    };

    const selecionaProximoPokemon = () => {
        id++;
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPokemon(data);
            });
    };

    const selecionaProximoPokemon2 = () => {
        id2++;
        fetch(`https://pokeapi.co/api/v2/pokemon/${id2}`)
            .then((response) => response.json())
            .then((data) => {
                setPokemon2(data);
            });
    };

    const selecionaPokemonAnterior = () => {
        if (id > 1) {
            id--;
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    setPokemon(data);
                });
        }
    };

    const selecionaPokemonAnterior2 = () => {
        if (id2 > 1) {
            id2--;
            fetch(`https://pokeapi.co/api/v2/pokemon/${id2}`)
                .then((response) => response.json())
                .then((data) => {
                    setPokemon2(data);
                });
        }
    };



    return (

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 style={{ display: "flex", alignItems: "center", margin: "0" }}>Batalha de Pokemons</h1>

            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "100%", textTransform: "uppercase" }}>

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
                            <div style={{ display: "flex", justifyContent: "space-around", flexDirection: "row", margin: "3px", width: "100%" }}>
                                <button style={{ margin: "3px" }} onClick={selecionaPokemonAnterior}>Pokemon Anterior</button>
                                <button style={{ margin: "3px" }} onClick={() => setPokemonSelecionado(pokemon.stats[0].base_stat)}>Selecionar Pokemon</button>
                                <button style={{ margin: "3px" }} onClick={selecionaProximoPokemon}>Próximo Pokemon</button>
                            </div>
                        </div>
                    )}
                    <button onClick={atacar}>Atacar</button>

                </div>
                <div style={{ width: "300px", display: "flex", alignItems: "center", flexDirection: "column", lineHeight: "0" }}>
                    <h2>Jogador 2</h2>
                    {pokemon2 && (
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
                            <div style={{ display: "flex", justifyContent: "space-around", flexDirection: "row", margin: "3px", width: "100%" }}>
                                <button style={{ margin: "3px" }} onClick={selecionaPokemonAnterior2}>Pokemon Anterior</button>
                                <button style={{ margin: "3px" }} onClick={() => setPokemonSelecionado2(pokemon2.stats[0].base_stat)}>Selecionar Pokemon</button>
                                <button style={{ margin: "3px" }} onClick={selecionaProximoPokemon2}>Próximo Pokemon</button>
                            </div>
                        </div>
                    )}
                    <button onClick={atacar2}>Atacar</button>
                </div>
            </div>
        </div>
    );
}

export default Battle;

