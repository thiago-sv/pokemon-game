//Matched leaf route at location "/" does not have an element.
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Batalha from './Batalha';
import Resultado from './Resultado';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/batalha" element={<Batalha />} />
          <Route path="/resultado" element={<Resultado />} />

        </Routes>
      </BrowserRouter>

    </div >
  );
}

export default App;

// ERROR 'Switch' (imported as 'Switch') was not found in 'react-router-dom'


// npm install 


