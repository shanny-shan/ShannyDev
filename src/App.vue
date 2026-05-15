<script setup>
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
</script>

<template>
  <div class="common-layout">
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
