<script setup>
import Link from '@/components/Link.vue'

import { ref, onMounted } from 'vue'
import { useHeaderStore, useLanguageStore } from '@/stores'

import { Sunny, Moon } from '@element-plus/icons-vue'
import { useColorMode } from '@vueuse/core'

const headerStore = useHeaderStore()
const languageStore = useLanguageStore()

const changeHeader = (e) => {
  headerStore.headerActive = e
}

const { store, state } = useColorMode()
const toggleTheme = () => {
  store.value = store.value === 'dark' ? 'light' : 'dark'
}
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
          :clickFunction="() => changeHeader(0)"
        />
      </div>
      <div class="header_center">
        <Link
          href="#about"
          :active="0"
          :text="languageStore.text.about"
          :clickFunction="() => changeHeader(0)"
        />
        <Link
          href="#resume"
          :active="1"
          :text="languageStore.text.resume"
          :clickFunction="() => changeHeader(1)"
        />
        <Link
          href="#project"
          :active="2"
          :text="languageStore.text.project"
          :clickFunction="() => changeHeader(2)"
        />
        <Link
          href="#contact"
          :active="3"
          :text="languageStore.text.contact"
          :clickFunction="() => changeHeader(3)"
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
          :clickFunction="toggleTheme"
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
