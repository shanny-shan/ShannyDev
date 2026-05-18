<script setup>
import { useLanguageStore } from '@/stores'

const langStore = useLanguageStore()
</script>

<template>
  <el-link
    @click="langStore.toggleLang()"
    underline="never"
    class="header_right_text"
  >
    <span class="bracket left">[&nbsp;</span>
    <span class="print_text">
      {{ langStore.lang === 'zh-cn' ? '中' : 'EN' }}
    </span>
    <span class="bracket right">&nbsp;]</span>
  </el-link>
</template>
<style lang="scss" scoped>
// hover动态样式
.bracket {
  transition: all 0.3s ease;
  display: inline-block;
}
.header_language:hover .bracket.left {
  transform: translateX(-0.5rem);
}
.header_language:hover .bracket.right {
  transform: translateX(0.5rem);
}

// hover打字机动态样式
@keyframes printText {
  0% {
    clip-path: inset(0 100% 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
}
.print_text {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
}
.header_language:hover .print_text {
  animation: printText 0.2s steps(2) forwards;
}
</style>
