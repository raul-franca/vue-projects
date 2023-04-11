
export enum TipoNotificacao {
    SUCESSO,
    FALHA,
    ATENCAO
}

export interface INotificacao {
    id:number
    titulo:string
    texto:string
    tipo:TipoNotificacao
}