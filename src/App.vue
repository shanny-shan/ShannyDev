<script setup>
import { onMounted, onUnmounted } from 'vue'

import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'

import { useHeaderStore } from '@/stores'
const headerStore = useHeaderStore()

const handleScroll = () => {
  const scrollTop = window.scrollY
  const clientHeight = document.documentElement.clientHeight
  const pageHeight = document.documentElement.scrollHeight
  const list = headerStore.anchorList

  if (scrollTop + clientHeight >= pageHeight - 50) {
    headerStore.headerActive = list.length - 1
    return
  }

  let current = 0
  for (let i = 0; i < list.length; i++) {
    const el = document.getElementById(list[i])
    if (!el) continue

    const rect = el.getBoundingClientRect()
    if (rect.top <= 200) {
      current = i
    }
  }

  headerStore.headerActive = current
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="common-layout" id="about">
    <el-container>
      <el-header class="header">
        <Header />
      </el-header>
      <el-main class="main">
        <Main />
      </el-main>
    </el-container>
  </div>
</template>
<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.main {
  overflow: visible;
}
</style>
