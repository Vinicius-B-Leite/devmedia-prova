import React, { useState } from "react";
import './estilos.scss';
import { Link } from 'react-router-dom'
import CampoDeBusca from "./campoBusca";
import { IPublicacoes } from "../../tipos/IPublicacoes";


interface Props{
    setPublicacoesFiltradas: React.Dispatch<React.SetStateAction<IPublicacoes[]>>
    publicacoes: IPublicacoes[]
}

export default function Navbar({setPublicacoesFiltradas, publicacoes}: Props){
    const [visivel, setVisivel] = useState(false)
    return(
        <header className="cabecalho">
            <h1 className="logo">Logo</h1>
            <nav className="navbar">
                <ul className="lista-links">
                    <li className="link"><Link className={"componente-link"} to={"/cadastrar"}>Cadastrar notícias</Link></li>
                    <li className="link"><Link className={"componente-link"} to={"/"}>Exibir notícias</Link></li>
                </ul>
                <CampoDeBusca publicacoes={publicacoes} setPublicacoesFiltradas={setPublicacoesFiltradas}/>
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