import { create } from 'zustand'

interface UtilState {
  isMobile: boolean
  checkMobile: () => void
}

export const useUtilStore = create<UtilState>((set) => ({
  isMobile: false,
  checkMobile: () => {
    if (typeof navigator === 'undefined') return
    const reg =
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    const flag = reg.test(navigator.userAgent)
    set({ isMobile: flag })
  },
}))

import { useEffect } from 'react'
export const useInitMobile = () => {
  const checkMobile = useUtilStore((s) => s.checkMobile)
  useEffect(() => {
    checkMobile()
  }, [checkMobile])
}
