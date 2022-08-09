import React, { useState } from 'react';
import './App.scss';
import Home from './paginas/home';
import Cadastrar from './paginas/cadastrar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {IPublicacoes}  from './tipos/IPublicacoes'
import Navbar from './componentes/navbar';
import Rodape from './componentes/rodape';
import BuscaFiltrada from './paginas/buscaFiltrada';


function App() {
  const [publicacoes, setPublicacoes] = useState<IPublicacoes[]>([])
  const [publicacoesFiltradas, setPublicacoesFiltradas] = useState<IPublicacoes[]>([])
  return (
    <Router>
      <Navbar publicacoes={publicacoes} setPublicacoesFiltradas={setPublicacoesFiltradas}/>
      <Routes>
        <Route path='/'  element={<Home publicacoes={publicacoes}/>}/>
        <Route path='/cadastrar' element={<Cadastrar publicacoes={publicacoes} setPublicacoes={setPublicacoes}/>}/>
        <Route path='/pesquisa' element={<BuscaFiltrada publicacoesFiltradas={publicacoesFiltradas}/>} />
      </Routes>
      <Rodape/>
    </Router>
  );
}

export default App;
