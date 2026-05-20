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
    margin-top: 10vh;
    text-shadow: 0.3rem 0.3rem 0 var(--my-contact_title_shadow);
  }
  .contact_sub_title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    background-color: var(--my-about_msg_back);
    color: var(--my-contact_sub_title);
    padding: 0.2rem 1rem;
    margin-top: 5vh;
    box-shadow: 0.3rem 0.3rem 0 var(--my-about_msg_shadow);
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
      box-shadow: 0.5rem 0.5rem 0 var(--my-form_shadow);
    }
    .el-textarea {
      font-size: 1rem;
      --el-input-focus-border-color: var(--my-input_focus_border);
      box-shadow: 0.5rem 0.5rem 0 var(--my-form_shadow);
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
