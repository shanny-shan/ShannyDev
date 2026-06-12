<script setup>
import Title from '@/components/Title.vue'
import { useLanguageStore } from '@/stores'
import { Plus } from '@element-plus/icons-vue'
import { ref } from 'vue'

const activeResume = ref('1')
const languageStore = useLanguageStore()
</script>

<template>
  <div class="resume">
    <Title :title="languageStore.text.resumeTitle" />
    <div class="collapse">
      <el-collapse v-model="activeResume" accordion>
        <el-collapse-item name="1" :icon="Plus">
          <template #title="{ isActive }">
            <div class="collapse_title">
              <div>{{ languageStore.text.resumeTitleLeftOne }}</div>
              <div>
                {{ languageStore.text.resumeTitleRightOne }} | 2022.03 ~ 2026.02
              </div>
            </div>
          </template>
          <div class="collapse_content">
            {{ languageStore.text.resumeContentOne }}
          </div>
        </el-collapse-item>
        <el-collapse-item name="2" :icon="Plus">
          <template #title="{ isActive }">
            <div class="collapse_title">
              <div>{{ languageStore.text.resumeTitleLeftTwo }}</div>
              <div>
                {{ languageStore.text.resumeTitleRightTwo }} | 2017.09 ~ 2021.06
              </div>
            </div>
          </template>
          <div class="collapse_content">
            {{ languageStore.text.resumeContentTwo }}
          </div>
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

  .collapse {
    width: 60vw;
    margin-top: 5vh;
    .collapse_title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-right: 1rem;
      font-weight: bold;
      font-size: 1.1rem;
    }
    .collapse_content {
      color: var(--my-collapse_content);
      font-size: 1.05rem;
      white-space: pre-line;
    }
  }
}
</style>
