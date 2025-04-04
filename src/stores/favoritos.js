import { ref, watch, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { useBebidasStore } from './bebidas'

export const useFavoritosStore = defineStore('favoritos', () => {

    const bebida = useBebidasStore()
    const favoritos = ref([])

    const sincronizarLocalStorage = () => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }

    watch(favoritos, () => {
        sincronizarLocalStorage()
    }, {
        deep: true
    })

    const handleClickFavorito = () => {
        favoritos.value.push(bebida.receta)
    }

    onMounted( () => {
        favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? []
    })

    return {
        favoritos,
        handleClickFavorito,
    }
})