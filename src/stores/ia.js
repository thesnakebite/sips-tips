import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useIAStore = defineStore('ia', () => {
    const prompt = ref('')
    const respuesta = ref('')

    async function generarReceta() {
        console.log('Desde generar receta')
    }

    return {
        prompt,
        respuesta,
        generarReceta,
    }
})