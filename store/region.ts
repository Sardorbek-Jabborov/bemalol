import {defineStore} from "pinia";
import {ref} from "vue"


export const useRegionStore = defineStore('useRegionStore', () => {
    const currentRegion = ref('Узбекистан')

    const setRegion = (location: any) => {
        currentRegion.value = location
        localStorage.setItem('currentLocation', currentRegion.value)
    }

    return {currentRegion, setRegion}
})