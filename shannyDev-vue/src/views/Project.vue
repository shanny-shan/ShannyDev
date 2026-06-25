<script setup>
import Title from '@/components/Title.vue'
import { ref } from 'vue'
import { useLanguageStore, useProjectStore, useUtilStore } from '@/stores'
const languageStore = useLanguageStore()
const projectStore = useProjectStore()
const utilStore = useUtilStore()
</script>

<template>
  <div class="project">
    <Title :title="languageStore.text.projectTitle" />
    <div class="project_list">
      <div
        class="project_item"
        v-for="item in projectStore.projectList"
        :key="item.id"
      >
        <el-card
          :class="'card_' + item.color"
          @click="projectStore.clickProject(item.href)"
        >
          <img
            :src="utilStore.defaultImage"
            @load="(e) => utilStore.handleLoad(e, item)"
            @error="utilStore.handleError"
          />
          <div class="card_content">
            <div class="card_title">
              {{ languageStore.lang == 'zh-cn' ? item.titleCN : item.titleEN }}
            </div>
            <div class="card_msg">
              {{ languageStore.lang == 'zh-cn' ? item.msgCN : item.msgEN }}
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

  .project_list {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    width: 80vw;
    margin-top: 5vh;

    @media (max-width: 415px) {
      width: 95vw;
    }

    .project_item {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: calc(100% / 3);
      padding: 1rem;

      @media (max-width: 415px) {
        width: 100%;
      }

      .card_blue {
        background-color: var(--my-card_blue_back);
        box-shadow: 1rem 1rem 0 var(--my-card_blue_shadow);
      }
      .card_pink {
        background-color: var(--my-card_pink_back);
        box-shadow: 1rem 1rem 0 var(--my-card_pink_shadow);
      }
      .el-card {
        cursor: pointer;
        border: none;
        border-radius: 0;
        border-right: 0.1rem solid var(--my-card_border);
        border-bottom: 0.1rem solid var(--my-card_border);

        img {
          width: 100%;
          height: 21.5vh;
          object-fit: contain;
          border-radius: 0;
          border: 0.1rem solid var(--my-card_border);
          background-color: var(--my-card_img_back);
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
