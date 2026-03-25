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
        <span><</span><span>&nbsp;关于我&nbsp;</span><span>/></span>
      </el-button>
      <el-button
        round
        class="header-item"
        v-bind:class="{ active: active === 1 }"
        @click="changeHeader(1)"
      >
        <span><</span><span>&nbsp;我的履历&nbsp;</span><span>/></span>
      </el-button>
      <el-button
        round
        class="header-item"
        v-bind:class="{ active: active === 2 }"
        @click="changeHeader(2)"
      >
        <span><</span><span>&nbsp;我的项目&nbsp;</span><span>/></span>
      </el-button>
      <el-button
        round
        class="header-item"
        v-bind:class="{ active: active === 3 }"
        @click="changeHeader(3)"
      >
        <span><</span><span>&nbsp;联系我&nbsp;</span><span>/></span>
      </el-button>
      <Theme class="header-item" />
    </div>
  </el-affix>
</template>
<style scoped lang="scss">
.header-group {
  display: flex;
  justify-content: center;
  align-items: center;
  .header-item {
    margin: 0 1rem !important;
    background-color: transparent;
    border: none;
    color: #4c6763;
    font-size: 1.1rem;
    height: 2.5rem;
  }
  .header-item:hover {
    border: none;
    background-color: initial;
    color: #4c6763;
  }
  .active {
    border: none;
    background-color: #f6f3ef;
    color: #4c6763;
  }
  .active:hover {
    border: none;
    background-color: #f6f3ef;
    color: #4c6763;
  }
}
</style>
