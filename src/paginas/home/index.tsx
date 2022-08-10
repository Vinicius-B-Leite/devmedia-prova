import React from "react";
import Publicacao from "../../componentes/publicacao";
import './estilos.scss'
import { IPublicacoes } from "../../tipos/IPublicacoes";
import { IPublicacoesFiltradas } from "../../tipos/IPublicacoesFiltradas";
import Rodape from "../../componentes/rodape";
import Navbar from "../../componentes/navbar";


interface Props extends IPublicacoesFiltradas {
    publicacoes: IPublicacoes[]
}
export default function Home({ publicacoes, setPublicacoesFiltradas }: Props) {
    return (
        <div className="home">
            <Navbar publicacoes={publicacoes} setPublicacoesFiltradas={setPublicacoesFiltradas} />

            <main className="conteiner">
                {
                    publicacoes.map(publicacao => <Publicacao titulo={publicacao.titulo} descricao={publicacao.descricao} key={publicacao.titulo} />)
                }
            </main>
            <Rodape />
        </div>
    )
}