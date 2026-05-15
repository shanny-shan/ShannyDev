<script setup>
import { ref } from 'vue'

const inputName = ref('')
const inputEmail = ref('')
const inputMessage = ref('')
</script>

<template>
  <div class="contact">
    <div class="contact_title">联系我</div>
    <div class="contact_sub_title">有技术问题交流，或工作邀约？</div>
    <div class="contact_content">
      <el-input
        class="input_name"
        v-model="inputName"
        placeholder="请输入您的姓名"
        clearable
        :clear-icon="CloseBold"
      />
      <el-input
        class="input_email"
        v-model="inputEmail"
        placeholder="请输入您的邮箱"
        clearable
        :clear-icon="CloseBold"
      />
      <el-input
        class="input_message"
        v-model="inputMessage"
        :rows="5"
        type="textarea"
        placeholder="请输入您的消息"
        clearable
        :clear-icon="CloseBold"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.contact {
  margin-top: 10vh;
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
      --el-input-focus-border-color: #025a4e;
    }
    .el-textarea {
      font-size: 1rem;
      --el-input-focus-border-color: #025a4e;
    }
    .input_email,
    .input_message {
      margin-top: 2vh;
    }
  }
}
</style>
