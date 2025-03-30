<script setup>

</script>

<template>
    <header>
        <div class="container mx-auto px-5 py-16">
            <div></div>

            <form
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
                    >
                        <option value="">-- Seleccione --</option>
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