<script setup>

    defineProps({
        receta: {
            type: Object,
        }
    })

</script>

<template>
    <div class="border border-yellow-500 rounded-lg shadow-md">
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
            >
                Ver receta
            </button>
        </div>
    </div>
</template>