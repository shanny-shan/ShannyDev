<script setup>
import { useLanguageStore } from '@/stores'
const languageStore = useLanguageStore()

const clickProject = () => {}
</script>

<template>
  <div class="project">
    <div class="project_title">{{ languageStore.text.projectTitle }}</div>
    <div class="project_list">
      <div class="project_item" v-for="i in 1" :key="i">
        <el-card @click="clickProject()">
          <img :src="languageStore.text.projectImgSrc" />
          <div class="card_content">
            <div class="card_title">
              {{ languageStore.text.projectContentTitle }}
            </div>
            <div class="card_msg">
              {{ languageStore.text.projectContentMsg }}
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
        cursor: pointer;
        background-color: var(--my-card_back);
        box-shadow: 1rem 1rem 0 var(--my-card_shadow);
        border: none;
        border-right: 0.1rem solid var(--my-card_border);
        border-bottom: 0.1rem solid var(--my-card_border);
        border-radius: 0;

        img {
          width: 100%;
          border-radius: 0;
          border: 0.1rem solid var(--my-card_border);
        }

        .card_content {
          padding: 1rem 0.5rem 0 0.5rem;

          .card_title {
            font-size: 1.2rem;
            font-weight: bold;
            color: var(--my-card_title);
          }
          .card_msg {
            font-size: 1rem;
            color: var(--my-card_msg);
            margin-top: 1vh;
            line-height: 1.6rem;
          }
        }
      }
    }
  }
}
</style>
