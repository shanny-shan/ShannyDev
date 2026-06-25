import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useResumeStore = defineStore('resume', () => {
  const activeResume = ref('1')
  return { activeResume }
})
