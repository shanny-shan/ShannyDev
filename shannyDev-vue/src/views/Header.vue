<script setup>
import Link from '@/components/Link.vue'
import { Sunny, Moon } from '@element-plus/icons-vue'
import { useHeaderStore, useLanguageStore } from '../stores/'
const headerStore = useHeaderStore()
const languageStore = useLanguageStore()
</script>

<template>
  <el-affix :offset="0">
    <div class="header-group">
      <div class="header_left">
        <Link
          :active="0"
          href="https://www.shanny.wang"
          text="www.shanny.wang"
          position="left"
          :clickFunction="() => headerStore.changeHeader(0)"
        />
      </div>
      <div class="header_center">
        <Link
          href="#about"
          :active="0"
          :text="languageStore.text.about"
          :clickFunction="() => headerStore.changeHeader(0)"
        />
        <Link
          href="#resume"
          :active="1"
          :text="languageStore.text.resume"
          :clickFunction="() => headerStore.changeHeader(1)"
        />
        <Link
          href="#project"
          :active="2"
          :text="languageStore.text.project"
          :clickFunction="() => headerStore.changeHeader(2)"
        />
        <Link
          href="#contact"
          :active="3"
          :text="languageStore.text.contact"
          :clickFunction="() => headerStore.changeHeader(3)"
        />
      </div>
      <div class="header_right">
        <Link
          href="https://www.shanny.wang/react"
          text="To React"
          position="right"
          target="_blank"
        />
        <Link
          :text="languageStore.lang === 'zh-cn' ? '中' : 'EN'"
          position="right"
          :clickFunction="languageStore.toggleLang"
        />
        <!-- <Link
          :isIcon="true"
          :icon="state === 'dark' ? Moon : Sunny"
          position="right"
          :clickFunction="headerStore.toggleTheme"
        /> -->
      </div>
    </div>
  </el-affix>
</template>
<style scoped lang="scss">
.header-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--my-header_bg);
  border-bottom: 0.1rem solid var(--my-header_border_bottom);
  width: 100vw;
  height: 6vh;
}
</style>
