<script setup>
import { useLanguageStore } from '@/stores'

const langStore = useLanguageStore()
</script>

<template>
  <el-link @click="langStore.toggleLang()" :underline="false">
    [ {{ langStore.lang === 'zh-cn' ? '中' : 'EN' }} ]
  </el-link>
</template>
