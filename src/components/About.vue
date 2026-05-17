<script setup>
import { useLanguageStore } from '@/stores'
const languageStore = useLanguageStore()
</script>

<template>
  <div class="about">
    <div class="about_top">
      <div class="about_name">
        <div>{{ languageStore.text.aboutTitleOne }}</div>
        <div>{{ languageStore.text.aboutTitleTwo }}</div>
      </div>
      <div class="about_msg">
        {{ languageStore.text.aboutContentOne }}
        <span class="about_lan">&nbsp;Vue、React&nbsp;</span>
        {{ languageStore.text.aboutContentTwo }}
      </div>
    </div>
    <div class="about_expertise">
      <div class="ex_title">{{ languageStore.text.exTitle }}</div>
      <div class="ex_content">
        <div class="content">
          <div class="content_title">
            {{ languageStore.text.exContentTitleOne }}
          </div>
          <div class="content_msg">
            <div class="text_h3">&lt;h3&gt;</div>
            <div class="msg">
              熟悉前后端协作开发，精通 JS/TS 基础语法，<br />
              熟练对接后端接口，参与项目整体迭代，<br />
              具备完整前端业务开发与联调经验。<br />
            </div>
            <div class="text_h3">&lt;h3/&gt;</div>
          </div>
        </div>
        <div class="content">
          <div class="content_title">
            {{ languageStore.text.exContentTitleTwo }}
          </div>
          <div class="content_msg">
            <div class="text_h3">&lt;h3&gt;</div>
            <div class="msg">
              深耕 Vue2/Vue3 技术栈，熟练使用 Element Plus，<br />
              擅长通用组件封装、页面布局与交互开发，<br />
              注重代码规范、复用性与用户体验优化。<br />
            </div>
            <div class="text_h3">&lt;h3/&gt;</div>
          </div>
        </div>
        <div class="content">
          <div class="content_title">
            {{ languageStore.text.exContentTitleThree }}
          </div>
          <div class="content_msg">
            <div class="text_h3">&lt;h3&gt;</div>
            <div class="msg">
              熟练还原设计稿，精通 HTML/CSS 页面搭建，<br />
              掌握响应式布局、多端适配与动画效果，<br />
              熟悉浏览器兼容处理与前端性能优化。<br />
            </div>
            <div class="text_h3">&lt;h3/&gt;</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .about_top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 92vh;

    .about_name {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 5rem;
      font-weight: bold;
      color: var(--my-about_name);
    }
    .about_msg {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--my-about_msg);
      margin-top: 5vh;

      .about_lan {
        color: var(--my-about_lan);
      }
    }
  }

  .about_expertise {
    width: 80vw;

    .ex_title {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 5rem;
      font-weight: bold;
      color: var(--my-ex_title);
    }
    .ex_content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border: 0.1rem solid var(--my-ex_content_border);
      margin-top: 5vh;

      .content {
        padding: 1rem;
        width: 33.33%;

        .content_title {
          font-size: 1.8rem;
          position: relative;
          display: inline-block;

          &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0.15rem;
            width: 100%;
            height: 0.6rem;
            background-color: var(--my-ex_underline_1);
            z-index: -1;
          }
        }
        .content_msg {
          margin-top: 1rem;

          .text_h3 {
            font-size: 0.8rem;
            color: var(--my-ex_text_h3);
          }
          .msg {
            border-left: 0.05rem solid var(--my-ex_content_msg_border);
            margin-left: 1rem;
            padding-left: 1rem;
            font-size: 0.9rem;
          }
        }
      }
      .content:not(:last-child) {
        border-right: 0.1rem solid var(--my-ex_content_border);
      }
    }
  }
}
</style>
