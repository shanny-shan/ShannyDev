import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHeaderStore = defineStore('header', () => {
  const headerActive = ref(0)
  const anchorList = ['about', 'resume', 'project', 'contact']
  return {
    headerActive,
    anchorList,
  }
})
