import React, { useState } from "react";
import Publicacao from "../../componentes/publicacao";
import { IPublicacoes } from "../../tipos/IPublicacoes";
import './estilos.scss';


interface Props{
    publicacoesFiltradas: IPublicacoes[]
}

export default function BuscaFiltrada({publicacoesFiltradas=[]}: Props){
    return(
        <div className="filtro">
            <div className="conteiner">
                {
                    publicacoesFiltradas.map(publi=> <Publicacao titulo={publi.titulo} descricao={publi.descricao} key={publi.titulo}/>)
                }
            </div>
        </div>
    )
}