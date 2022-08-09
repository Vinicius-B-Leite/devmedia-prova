import React, { useState } from "react";
import Navbar from "../../componentes/navbar";
import Rodape from "../../componentes/rodape";
import './estilos.scss'
import {IPublicacoes} from '../tipos/IPublicacoes'


interface Props{
    setPublicacoes: React.Dispatch<React.SetStateAction<IPublicacoes[]>>
}
export default function Cadastrar({setPublicacoes}: Props){
    const [tituloNoticia, setTituloNoticia] = useState<string>()
    const [categoriaNoticia, setCategoriaNoticia] = useState<string>()
    const [conteudoNoticia, setConteudoNoticia] = useState<string>()

    const adicionarPublicacao = (evento: React.FormEvent) => {
        evento.preventDefault()
        setPublicacoes((PublicacaoAntigas) => [
                ...PublicacaoAntigas, 
                {
                    titulo:"hhhh", 
                    categoria: "hhhh",
                    descricao: "hhhh"
                }])
        console.log("foi")
    }
    return(
        <div className="cadastrar">
            <Navbar/>
            <div className="continer-form">
                <form action="" className="form" onSubmit={ev => adicionarPublicacao(ev)}>
                    
                    <h1 className="form-titulo">Cadastro de notícias</h1>
                    <input 
                        value={tituloNoticia} 
                        onChange={(e) => setTituloNoticia(e.target.value)} 
                        className="input" 
                        type="text" 
                        placeholder="Título da notícia" 
                        required/>

                    <input 
                        value={categoriaNoticia} 
                        onChange={(e) => setCategoriaNoticia(e.target.value)}
                        className="input" 
                        type="text" 
                        placeholder="Categoria da notícia" 
                        required/>

                    <textarea 
                        value={conteudoNoticia}
                        onChange={e => setConteudoNoticia(e.target.value)}
                        className="input"  
                        placeholder="Conteúdo da notícia" 
                        required/>
                    <button className="form-botao">Cadastrar</button>
                </form>
            </div>
            <Rodape/>
        </div>
    )
}
