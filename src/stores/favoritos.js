import { ref, watch, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'
import { useBebidasStore } from './bebidas'
import { useModalStore } from './modal'
import { useNotificacionesStore } from './notificaciones'

export const useFavoritosStore = defineStore('favoritos', () => {

    const bebida = useBebidasStore()
    const modal = useModalStore()
    const notificaciones = useNotificacionesStore()
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

        notificaciones.mostrar = true
        notificaciones.texto = 'Se agregó a favoritos'
    }

    function eliminarFavoritos() {
        favoritos.value = favoritos.value.filter(favorito => favorito.idDrink !== bebida.receta.idDrink)

        notificaciones.mostrar = true
        notificaciones.texto = 'Eliminado de favoritos'
    }

    const handleClickFavorito = () => {
        if (existeFavorito()) {
            eliminarFavoritos()
        } else {
            agregarFavoritos()
        }
        modal.modal = false
    }

    watch(favoritos, () => {
        sincronizarLocalStorage()
    }, {
        deep: true
    })

    onMounted( () => {
        favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? []
    })

    const noFavoritos = computed( () => favoritos.value.length === 0)

    return {
        favoritos,
        handleClickFavorito,
        existeFavorito,
        noFavoritos,
    }
})