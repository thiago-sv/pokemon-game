// Página "/resultado"

// 1 - Caso o seu pokemon escolhido for vitorioso na batalha, no momento da vitória a sua página deve ser direcionado para a página "/resultado"

// 2 - Nesta página deve ter um botão "NOVO JOGO" que deve redirecionar para página "/batalha" no momento da seleção de Pokemon

// 3 - Nesta página deve ter um botão "VOLTAR PARA INÍCIO" que deve redirecionar para página "/"

// 4 - Caso o seu pokemon escolhido for derrotado na batalha, no momento da derrota a sua página deve ser direcionado para a página "/resultado"

// 5 - Nesta página deve ter um botão "NOVO JOGO" que deve redirecionar para página "/batalha" no momento da seleção de Pokemon

import React from 'react';

import { Link } from 'react-router-dom';

const Resultado = () => {
    return (
        <div>
            <h1>Resultado</h1>
            <Link to="/batalha">
                <button>NOVO JOGO</button>
            </Link>
            <Link to="/">
                <button>VOLTAR PARA INÍCIO</button>
            </Link>
        </div>
    );
}

export default Resultado;

