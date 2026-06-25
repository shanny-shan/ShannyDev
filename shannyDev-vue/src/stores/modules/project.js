import { defineStore } from 'pinia'
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

export const useProjectStore = defineStore('project', () => {
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

  return {
    projectList,
    clickProject,
  }
})
