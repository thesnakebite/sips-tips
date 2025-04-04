import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useBebidasStore } from './bebidas'

export const useFavoritosStore = defineStore('favoritos', () => {

    const bebida = useBebidasStore()
    const favoritos = ref([])

    const handleClickFavorito = () => {

        favoritos.value.push(bebida.receta)
        
    }

    return {
        favoritos,
        handleClickFavorito,
    }
})