<script setup>
import Theme from '@/components/Theme.vue'
import { ref } from 'vue'
const active = ref(0)
const changeHeader = (e) => {
  active.value = e
}
</script>

<template>
  <el-affix :offset="0">
    <div class="header-group">
      <el-button
        round
        class="header-item"
        v-bind:class="{ active: active === 0 }"
        @click="changeHeader(0)"
      >
        <span class="header_decor"><</span>
        <span class="header_text">&nbsp;关于我&nbsp;</span>
        <span class="header_sep">/&nbsp;</span>
        <span class="header_decor">></span>
      </el-button>
      <el-button
        round
        class="header-item"
        v-bind:class="{ active: active === 1 }"
        @click="changeHeader(1)"
      >
        <span class="header_decor"><</span>
        <span class="header_text">&nbsp;我的履历&nbsp;</span>
        <span class="header_sep">/&nbsp;</span>
        <span class="header_decor">></span>
      </el-button>
      <el-button
        round
        class="header-item"
        v-bind:class="{ active: active === 2 }"
        @click="changeHeader(2)"
      >
        <span class="header_decor"><</span>
        <span class="header_text">&nbsp;我的项目&nbsp;</span>
        <span class="header_sep">/&nbsp;</span>
        <span class="header_decor">></span>
      </el-button>
      <el-button
        round
        class="header-item"
        v-bind:class="{ active: active === 3 }"
        @click="changeHeader(3)"
      >
        <span class="header_decor"><</span>
        <span class="header_text">&nbsp;联系我&nbsp;</span>
        <span class="header_sep">/&nbsp;</span>
        <span class="header_decor">></span>
      </el-button>
      <Theme class="header-item header_theme" />
    </div>
  </el-affix>
</template>
<style scoped lang="scss">
.header-group {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1vh 0;
  background-color: var(--my-header_bg);
  border-radius: 3vh;
  height: 6vh;

  .header-item {
    margin: 0 1rem !important;
    background-color: transparent;
    border: none;
    font-size: 1.1rem;
    height: 4vh;
  }

  .header-item:hover,
  .active,
  .active:hover {
    border: none;
    font-weight: bold;
  }
  .active,
  .header-item:hover {
    background-color: var(--my-header_item_bg);
    .header_decor {
      color: var(--my-header_decor);
    }
    .header_text {
      color: var(--my-header_text);
    }
    .header_sep {
      color: var(--my-header_sep);
    }
  }
  .header_theme {
    color: var(--my-header_theme);
    &:hover {
      color: var(--my-header_theme_hover);
      background-color: initial;
    }
  }
}
</style>
