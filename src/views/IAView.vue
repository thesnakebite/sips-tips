<script setup>
    import { useIAStore } from '@/stores/ia'
    import { useNotificacionesStore } from '@/stores/notificaciones'

    const notificacion = useNotificacionesStore()
    const store = useIAStore()

    const handleSubmit = () => {
        if(store.prompt.trim() === '') {
            notificacion.$patch({
                texto: 'La búsqueda no puede ir vacía',
                mostrar: true,
                error: true,
            })
            return
        }

        store.generarReceta()
    }
</script>

<template>
    <h1 class="text-6xl font-extrabold">Generar Receta con IA</h1>

    <div class="max-w-4xl mx-auto">
        <form  
            class='flex flex-col space-y-3 py-10'
            @submit.prevent="handleSubmit"
        >
            <div class="relative">
                <input 
                    name="prompt" 
                    id="prompt" 
                    v-model="store.prompt"
                    :disabled="store.cargando"
                    class="border bg-white p-4 rounded-lg w-full border-slate-800 transition-all duration-300" 
                    :class="{'opacity-50': store.cargando}"
                    placeholder="Genera una receta con ingredientes. Ej. Bebida con Tequila y Fresa"
                />
                <button 
                    type="submit" 
                    aria-label="Enviar"
                    class="cursor-pointer absolute top-1/2 right-5 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                    :class="{'cursor-not-allowed opacity-50' : store.cargando}"
                    :disabled="store.cargando"
                >
                    <svg 
                        v-if="!store.cargando"
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5"
                        stroke="currentColor" 
                        class="w-10 h-10"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                        />
                    </svg>
                    <svg 
                        v-else
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5"
                        stroke="currentColor" 
                        class="w-10 h-10 animate-bounce-slow"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                        />
                    </svg>
                </button>
            </div>
        </form>

        <div v-if="store.cargando" class="flex items-center justify-center space-x-2 py-4">
            <div class="flex space-x-1">
                <div v-for="(dot, index) in 3" :key="index" 
                    class="w-3 h-3 bg-slate-800 rounded-full animate-pulse-slow"
                    :style="{ animationDelay: `${index * 0.2}s` }"
                >
            </div>
            </div>
            <span class="text-lg font-medium animate-pulse-slow">
                Generando receta...
            </span>
        </div>

        <div 
            v-if="store.respuesta" 
            class="py-10 px-6 bg-gradient-to-r from-orange-400 to-yellow-400 text-amber-50 rounded-lg shadow-lg transition-opacity duration-300"
        >
            <pre class="whitespace-pre-wrap font-sans text-base leading-relaxed break-words">{{ store.respuesta }}</pre>
        </div>
    </div>
</template>

<style>
    pre {
        font-family: monospace;
    }
</style>