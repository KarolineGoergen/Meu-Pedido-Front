import { Item } from "./item";

export interface Encomenda{
    id?: any,
    dataEncomenda?: any,
    dataEntrega: any,
    observacao: string,
    valorTotal: number,
    itens?: Item[],
    cliente: any,
    nomeCliente?: string,
    cidade?: string,
    bairro?: string,
    logradouro?: string,
    numero?: number,
    status?: any

}