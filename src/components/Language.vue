<script setup>
import { useLanguageStore } from '@/stores'

const langStore = useLanguageStore()
</script>

<template>
  <el-button @click="langStore.toggleLang()" circle>
    {{ langStore.lang === 'zh-cn' ? '中' : 'EN' }}
  </el-button>
</template>
