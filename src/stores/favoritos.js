import { ref, watch, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { useBebidasStore } from './bebidas'

export const useFavoritosStore = defineStore('favoritos', () => {

    const bebida = useBebidasStore()
    const favoritos = ref([])

    const sincronizarLocalStorage = () => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }

    const existeFavorito = () => {
        const favoritosLocalStorage = JSON.parse(localStorage.getItem('favoritos')) ?? []

        return favoritosLocalStorage.some(favorito => favorito.idDrink === bebida.receta.idDrink)
    }

    function agregarFavoritos() {
        favoritos.value.push(bebida.receta)
    }

    function eliminarFavoritos() {
        favoritos.value = favoritos.value.filter(favorito => favorito.idDrink !== bebida.receta.idDrink)
    }

    const handleClickFavorito = () => {
        if (existeFavorito()) {
            eliminarFavoritos()
        } else {
            agregarFavoritos()   
        }
    }

    watch(favoritos, () => {
        sincronizarLocalStorage()
    }, {
        deep: true
    })

    onMounted( () => {
        favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? []
    })

    return {
        favoritos,
        handleClickFavorito,
        existeFavorito,
    }
})