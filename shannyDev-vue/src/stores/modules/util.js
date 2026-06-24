import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'

export const useUtilStore = defineStore('util', () => {
  const isMobile = ref(false)
  const checkMobile = () => {
    if (typeof navigator === 'undefined') return false
    const reg =
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    isMobile.value = reg.test(navigator.userAgent)
  }

  onMounted(() => {
    checkMobile()
  })

  return { isMobile }
})
