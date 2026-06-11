import defaultImage from '@/assets/images/loading.jpg'
import { useRef } from 'react'
import { useLanguageStore } from '@/stores'
import { Card } from 'antd'
import './Project.scss'

interface ProjectProps {
  id?: string
}

const Project = ({ id }: ProjectProps) => {
  const lang = useLanguageStore((state) => state.lang)
  const text = useLanguageStore((state) => state.text())

  const projectList = useRef([
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

  const clickProject = (href: string) => {
    window.open(href, '_blank')
  }

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>, item: any) => {
    if (!e.currentTarget.dataset.done) {
      e.currentTarget.dataset.done = '1'
      e.currentTarget.src = lang === 'zh-cn' ? item.imageCN : item.imageEN
    }
  }

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.dataset.done = '1'
    e.currentTarget.src = defaultImage
  }

  return (
    <div className="project" id={id}>
      <div className="project_title">{text.projectTitle}</div>
      <div className="project_list">
        {projectList.current.map((item) => (
          <div className="project_item" key={item.id}>
            <Card
              className={`card_${item.color}`}
              onClick={() => clickProject(item.href)}
              hoverable
            >
              <img
                src={defaultImage}
                onLoad={(e) => handleLoad(e, item)}
                onError={handleError}
              />

              <div className="card_content">
                <div className="card_title">
                  {lang == 'zh-cn' ? item.titleCN : item.titleEN}
                </div>
                <div className="card_msg">
                  {lang == 'zh-cn' ? item.msgCN : item.msgEN}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
