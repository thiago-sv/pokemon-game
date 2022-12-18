//Nesta tela deve existir um botão escrito "NOVO JOGO" que redirecionará para a página "/batalha"

import React from 'react';

import { Link } from 'react-router-dom';

const Inicio = () => {
    return (
        <div>
            <h1>Inicio</h1>
            <Link to="/batalha">
                <button>NOVO JOGO</button>
            </Link>
        </div>
    );
}

export default Inicio;