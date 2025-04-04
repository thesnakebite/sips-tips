import { ref, reactive, onMounted } from 'vue'
import { defineStore } from 'pinia'
import APIService from '@/services/APIService'
import { useModalStore } from './modal'

export const useBebidasStore = defineStore('bebidas', () => {

    const modal = useModalStore()
    const categorias = ref([])
    const busqueda = reactive({
        nombre: '',
        categoria: '',
    })

    const recetas = ref([])
    const receta = ref({})

    onMounted( async () => {
        const { data: {drinks} } = await APIService.obtenerCategorias()
        categorias.value = drinks
    })

    async function obtenerRecetas() {
        const { data: {drinks} } = await APIService.buscarRecetas(busqueda)
        recetas.value = drinks
    }

    async function seleccionarBebida(id) {
        const { data: {drinks} } = await APIService.buscarReceta(id)
        receta.value = drinks[0]

        modal.handleClickModal()
    }

    // La diferencia entre reactive y ref es que reactive se utiliza para crear un objeto reactivo que puede contener múltiples propiedades, mientras que ref se utiliza para crear una referencia reactiva a un valor único. 
    // En este caso, declaramos busqueda como reactive porque contiene múltiples propiedades (nombre y categoria) que queremos que sean reactivas. 
    // Por otro lado, recetas se declara como ref porque es una referencia a un solo valor (la lista de recetas) que se puede actualizar, pero no necesita ser un objeto con múltiples propiedades.

    return {
        categorias,
        busqueda,
        obtenerRecetas,
        recetas,
        receta,
        seleccionarBebida,
    }
})