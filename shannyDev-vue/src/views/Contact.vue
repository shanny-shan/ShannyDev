<script setup>
import Title from '@/components/Title.vue'
import { ref } from 'vue'
import { CloseBold } from '@element-plus/icons-vue'
import { useLanguageStore } from '@/stores'
import { ElMessage } from 'element-plus'
import emailjs from '@emailjs/browser'

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
</script>

<template>
  <div class="contact">
    <Title :title="languageStore.text.contactTitle" />
    <div class="contact_sub_title">
      {{ languageStore.text.contactSubTitle }}
    </div>
    <div class="contact_content">
      <el-input
        class="input_name"
        v-model="inputName"
        :placeholder="languageStore.text.contactNamePlaceholder"
        clearable
        :clear-icon="CloseBold"
      />
      <el-input
        class="input_email"
        v-model="inputEmail"
        :placeholder="languageStore.text.contactEmailPlaceholder"
        clearable
        :clear-icon="CloseBold"
      />
      <el-input
        class="input_message"
        v-model="inputMessage"
        :rows="5"
        type="textarea"
        :placeholder="languageStore.text.contactMessagePlaceholder"
        clearable
        :clear-icon="CloseBold"
      />
    </div>
    <div class="submit_button">
      <el-button type="primary" @click="handleSubmit" :loading="loading">
        {{ languageStore.text.submit }}
      </el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact {
  margin-bottom: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .contact_sub_title {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    background-color: var(--my-about_msg_back);
    color: var(--my-contact_sub_title);
    padding: 0.2rem 1rem;
    margin-top: 5vh;
    box-shadow: 0.3rem 0.3rem 0 var(--my-about_msg_shadow);

    @media (max-width: 415px) {
      width: 95vw;
    }
  }
  .contact_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;

    @media (max-width: 415px) {
      width: 95vw;
    }

    .el-input {
      height: 7vh;
      width: 45vw;
      font-size: 1rem;
      --el-input-focus-border-color: var(--my-input_focus_border);
      box-shadow: 0.5rem 0.5rem 0 var(--my-form_shadow);

      @media (max-width: 415px) {
        width: 100%;
      }
    }
    .el-textarea {
      font-size: 1rem;
      --el-input-focus-border-color: var(--my-input_focus_border);
      box-shadow: 0.5rem 0.5rem 0 var(--my-form_shadow);

      @media (max-width: 415px) {
        width: 100%;
      }
    }
    .input_email,
    .input_message {
      margin-top: 2vh;
    }
  }
  .submit_button {
    margin-top: 5vh;

    .el-button {
      width: 8vw;
      height: 6vh;
      font-size: 1.2rem;
      background-color: var(--my-btn_primay_bg);
      border-color: var(--my-btn_primary_border);
      color: var(--my-btn_primary_text);
      box-shadow: 0.25rem 0.25rem 0 var(--my-btn_primary_shadow);

      @media (max-width: 415px) {
        width: 85vw;
      }
    }
    .el-button:hover {
      background-color: var(--my-btn_primary_hover_bg);
      border-color: var(--my-btn_primary_hover_border);
      color: var(--my-btn_primary_hover_text);
      box-shadow: 0.25rem 0.25rem 0 var(--my-btn_primary_hover_shadow);
    }
  }
}
</style>
