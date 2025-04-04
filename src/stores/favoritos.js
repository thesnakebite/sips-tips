import { ref, watch, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { useBebidasStore } from './bebidas'

export const useFavoritosStore = defineStore('favoritos', () => {

    const bebida = useBebidasStore()
    const favoritos = ref([])

    const sincronizarLocalStorage = () => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }

    const existeFavorito = (id) => {
        const favoritosLocalStorage = JSON.parse(localStorage.getItem('favoritos')) ?? []

        return favoritosLocalStorage.some(favorito => favorito.idDrink === id)
    }

    const handleClickFavorito = () => {
        if (existeFavorito(bebida.receta.idDrink)) {
            console.log('Ya existe...');
            
        } else {
            favoritos.value.push(bebida.receta)
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
    }
})