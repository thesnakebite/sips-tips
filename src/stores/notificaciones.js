import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNotificacionesStore = defineStore('notificacion', () => {
    const texto = ''
    const error = ref(false)
    const mostrar = ref(false)


    return {
        texto,
        error,
        mostrar,
    }
})