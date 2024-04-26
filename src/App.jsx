import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Tarefas from './pages/Tarefas';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <span>Dalila Gimenez | Programação Web | FATEC-ID</span>
        </header>

        <Routes> {/* Substitua 'Switch' por 'Routes' */}
          <Route path="/" element={<Home />} /> {/* Use 'element' para renderizar componentes em vez de 'component' */}
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/tarefas" element={<Tarefas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;