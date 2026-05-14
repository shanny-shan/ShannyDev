<script setup>
import Header1 from '@/components/Header1.vue'
import Footer from '@/components/Footer.vue'
import Main from '@/components/Main.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <Header1 />
      </el-header>
      <el-main class="main">
        <Main />
      </el-main>
      <el-footer class="footer">
        <Footer />
      </el-footer>
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
</style>
