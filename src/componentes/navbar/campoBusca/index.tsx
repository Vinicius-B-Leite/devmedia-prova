import React, { useEffect, useState } from "react";
import { FaSearch } from 'react-icons/fa';
import './estilos.scss'
import { Link } from "react-router-dom";
import { IPublicacoes } from "../../../tipos/IPublicacoes";

interface Props{
    setPublicacoesFiltradas: React.Dispatch<React.SetStateAction<IPublicacoes[]>>
    publicacoes: IPublicacoes[]

}
export default function CampoDeBusca({setPublicacoesFiltradas, publicacoes}: Props){

    const [texto, setTexto] = useState<string>('')

    useEffect(()=>{
        const filtradas = publicacoes.filter(p=> p.titulo.includes(texto) || p.categoria.includes(texto) || p.descricao.includes(texto))
        setPublicacoesFiltradas(filtradas)
    }, [texto])

    return(
        <Link to={'/pesquisa'} className="conteiner-pesquisa">
                    <input className="pesquisa" type="text" value={texto} onChange={e => setTexto(e.target.value)}/>
                    <FaSearch className="icon-pesquisar" />
        </Link>
    )
}