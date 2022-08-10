import React, { useState } from "react";
import './estilos.scss'
import { IPublicacoes } from '../../tipos/IPublicacoes'
import Navbar from "../../componentes/navbar";
import { IPublicacoesFiltradas } from "../../tipos/IPublicacoesFiltradas";
import Rodape from "../../componentes/rodape";


interface Props extends IPublicacoesFiltradas {
    setPublicacoes: React.Dispatch<React.SetStateAction<IPublicacoes[]>>,
}

export default function Cadastrar({ setPublicacoes, setPublicacoesFiltradas, publicacoes }: Props) {

    const [tituloNoticia, setTituloNoticia] = useState<string>('')
    const [categoriaNoticia, setCategoriaNoticia] = useState<string>('')
    const [conteudoNoticia, setConteudoNoticia] = useState<string>('')

    const adicionarPublicacao = (evento: React.FormEvent) => {
        evento.preventDefault()
        setPublicacoes(publicacoesAntigas => [...publicacoesAntigas, { titulo: tituloNoticia, categoria: categoriaNoticia, descricao: conteudoNoticia }])
        setTituloNoticia('')
        setCategoriaNoticia('')
        setConteudoNoticia('')
    }
    return (
        <div className="cadastrar">
            <Navbar publicacoes={publicacoes} setPublicacoesFiltradas={setPublicacoesFiltradas} />
            <div className="conteiner-form">
                <form className="form" onSubmit={ev => adicionarPublicacao(ev)}>
                    <h1 className="form-titulo">Cadastro de notícias</h1>
                    <input
                        value={tituloNoticia}
                        onChange={e => setTituloNoticia(e.target.value)}
                        className="input"
                        type="text"
                        placeholder="Título da notícia"
                        required />
                    <input
                        value={categoriaNoticia}
                        onChange={(e) => setCategoriaNoticia(e.target.value)}
                        className="input"
                        type="text"
                        placeholder="Categoria da notícia"
                        required />
                    <textarea
                        value={conteudoNoticia}
                        onChange={e => setConteudoNoticia(e.target.value)}
                        className="input"
                        placeholder="Conteúdo da notícia"
                        required />
                    <button className="form-botao">Cadastrar</button>
                </form>
            </div>
            <Rodape />

        </div>
    )
}
