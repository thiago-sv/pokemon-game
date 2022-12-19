
import React from 'react';
import { Link } from 'react-router-dom';


const Resultado = () => {
    return (
        <div>
            <h1>Você venceu!</h1>
            <Link to="/battle">
                <button>NOVO JOGO</button>
            </Link>
            <Link to="/">
                <button>VOLTAR PARA INÍCIO</button>
            </Link>
        </div>
    );
}

export default Resultado;

