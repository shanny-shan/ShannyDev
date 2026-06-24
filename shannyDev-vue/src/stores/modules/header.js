import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useColorMode } from '@vueuse/core'

export const useHeaderStore = defineStore('header', () => {
  const { store, state } = useColorMode()
  const headerActive = ref(0)
  const anchorList = ['about', 'resume', 'project', 'contact']
  const drawer = ref(false)

  const changeHeader = (e) => {
    headerActive.value = e
    drawer.value = false
  }

  const toggleTheme = () => {
    store.value = store.value === 'dark' ? 'light' : 'dark'
  }

  return {
    headerActive,
    anchorList,
    changeHeader,
    drawer,
  }
})
