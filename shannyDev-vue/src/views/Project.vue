<script setup>
import Title from '@/components/Title.vue'
import { ref } from 'vue'
import defaultImage from '@/assets/images/loading.jpg'
import { useLanguageStore } from '@/stores'
const languageStore = useLanguageStore()

const projectList = ref([
  {
    id: 0,
    href: 'https://www.shanny.wang',
    color: 'blue',
    imageCN:
      'https://beijing-files.oss-cn-beijing.aliyuncs.com/shanny-dev/images/dev_cn.png',
    imageEN:
      'https://beijing-files.oss-cn-beijing.aliyuncs.com/shanny-dev/images/dev_en.png',
    titleCN: '个人作品集网站',
    titleEN: 'Personal Portfolio Website',
    msgCN:
      '这里是我的个人前端作品集，收录项目开发案例，记录技术成长与实战经验。',
    msgEN:
      'This is my personal frontend portfolio that displays practical projects and records technical experience.',
  },
  {
    id: 1,
    color: 'pink',
    href: 'https://www.shanny.work',
    imageCN:
      'https://beijing-files.oss-cn-beijing.aliyuncs.com/shanny-dev/images/blog.png',
    imageEN:
      'https://beijing-files.oss-cn-beijing.aliyuncs.com/shanny-dev/images/blog.png',
    titleCN: '个人博客网站',
    titleEN: 'Personal Blog Website',
    msgCN: '这里是我的个人博客网站，记录技术分享与生活感悟。',
    msgEN:
      'This is my personal blog website that records technical insights and life reflections.',
  },
])

const clickProject = (href) => {
  window.open(href, '_blank')
}

const handleLoad = (e, item) => {
  if (!e.target.dataset.done) {
    e.target.dataset.done = '1'
    e.target.src = languageStore.lang === 'zh-cn' ? item.imageCN : item.imageEN
  }
}

const handleError = (e) => {
  e.target.dataset.done = '1'
  e.target.src = defaultImage
}
</script>

<template>
  <div class="project">
    <Title :title="languageStore.text.projectTitle" />
    <div class="project_list">
      <div class="project_item" v-for="item in projectList" :key="item.id">
        <el-card :class="'card_' + item.color" @click="clickProject(item.href)">
          <img
            :src="defaultImage"
            @load="(e) => handleLoad(e, item)"
            @error="handleError"
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

    .project_item {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: calc(100% / 3);
      padding: 1rem;
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
          height: 25vh;
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
