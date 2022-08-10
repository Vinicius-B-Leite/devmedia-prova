import Navbar from "../../componentes/navbar";
import Publicacao from "../../componentes/publicacao";
import Rodape from "../../componentes/rodape";
import { IPublicacoesFiltradas } from "../../tipos/IPublicacoesFiltradas";
import './estilos.scss';



export default function BuscaFiltrada({ setPublicacoesFiltradas, publicacoes, publicacoesFiltradas = [] }: IPublicacoesFiltradas) {
    return (
        <div className="filtro">
            <Navbar publicacoes={publicacoes} setPublicacoesFiltradas={setPublicacoesFiltradas} />
            <div className="conteiner">
                {
                    publicacoesFiltradas.map(publi => <Publicacao titulo={publi.titulo} descricao={publi.descricao} key={publi.titulo} />)
                }
            </div>
            <Rodape />
        </div>
    )
}