import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'
import zhCN from '@/lang/zh-cn'
import en from '@/lang/en'

export const useLanguageStore = defineStore('language', () => {
  const VALID_LANGS = ['zh-cn', 'en']
  const lang = useStorage('lang', 'zh-cn')

  const text = computed(() => {
    return {
      'zh-cn': zhCN,
      en: en,
    }[lang.value]
  })

  const toggleLang = () => {
    lang.value = lang.value === 'zh-cn' ? 'en' : 'zh-cn'
  }

  return {
    lang,
    text,
    toggleLang,
    VALID_LANGS,
  }
})
