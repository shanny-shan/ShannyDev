<script setup></script>

<template>
  <div class="about">
    <div class="about_top">
      <div class="about_name">
        <div>您好，我是王珊珊</div>
        <div>一名前端开发人员</div>
      </div>
      <div class="about_msg">
        专注
        <span class="about_lan">&nbsp;Vue、React&nbsp;</span>
        等前端开发，热爱技术，持续精进。
      </div>
    </div>
    <div class="about_expertise">
      <div class="ex_title">我的专长</div>
      <div class="ex_contant">
        <div class="contant">
          <div class="contant_title">软件开发</div>
          <div class="contant_msg">
            <div class="text_h3">&lt;h3&gt;</div>
            <div class="msg">
              熟悉前后端协作开发，精通 JS/TS 基础语法，<br />
              熟练对接后端接口，参与项目整体迭代，<br />
              具备完整前端业务开发与联调经验。<br />
            </div>
            <div class="text_h3">&lt;h3/&gt;</div>
          </div>
        </div>
        <div class="contant">
          <div class="contant_title">前端开发</div>
          <div class="contant_msg">
            <div class="text_h3">&lt;h3&gt;</div>
            <div class="msg">
              深耕 Vue2/Vue3 技术栈，熟练使用 Element Plus，<br />
              擅长通用组件封装、页面布局与交互开发，<br />
              注重代码规范、复用性与用户体验优化。<br />
            </div>
            <div class="text_h3">&lt;h3/&gt;</div>
          </div>
        </div>
        <div class="contant">
          <div class="contant_title">网页实现</div>
          <div class="contant_msg">
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
      font-size: 5rem;
      font-weight: bold;
      color: var(--my-text_green);
      margin-bottom: 5vh;
    }
    .about_msg {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--my-text_lightgreen);
      margin-top: 5vh;
      .about_lan {
        color: var(--my-text_black);
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
      color: var(--my-text_green);
    }
    .ex_contant {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border: 0.1rem solid var(--my-text_green);
      margin-top: 5vh;

      .contant {
        padding: 1rem;
        width: 33.33%;
        .contant_title {
          text-decoration: underline;
          text-decoration-color: var(--my-text_underline);
          text-underline-offset: -0.4rem;
          text-decoration-thickness: 0.6rem;
          font-size: 1.8rem;
        }
        .contant_msg {
          .text_h3 {
            font-size: 0.8rem;
            color: var(--my-text_gray);
          }
          .msg {
            border-left: 0.05rem solid var(--my-text_gray);
            margin-left: 1rem;
            padding-left: 1rem;
            font-size: 0.9rem;
          }
        }
      }
      .contant:not(:last-child) {
        border-right: 0.1rem solid var(--my-text_green);
      }
    }
  }
}
</style>
