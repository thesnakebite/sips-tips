<script setup>
    import { computed } from 'vue'
    import { RouterLink, useRoute } from 'vue-router'
    import { useBebidasStore } from '@/stores/bebidas'

    const route = useRoute()
    const store = useBebidasStore()
    console.log(store.categorias)
    

    const paginaInicio = computed( () => route.name === 'inicio')
</script>

<template>
    <header
        class="bg-slate-800"
        :class="{ header : paginaInicio}"
    >
        <div class="container mx-auto px-5 py-16">
            <div class="flex justify-between items-center">
                <!-- Logo -->
                <div>
                    <RouterLink :to="{name: 'inicio'}">
                        <img class="size-32" src="/img/logo.svg" alt="Logotipo" />
                    </RouterLink>
                </div>

                <nav class="flex gap-4 text-white">
                    <RouterLink
                        :to="{name: 'inicio'}"
                        class="uppercase font-bold"
                        active-class="text-orange-500"
                    >
                        Inicio
                    </RouterLink>
                    
                    <RouterLink
                      :to="{name: 'favoritos'}"
                      class="uppercase font-bold"
                      active-class="text-orange-500"
                    >
                        Favoritos
                    </RouterLink>
                </nav>
            </div>

            <form
                v-if="paginaInicio"
                class="md:w-1/2 2xl:w-1/3 bg-gradient-to-r from-orange-400 to-yellow-400 my-32 p-10 rounded-lg shadow transition-transform transform hover:scale-102 space-y-6"
            >
                <div class="space-y-4">
                    <label
                        class="block text-white uppercase font-extrabold text-lg"
                        for="ingrediente">Nombre o Ingredientes</label
                    >
                    <input
                        id="ingrediente"
                        type="text"
                        class="bg-white p-3 w-full focus:outline-none rounded-lg shadow focus:ring-2 focus:ring-orange-500 transition duration-1000"
                        placeholder="Nombre o Ingrediente: ej. Vodka, Tequila, etc."
                        v-model="store.busqueda.nombre"
                    >
                </div>
                <div class="space-y-4">
                    <label
                        class="block text-white uppercase font-extrabold text-lg"
                        for="categoria">Categoría</label
                    >
                    <select
                        id="categoria"
                        class="bg-white p-3 w-full focus:outline-none rounded-lg shadow focus:ring-2 focus:ring-orange-500 transition duration-1000"
                        v-model="store.busqueda.categoria"
                    >
                        <option value="">-- Seleccione --</option>
                        <option
                            v-for="categoria in store.categorias"
                            :key="categoria.strCategory"
                            :value="categoria.strCategory"
                        >
                            {{ categoria.strCategory }}
                        </option>
                    </select>
                </div>
                <input
                    type="submit"
                    class="w-full bg-orange-800 text-white font-extrabold uppercase p-2 rounded-lg hover:bg-orange-900 cursor-pointer"
                    value="Buscar Recetas"
                />
            </form>
        </div>
    </header>
</template>

<style scope>
    .header {
        background-image: url('/img/bg.jpg');
        background-size: cover;
        background-position: center;
    }
</style>