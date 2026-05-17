<script setup>
import { onMounted, onUnmounted } from 'vue'

import Header from '@/components/Header/Header.vue'
import About from '@/components/About.vue'
import Resume from '@/components/Resume.vue'
import Project from '@/components/Project.vue'
import Contact from '@/components/Contact.vue'

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
        <About />
        <Resume id="resume" />
        <Project id="project" />
        <Contact id="contact" />
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
  width: 100%;
  padding: 0;
  --el-header-height: 6vh;

  > div {
    width: 100% !important;
  }
}
.main {
  overflow: visible;
}
</style>
