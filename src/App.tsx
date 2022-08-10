import React, { useState } from 'react';
import Home from './paginas/home';
import Cadastrar from './paginas/cadastrar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {IPublicacoes}  from './tipos/IPublicacoes'
import BuscaFiltrada from './paginas/buscaFiltrada';


function App() {
  const [publicacoes, setPublicacoes] = useState<IPublicacoes[]>([])
  const [publicacoesFiltradas, setPublicacoesFiltradas] = useState<IPublicacoes[]>([])
  return (
    <Router>
      <Routes>
        <Route path='/'  element={<Home setPublicacoesFiltradas={setPublicacoesFiltradas} publicacoes={publicacoes}/>}/>
        <Route path='/cadastrar' element={<Cadastrar publicacoes={publicacoes} setPublicacoesFiltradas={setPublicacoesFiltradas} setPublicacoes={setPublicacoes}/>}/>
        <Route path='/pesquisa' element={<BuscaFiltrada setPublicacoesFiltradas={setPublicacoesFiltradas} publicacoes={publicacoes} publicacoesFiltradas={publicacoesFiltradas}/>} />
      </Routes>
    </Router>
  );
}

export default App;
