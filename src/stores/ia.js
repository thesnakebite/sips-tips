import { ref } from 'vue'
import { defineStore } from 'pinia'
import IAService, {} from '@/services/IAService'

export const useIAStore = defineStore('ia', () => {
    const prompt = ref('')
    const respuesta = ref('')

    async function generarReceta() {
        await IAService.generarReceta(prompt.value) 
    }

    return {
        prompt,
        respuesta,
        generarReceta,
    }
})