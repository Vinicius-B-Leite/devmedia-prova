import React, { useEffect, useState } from "react";
import { FaSearch } from 'react-icons/fa';
import './estilos.scss'
import { Link } from "react-router-dom";
import { IPublicacoesFiltradas } from "../../../tipos/IPublicacoesFiltradas";


export default function CampoDeBusca({setPublicacoesFiltradas, publicacoes}: IPublicacoesFiltradas){

    const [texto, setTexto] = useState<string>('')

    useEffect(()=>{
        let filtradas = publicacoes.filter(p=> p.titulo.includes(texto) || p.categoria.includes(texto) || p.descricao.includes(texto))
        setPublicacoesFiltradas(filtradas)
    }, [texto, setPublicacoesFiltradas, publicacoes])

    return(
        <Link to={'/pesquisa'} className="conteiner-pesquisa">
                    <input className="pesquisa" type="text" value={texto} onChange={e => setTexto(e.target.value)}/>
                    <FaSearch className="icon-pesquisar" />
        </Link>
    )
}