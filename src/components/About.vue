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
    <div class="about_expertise" id="about">
      <div class="ex_title">
        {{ languageStore.text.exTitle }}
      </div>

      <div class="ex_content">
        <div class="content_header">
          {{ languageStore.text.exContentHeader }}
        </div>
        <div class="content_list">
          <div class="content">
            <div class="content_title one">
              {{ languageStore.text.exContentTitleOne }}
            </div>
            <div class="content_msg">
              <div class="text_h3">&lt;h3&gt;</div>
              <div class="msg">
                {{ languageStore.text.exContentMsgOne }}
              </div>
              <div class="text_h3">&lt;h3/&gt;</div>
            </div>
          </div>
          <div class="content">
            <div class="content_title two">
              {{ languageStore.text.exContentTitleTwo }}
            </div>
            <div class="content_msg">
              <div class="text_h3">&lt;h3&gt;</div>
              <div class="msg">
                {{ languageStore.text.exContentMsgTwo }}
              </div>
              <div class="text_h3">&lt;h3/&gt;</div>
            </div>
          </div>
          <div class="content">
            <div class="content_title three">
              {{ languageStore.text.exContentTitleThree }}
            </div>
            <div class="content_msg">
              <div class="text_h3">&lt;h3&gt;</div>
              <div class="msg">
                {{ languageStore.text.exContentMsgThree }}
              </div>
              <div class="text_h3">&lt;h3/&gt;</div>
            </div>
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
      color: var(--my-about_name);
      text-shadow: 0.25rem 0.25rem 0 var(--my-about_name_shadow);
    }

    .about_msg {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      background-color: var(--my-about_msg_back);
      color: var(--my-about_msg);
      padding: 0.2rem 1rem;
      margin-top: 5vh;
      box-shadow: 0.3rem 0.3rem 0 var(--my-about_msg_shadow);

      .about_lan {
        color: var(--my-about_lan);
        font-weight: bold;
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
      margin-top: 10vh;
      text-shadow: 0.3rem 0.3rem 0 var(--my-ex_title_shadow);
    }

    .ex_content {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      border: 0.1rem solid var(--my-ex_content_border);
      margin-top: 5vh;

      .content_header {
        display: flex;
        justify-content: start;
        align-items: center;
        box-sizing: border-box;
        padding: 0 1rem;
        background-color: var(--my-ex_content_header_back);
        color: var(--my-ex_content_header);
        width: 100%;
        height: 8vh;
        font-size: 1.5rem;
      }
      .content_list {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: var(--my-ex_content_list_back);
        width: 100%;

        .content {
          padding: 1rem;
          width: 33.33%;

          .content_title {
            font-size: 1.8rem;
            position: relative;
            display: inline-block;
            z-index: 0;

            &::after {
              content: '';
              position: absolute;
              left: 0;
              bottom: 0.15rem;
              width: 100%;
              height: 0.6rem;
              z-index: -1;
            }
          }
          .content_title.one {
            &::after {
              background-color: var(--my-ex_underline_1);
            }
          }
          .content_title.two {
            &::after {
              background-color: var(--my-ex_underline_2);
            }
          }
          .content_title.three {
            &::after {
              background-color: var(--my-ex_underline_3);
            }
          }
          .content_msg {
            margin-top: 1rem;

            .text_h3 {
              font-size: 1.2rem;
              color: var(--my-ex_text_h3);
            }
            .msg {
              border-left: 0.05rem solid var(--my-ex_content_msg_border);
              margin-left: 1.1vw;
              padding: 1rem 0 1rem 1rem;
              font-size: 1.2rem;
              line-height: 1.8rem;
            }
          }
        }
        .content:not(:last-child) {
          border-right: 0.1rem solid var(--my-ex_content_border);
        }
      }
    }
  }
}
</style>
