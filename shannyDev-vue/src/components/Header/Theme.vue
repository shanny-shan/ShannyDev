<script setup>
import { Sunny, Moon } from '@element-plus/icons-vue'
import { useColorMode } from '@vueuse/core'

const { store, state } = useColorMode()
const toggleTheme = () => {
  store.value = store.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <el-link
    :icon="state === 'dark' ? Moon : Sunny"
    @click="toggleTheme"
    underline="never"
  />
</template>
