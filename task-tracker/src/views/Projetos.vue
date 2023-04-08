<template>
    <div class="projetos">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Projetos'
})

</script>

<style scoped>
.projetos {
    padding: 1.25rem;
}
</style>