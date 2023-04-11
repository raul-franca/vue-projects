import IProjeto from "@/interfaces/IProjeto";
import {createStore, Store} from "vuex";
import {InjectionKey} from "vue";
import {useStore as useStoreVuex} from "vuex";
import {ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO, NOTIFICAR} from "@/store/tipos-mutacoes";
import {INotificacao } from "@/interfaces/INotificacao";

interface Estado{
    projetos: IProjeto[],
    notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state:{
        projetos:[],
        notificacoes:[]
    },
    mutations:{
        [ADICIONA_PROJETO](state,nomeDoProjeto:string){
            const projeto = {
                 id:new Date().toISOString(),
                nome:nomeDoProjeto
            } as IProjeto
            state.projetos.push(projeto)
        },
        [ALTERA_PROJETO] (state ,projeto: IProjeto){
            const index = state.projetos.findIndex(proj => proj.id == projeto.id)
            state.projetos[index] = projeto
        },
        [EXCLUIR_PROJETO] (state, id: string){
            state.projetos = state.projetos.filter(proj => proj.id != id)
        },
        [NOTIFICAR] (state,novaNotificacao:INotificacao){
            novaNotificacao.id = new Date().getTime()
            state.notificacoes.push(novaNotificacao)

            setTimeout(() => {
                state.notificacoes = state.notificacoes.filter(notificacao => notificacao.id != novaNotificacao.id)
            }, 1500)
        }
    }
});

export function useStore():Store<Estado> {
    return useStoreVuex(key);
}