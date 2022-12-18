// Página "/batalha"

// 1 - No momento que esta tela é renderizada, deve ser apresentado um pokemon com seus status retornando diretamente da API
// Rota API: https://pokeapi.co/api/v2/pokemon/ (id ou nome do pokemon)

// 2 - Ao clicar na seta deve ser realizado uma nova requisição na API e retornar outro pokemon com seus status atualizados
// *dica utilizar rota com acréscimo e decréscimo de ID

// 3 - Ao clicar em "SELECIONAR" as informações do pokemon devem ser salvas no estado da página

// 4 - A estrutura de seleção de Pokemons deve ficar oculta após a seleção do Pokemon

// 5- O pokemon escolhido na tela anterior deve ser apresentado nesta

// 6- Todos os dados do pokemon devem ser apresentados na tela e atualizados conforme o andamento da batalha

// 7 - A função de atacar deve tirar hp do adversário (A diminuição do hp no ataque é conforme decisão do desenvolvedor)

// 8 - O pokemon adversário pode ser fixo, e as informações dele devem vir da API também

// 9 - O pokemon que tiver o hp menor ou igual a 0 deve ser considerado derrotado

// 10 - Ao final da batalha, deve ser redirecionado para a página "/resultado"

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Batalha = () => {
    const [pokemon, setPokemon] = useState([]);
    const [pokemonAdversario, setPokemonAdversario] = useState([]);
    const [pokemonSelecionado, setPokemonSelecionado] = useState([]);
    const [pokemonAdversarioSelecionado, setPokemonAdversarioSelecionado] = useState([]);
    const [hp, setHp] = useState(0);
    const [hpAdversario, setHpAdversario] = useState(0);
    const [id, setId] = useState(1);
    const [idAdversario, setIdAdversario] = useState(1);
    const [batalha, setBatalha] = useState(false);
    const [resultado, setResultado] = useState(false);

    const getPokemon = async () => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => {
                setPokemon(response.data);
                setHp(response.data.stats[0].base_stat);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const getPokemonAdversario = async () => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${idAdversario}`)
            .then((response) => {
                setPokemonAdversario(response.data);
                setHpAdversario(response.data.stats[0].base_stat);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const selecionarPokemon = () => {
        setPokemonSelecionado(pokemon);
        setPokemonAdversarioSelecionado(pokemonAdversario);
        setBatalha(true);
    }

    const atacar = () => {
        setHp(hp - 10);
        setHpAdversario(hpAdversario - 10);
    }

    useEffect(() => {
        getPokemon();
        getPokemonAdversario();
    }, [id, idAdversario]);

    useEffect(() => {
        if (hp <= 0) {
            setResultado(true);
        }
    }, [hp]);

    useEffect(() => {
        if (hpAdversario <= 0) {
            setResultado(true);
        }
    }, [hpAdversario]);

    useEffect(() => {
        if (resultado) {
            setBatalha(false);
        }
    }, [resultado]);

    useEffect(() => {
        if (batalha) {
            setResultado(false);
        }
    }, [batalha]);

    useEffect(() => {
        if (resultado) {
            setPokemonSelecionado([]);
            setPokemonAdversarioSelecionado([]);
        }
    }, [resultado]);

    useEffect(() => {
        if (batalha) {
            setPokemon([]);
            setPokemonAdversario([]);
        }
    }, [batalha]);

    return (
        <div>
            <h1>Batalha</h1>
            {batalha ? (
                <div>
                    <h2>{pokemonSelecionado.name}</h2>
                    <img src={pokemonSelecionado.sprites.front_default} alt={pokemonSelecionado.name} />
                    <h3>HP: {hp}</h3>
                    <h2>{pokemonAdversarioSelecionado.name}</h2>
                    <img src={pokemonAdversarioSelecionado.sprites.front_default} alt={pokemonAdversarioSelecionado.name} />
                    <h3>HP: {hpAdversario}</h3>
                    <button onClick={atacar}>ATACAR</button>
                </div>
            ) : (
                <div>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <h3>HP: {hp}</h3>
                    <button onClick={() => setId(id + 1)}>PRÓXIMO</button>
                    <button onClick={() => setId(id - 1)}>ANTERIOR</button>
                    <button onClick={selecionarPokemon}>SELECIONAR</button>
                </div>
            )}
            {resultado ? (
                <Link to="/resultado">RESULTADO</Link>
            ) : (
                <div>
                    <h2>{pokemonAdversario.name}</h2>
                    <img src={pokemonAdversario.sprites.front_default} alt={pokemonAdversario.name} />
                    <h3>HP: {hpAdversario}</h3>
                    <button onClick={() => setIdAdversario(idAdversario + 1)}>PRÓXIMO</button>
                    <button onClick={() => setIdAdversario(idAdversario - 1)}>ANTERIOR</button>
                    <button onClick={selecionarPokemon}>SELECIONAR</button>
                </div>

            )}
        </div>
    )
}

export default Batalha;
