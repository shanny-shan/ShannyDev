<script setup>
import { Plus } from '@element-plus/icons-vue'
import { ref } from 'vue'
const activeResume = ref('1')
</script>

<template>
  <div class="resume">
    <div class="resume_title">我的履历</div>
    <div class="collapse">
      <el-collapse v-model="activeResume" accordion>
        <el-collapse-item
          title="天津市大光软件科技有限公司 | 前端开发工程师 | 2022.03 ~ 2026.02"
          name="1"
          :icon="Plus"
        >
          <div></div>
        </el-collapse-item>
        <el-collapse-item
          title="吉林动画学院 | 全日制本科 | 软件工程专业 | 2017.09 ~ 2021.06"
          name="2"
          :icon="Plus"
        >
          <div></div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<style scoped lang="scss">
.resume {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .resume_title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    font-weight: bold;
    color: var(--my-resume_title);
    margin-top: 10vh;
  }
  .collapse {
    width: 60vw;
    margin-top: 5vh;
  }
}
</style>
