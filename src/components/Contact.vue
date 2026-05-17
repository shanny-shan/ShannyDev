<script setup>
import { ref } from 'vue'
import { CloseBold } from '@element-plus/icons-vue'
import { useLanguageStore } from '@/stores'

const languageStore = useLanguageStore()

const inputName = ref('')
const inputEmail = ref('')
const inputMessage = ref('')
</script>

<template>
  <div class="contact">
    <div class="contact_title">{{ languageStore.text.contactTitle }}</div>
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
      <el-button type="primary">{{ languageStore.text.submit }}</el-button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.contact {
  margin-top: 10vh;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .contact_title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    font-weight: bold;
    color: var(--my-contact_title);
  }
  .contact_sub_title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: var(--my-contact_sub_title);
    margin-top: 1vh;
  }
  .contact_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;

    .el-input {
      height: 7vh;
      width: 45vw;
      font-size: 1rem;
      --el-input-focus-border-color: var(--my-input_focus_border);
    }
    .el-textarea {
      font-size: 1rem;
      --el-input-focus-border-color: var(--my-input_focus_border);
    }
    .input_email,
    .input_message {
      margin-top: 2vh;
    }
  }
  .submit_button {
    margin-top: 5vh;

    .el-button {
      width: 10vw;
      height: 5vh;
      font-size: 1rem;
      --el-button-active-bg-color: var(--my-button_active_bg);
      --el-button-active-border-color: var(--my-button_active_border);
      --el-button-hover-border-color: var(--my-button_hover_bg);
      --el-button-hover-bg-color: var(--my-button_hover_border);
    }
  }
}
</style>
