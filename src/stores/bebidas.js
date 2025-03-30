import { ref, reactive, onMounted } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useBebidasStore = defineStore('bebidas', () => {
    const categorias = ref([])
    const busqueda = reactive({
        nombre: '',
        categoria: '',
    })

    onMounted( async () => {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

        const { data: {drinks} } = await axios(url)
        categorias.value = drinks
    })

    function obtenerRecetas() {
        console.log('Consultando API....')
    }

    return {
        categorias,
        busqueda,
        obtenerRecetas,
    }
})