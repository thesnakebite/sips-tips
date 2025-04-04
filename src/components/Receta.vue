<script setup>
    import { useBebidasStore } from '@/stores/bebidas'

    const bebidas = useBebidasStore()

    defineProps({
        receta: {
            type: Object,
        }
    })

</script>

<template>
    <div class="border border-r-yellow-500 border-b-zinc-300 border-l-zinc-200 border-t-zinc-200 rounded-lg shadow-md">
        <div class="overflow-hidden">
            <img
                :src="receta.strDrinkThumb"
                :alt="'Imagen de ' + receta.strDrink"
                class="w-full h-64 object-cover hover:scale-125 transition-transform duration-300"
            >
        </div>
        <div class="p-5 bg-white rounded-b-lg">
            <h2 class="text-lg md:text-xl font-extrabold text-center text-gray-800">{{ receta.strDrink }}</h2>
            <button 
                class="border border-zinc-300 w-full hover:text-white uppercase font-bold px-4 py-2 mt-3 hover:bg-orange-500 transition-colors duration-300 rounded-md cursor-pointer"
                @click="bebidas.seleccionarBebida(receta.idDrink)"
            >
                Ver receta
            </button>
        </div>
    </div>
</template>