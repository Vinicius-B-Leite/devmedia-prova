import { IPublicacoes } from "./IPublicacoes"

export interface IPublicacoesFiltradas{
    setPublicacoesFiltradas: React.Dispatch<React.SetStateAction<IPublicacoes[]>>
    publicacoes: IPublicacoes[]
}