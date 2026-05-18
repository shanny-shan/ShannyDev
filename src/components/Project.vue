<script setup>
import { useLanguageStore } from '@/stores'
const languageStore = useLanguageStore()
</script>

<template>
  <div class="project">
    <div class="project_title">{{ languageStore.text.projectTitle }}</div>
    <div class="project_list">
      <div class="project_item" v-for="i in 5" :key="i">
        <el-card style="max-width: 480px">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            style="width: 100%"
          />
          <div class="card_content">
            <div class="card_title">
              Building Kalo's Foundation: A Design System for Growth and
              Inclusion
            </div>
            <div class="card_msg">
              I led the creation of a new design system to address usability,
              accessibility, and engineering roadblocks, driving client
              conversion and attracting key users.
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .project_title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    font-weight: bold;
    color: var(--my-project_title);
    margin-top: 10vh;
    text-shadow: 0.3rem 0.3rem 0 var(--my-project_title_shadow);
  }

  .project_list {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    width: 80vw;
    margin-top: 5vh;

    .project_item {
      width: calc((100% - 3rem) / 3);
      padding: 0.5rem;

      .el-card {
        --el-card-padding: 0;
        background-color: var(--my-card_back);
        box-shadow: 0.5rem 0.5rem 0 var(--my-card_shadow);
        border: none;

        .card_content {
          padding: 1rem;

          .card_title {
            font-size: 1.2rem;
            font-weight: bold;
            color: var(--my-card_title);
          }
          .card_msg {
            font-size: 1rem;
            color: var(--my-card_msg);
            margin-top: 1vh;
          }
        }
      }
    }
  }
}
</style>
