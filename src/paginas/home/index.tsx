import React from "react";
import Navbar from "../../componentes/navbar";
import Publicacao from "../../componentes/publicacao";
import Rodape from "../../componentes/rodape";
import './estilos.scss'
import { IPublicacoes } from "../../tipos/IPublicacoes";


interface Props{
    publicacoes: IPublicacoes[]
}
export default function Home({publicacoes} : Props){
    return(
        <div className="home">
            <main className="conteiner">
                {
                    publicacoes.map(publicacao => <Publicacao titulo={publicacao.titulo} descricao={publicacao.descricao} key={publicacao.titulo}/>)
                }                
            </main>
        </div>
    )
}