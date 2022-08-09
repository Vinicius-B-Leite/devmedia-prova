import React, { useState } from 'react';
import './App.scss';
import Home from './paginas/home';
import Cadastrar from './paginas/cadastrar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {IPublicacoes}  from './paginas/tipos/IPublicacoes'


function App() {
  const [publicacoes, setPublicacoes] = useState<IPublicacoes[]>([])
  return (
    <Router>
      <Routes>
        <Route path='/'  element={<Home publicacoes={publicacoes}/>}/>
        <Route path='/cadastrar' element={<Cadastrar setPublicacoes={()=>setPublicacoes}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
