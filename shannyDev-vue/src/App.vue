<script setup>
import Header from '@/views/Header.vue'
import HeaderMobile from '@/views/HeaderMobile.vue'
import About from '@/views/About.vue'
import Resume from '@/views/Resume.vue'
import Project from '@/views/Project.vue'
import Contact from '@/views/Contact.vue'
import { useScrollStore, useUtilStore } from '@/stores'
const utilStore = useUtilStore()
const scrollStore = useScrollStore()
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <HeaderMobile v-if="utilStore.isMobile" />
        <Header v-else />
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
