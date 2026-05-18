<script setup>
import { useLanguageStore } from '@/stores'
import { Plus } from '@element-plus/icons-vue'
import { ref } from 'vue'

const activeResume = ref('1')
const languageStore = useLanguageStore()
</script>

<template>
  <div class="resume">
    <div class="resume_title">{{ languageStore.text.resumeTitle }}</div>
    <div class="collapse">
      <el-collapse v-model="activeResume" accordion>
        <el-collapse-item name="1" :icon="Plus">
          <template #title="{ isActive }">
            <div class="collapse_title">
              <div>天津市大光软件科技有限公司</div>
              <div>前端开发工程师 | 2022.03 ~ 2026.02</div>
            </div>
          </template>
          <div class="collapse_content">
            exContentMsgOne: '熟悉前后端协作开发，精通 JS/TS
            基础语法，熟练对接后端接口，参与项目整体迭代，具备完整前端业务开发与联调经验。',
            exContentMsgTwo: ' 深耕 Vue3、React 等技术栈，熟练使用 Element
            Plus等UI组件库，擅长通用组件封装、页面布局与交互开发，注重代码规范、复用性与用户体验优化。',
            exContentMsgThree: '熟练还原设计稿，精通 HTML/CSS
            页面搭建，掌握响应式布局、多端适配与动画效果，熟悉浏览器兼容处理与前端性能优化。',
          </div>
        </el-collapse-item>
        <el-collapse-item name="2" :icon="Plus">
          <template #title="{ isActive }">
            <div class="collapse_title">
              <div>吉林动画学院</div>
              <div>软件工程专业 | 2017.09 ~ 2021.06</div>
            </div>
          </template>
          <div class="collapse_content">
            exContentMsgOne: 'Proficient in JS/TS, experienced in front-backend
            collaboration, API integration and project iteration with solid
            development and debugging skills.', exContentMsgTwo: 'Skilled in
            Vue3, React and Element Plus, adept at component encapsulation and
            interactive development, focusing on code standardization and user
            experience.', exContentMsgThree: 'Capable of accurate design
            restoration, proficient in layout adaptation, animation
            implementation, browser compatibility and frontend performance
            optimization.'
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

  .resume_title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    font-weight: bold;
    color: var(--my-resume_title);
    margin-top: 10vh;
    text-shadow: 0.3rem 0.3rem 0 var(--my-resume_title_shadow);
  }
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
    }
  }
}
</style>
