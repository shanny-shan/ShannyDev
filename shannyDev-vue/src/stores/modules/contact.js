import { defineStore } from 'pinia'
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import { ElMessage } from 'element-plus'
import { useLanguageStore } from '@/stores'

export const useContactStore = defineStore('contact', () => {
  const languageStore = useLanguageStore()

  const inputName = ref('')
  const inputEmail = ref('')
  const inputMessage = ref('')
  const loading = ref(false)

  const handleSubmit = async () => {
    if (!inputName.value || !inputEmail.value || !inputMessage.value) {
      ElMessage.warning(languageStore.text.formRequired)
      return
    }
    loading.value = true
    try {
      const templateParams = {
        name: inputName.value,
        email: inputEmail.value,
        message: inputMessage.value,
        reply_to: inputEmail.value,
      }
      await emailjs.send(
        'service_8dudqbm',
        'template_xb7nvew',
        templateParams,
        'XGFbMQhsBdx6cR_vA',
      )
      ElMessage.success(languageStore.text.sendSuccess)
      inputName.value = ''
      inputEmail.value = ''
      inputMessage.value = ''
    } catch (err) {
      ElMessage.error(languageStore.text.sendFailed)
      console.log(err)
    } finally {
      loading.value = false
    }
  }
  return {
    inputName,
    inputEmail,
    inputMessage,
    loading,
    handleSubmit,
  }
})
