<script setup>
import { useHeaderStore } from '@/stores'
const headerStore = useHeaderStore()

defineProps({
  clickFunction: {
    type: Function,
    default: null,
  },
  isIcon: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: Object,
    default: null,
  },
  active: {
    type: Number,
    default: null,
  },
  href: {
    type: String,
    default: '#',
  },
  text: {
    type: String,
  },
  position: {
    type: String,
    default: 'center',
  },
  target: {
    type: String,
    default: '_self',
  },
  isMobile: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <el-link
    :icon="isIcon ? icon : null"
    class="header-item"
    :class="{
      active: active !== null && headerStore.headerActive === active,
      isIcon: isIcon,
      isMobile: isMobile,
    }"
    @click="clickFunction?.()"
    :href="href"
    :target="target"
    underline="never"
  >
    <span
      v-if="!isIcon"
      :class="position === 'center' ? 'header_text' : 'header_left_text'"
    >
      <span class="bracket left" v-if="!isMobile">[&nbsp;</span>
      <span class="print_text">{{ text }}</span>
      <span class="bracket right" v-if="!isMobile">&nbsp;]</span>
    </span>
  </el-link>
</template>
<style lang="scss" scoped>
.header-item {
  font-size: 1.1rem;
  padding: 0 1.5rem;
  color: var(--my-header_text);
}

.active,
.header_text:hover {
  color: var(--my-header_text_hover);
}
.header_left_text,
.isIcon:not(.isMobile):hover {
  color: var(--my-header_left_text);
}

// hover动态样式
.bracket {
  transition: all 0.3s ease;
  display: inline-block;
}
.header-item:hover .bracket.left {
  transform: translateX(-0.5rem);
}
.header-item:hover .bracket.right {
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
.header-item:hover .print_text {
  animation: printText 1s steps(20) forwards;
}
</style>
