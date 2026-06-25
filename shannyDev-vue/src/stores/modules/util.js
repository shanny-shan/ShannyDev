import { defineStore } from 'pinia'
import { ref } from 'vue'
import defaultImg from '@/assets/images/loading.gif'
import { useLanguageStore } from '@/stores'

export const useUtilStore = defineStore('util', () => {
  const languageStore = useLanguageStore()

  const defaultImage = ref(defaultImg)
  const isMobile = ref(false)
  const checkMobile = () => {
    if (typeof navigator === 'undefined') return false
    const reg =
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    isMobile.value = reg.test(navigator.userAgent)
  }

  // image
  const handleLoad = (e, item) => {
    if (!e.target.dataset.done) {
      e.target.dataset.done = '1'
      e.target.src =
        languageStore.lang === 'zh-cn' ? item.imageCN : item.imageEN
    }
  }

  const handleError = (e) => {
    e.target.dataset.done = '1'
    e.target.src = defaultImage
  }

  return {
    defaultImage,
    isMobile,
    checkMobile,
    handleLoad,
    handleError,
  }
})
