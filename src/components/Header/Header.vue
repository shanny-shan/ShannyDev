<script setup>
import Theme from './Theme.vue'
import Language from './Language.vue'

import { ref } from 'vue'
import { useHeaderStore, useLanguageStore } from '@/stores'

const headerStore = useHeaderStore()
const languageStore = useLanguageStore()

const changeHeader = (e) => {
  headerStore.headerActive = e
}
</script>

<template>
  <el-affix :offset="0">
    <div class="header-group">
      <div class="header_left">
        <el-link
          href="/"
          class="header-item"
          @click="changeHeader(0)"
          underline="never"
        >
          <span class="header_left_text">
            <span class="bracket left">[&nbsp;</span>
            <span class="print_text">www.shanny.wang</span>
            <span class="bracket right">&nbsp;]</span>
          </span>
        </el-link>
      </div>
      <div class="header_center">
        <el-link
          href="#about"
          class="header-item"
          :class="{ active: headerStore.headerActive === 0 }"
          @click="changeHeader(0)"
          underline="never"
        >
          <span class="header_text">
            <span class="bracket left">[&nbsp;</span>
            <span class="print_text">{{ languageStore.text.about }}</span>
            <span class="bracket right">&nbsp;]</span>
          </span>
        </el-link>

        <el-link
          href="#resume"
          round
          class="header-item"
          :class="{ active: headerStore.headerActive === 1 }"
          @click="changeHeader(1)"
          underline="never"
        >
          <span class="header_text">
            <span class="bracket left">[&nbsp;</span>
            <span class="print_text">{{ languageStore.text.resume }}</span>
            <span class="bracket right">&nbsp;]</span>
          </span>
        </el-link>

        <el-link
          href="#project"
          round
          class="header-item"
          :class="{ active: headerStore.headerActive === 2 }"
          @click="changeHeader(2)"
          underline="never"
        >
          <span class="header_text">
            <span class="bracket left">[&nbsp;</span>
            <span class="print_text">{{ languageStore.text.project }}</span>
            <span class="bracket right">&nbsp;]</span>
          </span>
        </el-link>

        <el-link
          href="#contact"
          round
          class="header-item"
          :class="{ active: headerStore.headerActive === 3 }"
          @click="changeHeader(3)"
          underline="never"
        >
          <span class="header_text">
            <span class="bracket left">[&nbsp;</span>
            <span class="print_text">{{ languageStore.text.contact }}</span>
            <span class="bracket right">&nbsp;]</span>
          </span>
        </el-link>
      </div>
      <div class="header_right">
        <!-- <Theme class="header-item header_theme" /> -->
        <Language class="header-item header_language" />
      </div>
    </div>
  </el-affix>
</template>
<style scoped lang="scss">
.header-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--my-header_bg);
  border-bottom: 0.1rem solid var(--my-header_border_bottom);
  width: 100vw;
  height: 6vh;

  .header-item {
    font-size: 1.1rem;
    padding: 0 1.5rem;
    color: var(--my-header_text);
  }

  .active,
  .header_text:hover {
    color: var(--my-header_text_hover);
  }
  .header_left {
    .header_left_text {
      color: var(--my-header_left_text);
    }
  }

  .header_right {
    .header_theme,
    .header_language {
      color: var(--my-header_text);
    }
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
}
</style>
