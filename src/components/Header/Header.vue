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
          :underline="false"
        >
          <span class="header_left_text">[ www.shanny.wang ]</span>
        </el-link>
      </div>
      <div class="header_center">
        <el-link
          href="#about"
          class="header-item"
          :class="{ active: headerStore.headerActive === 0 }"
          @click="changeHeader(0)"
          :underline="false"
        >
          <span class="header_text">[ {{ languageStore.text.about }} ]</span>
        </el-link>

        <el-link
          href="#resume"
          round
          class="header-item"
          :class="{ active: headerStore.headerActive === 1 }"
          @click="changeHeader(1)"
          :underline="false"
        >
          <span class="header_text">[ {{ languageStore.text.resume }} ]</span>
        </el-link>

        <el-link
          href="#project"
          round
          class="header-item"
          :class="{ active: headerStore.headerActive === 2 }"
          @click="changeHeader(2)"
          :underline="false"
        >
          <span class="header_text">[ {{ languageStore.text.project }} ]</span>
        </el-link>

        <el-link
          href="#contact"
          round
          class="header-item"
          :class="{ active: headerStore.headerActive === 3 }"
          @click="changeHeader(3)"
          :underline="false"
        >
          <span class="header_text">[ {{ languageStore.text.contact }} ]</span>
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

  .header-item:hover,
  .active,
  .active:hover {
    border: none;
    font-weight: bold;
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
}
</style>
