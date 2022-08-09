import React from "react"
import './estilos.scss'

interface Props{
    titulo: string,
    descricao: string
}
export default function Publicacao({titulo, descricao}: Props){
    return(
        <div className="card">
            <h2 className="card_titulo">{titulo}</h2>
            <p className="card_descricao">{descricao}</p>
            <button className="card_botao">Acessar</button>
        </div>
    )
}