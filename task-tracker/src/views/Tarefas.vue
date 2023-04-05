<template>
    <div class="column is-three-quarter conteudo">
        <Formulario @aoSalvarTarefa="salvarTarefa"/>
        <div class="lista" id="listaTarefas">
            <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
            <Box v-if="listaEstaVazia">
                Lista de Tarefas esta vazia.
            </Box>
        </div>
    </div>

</template>

<script lang="ts">import { defineComponent } from "vue";
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import Box from "../components/Box.vue";
import ITarefa from "../interfaces/ITarefa"
export default defineComponent({
    name: "App",
    components: {
        Formulario,
        Tarefa,
        Box
    },
    data () {
        return {
            tarefas: [] as ITarefa[]
        }
    },
    methods: {
        salvarTarefa (tarefa:ITarefa) : void {
            this.tarefas.push(tarefa)
        }
    },
    computed: {
        listaEstaVazia () :boolean {
            return this.tarefas.length == 0
        }
    }
});

</script>

<style scoped>
#listaTarefas{
    --texto-primario: #4a4a4a;
}
</style>