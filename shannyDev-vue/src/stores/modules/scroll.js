import { defineStore } from 'pinia'
import { ref, onMounted, onUnmounted } from 'vue'
import { useHeaderStore } from '@/stores'

export const useScrollStore = defineStore('scroll', () => {
  const headerStore = useHeaderStore()
  const anchorList = ref(['about', 'resume', 'project', 'contact'])
  const handleScroll = () => {
    const scrollTop = window.scrollY
    const clientHeight = document.documentElement.clientHeight
    const pageHeight = document.documentElement.scrollHeight

    if (scrollTop + clientHeight >= pageHeight - 50) {
      headerStore.headerActive = anchorList.value.length - 1
      return
    }

    let current = 0
    for (let i = 0; i < anchorList.value.length; i++) {
      const el = document.getElementById(anchorList.value[i])
      if (!el) continue

      const rect = el.getBoundingClientRect()
      if (rect.top <= 200) {
        current = i
      }
    }

    headerStore.headerActive = current
  }
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  return { handleScroll }
})
