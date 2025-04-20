import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useIAStore = defineStore('ia', () => {
    const prompt = ref('')
    const respuesta = ref('')

    return {
        prompt,
        respuesta,
    }
})