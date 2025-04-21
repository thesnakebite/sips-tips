import { ref } from 'vue'
import { defineStore } from 'pinia'
import IAService from '@/services/IAService'

export const useIAStore = defineStore('ia', () => {
    const prompt = ref('')
    const respuesta = ref('')

    async function generarReceta() {
        respuesta.value = ''

        const resultado = await IAService.generarReceta(prompt.value)
        
        for await(const texto of resultado) {
            respuesta.value += texto
        }
    }

    return {
        prompt,
        respuesta,
        generarReceta,
    }
})