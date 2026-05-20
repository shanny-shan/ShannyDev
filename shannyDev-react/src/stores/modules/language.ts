import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { LanguageText } from '@/lang/lang'
import zhCN from '@/lang/zh-cn'
import en from '@/lang/en'

interface LanguageStore {
  lang: 'zh-cn' | 'en'
  text: () => LanguageText
  toggleLang: () => void
}

export const useLanguageStore = create(
  persist<LanguageStore>(
    (set, get) => ({
      lang: 'zh-cn',
      text: () => {
        const { lang } = get()
        return lang === 'zh-cn' ? zhCN : en
      },
      toggleLang: () => {
        set((state) => ({
          lang: state.lang === 'zh-cn' ? 'en' : 'zh-cn',
        }))
      },
    }),
    { name: 'lang' },
  ),
)
