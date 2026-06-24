import { create } from 'zustand'
import { useHeaderStore } from './header'

interface ScrollState {
  anchorList: string[]
  handleScroll: () => void
}

export const useScrollStore = create<ScrollState>(() => {
  const anchorList = ['about', 'resume', 'project', 'contact']

  const handleScroll = () => {
    const state = useHeaderStore.getState()

    const scrollTop = window.scrollY
    const clientHeight = document.documentElement.clientHeight
    const pageHeight = document.documentElement.scrollHeight

    if (scrollTop + clientHeight >= pageHeight - 50) {
      state.changeHeader(anchorList.length - 1)
      return
    }

    let current = 0
    for (let i = 0; i < anchorList.length; i++) {
      const el = document.getElementById(anchorList[i])
      if (!el) continue
      const rect = el.getBoundingClientRect()
      if (rect.top <= 200) {
        current = i
      }
    }

    state.changeHeader(current)
  }

  return {
    anchorList,
    handleScroll,
  }
})
