import React, { useState } from "react";
import './estilos.scss';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'

export default function Navbar(){
    const [visivel, setVisivel] = useState(false)
    return(
        <header className="cabecalho">
            <h1 className="logo">Logo</h1>
            <nav className="navbar">
                <ul className="lista-links">
                    <li className="link"><Link className={"componente-link"} to={"/cadastrar"}>Cadastrar notícias</Link></li>
                    <li className="link"><Link className={"componente-link"} to={"/"}>Exibir notícias</Link></li>
                </ul>
                <div className="conteiner-pesquisa">
                    <input className="pesquisa" type="text" />
                    <FaSearch className="icon-pesquisar" />
                </div>
                <button className={`menu-responsivo ${visivel ? '' : 'ativado'}`}
                     onClick={() => setVisivel(!visivel)}>
                    <div className="linha1"></div>
                    <div className="linha2"></div>
                    <div className="linha3"></div>
                </button>
            </nav>
        </header>
    )
}