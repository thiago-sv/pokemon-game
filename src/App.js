//Matched leaf route at location "/" does not have an element.
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Battle from './Battle';
import Resultado from './Resultado';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/resultado" element={<Resultado />} />

        </Routes>
      </BrowserRouter>

    </div >
  );
}

export default App;

// ERROR 'Switch' (imported as 'Switch') was not found in 'react-router-dom'


// npm install 


