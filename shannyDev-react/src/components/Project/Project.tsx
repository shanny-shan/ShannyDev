import { useLanguageStore } from '@/stores'
import { Card } from 'antd'
import './Project.scss'

interface ProjectProps {
  id?: string
}

const Project = ({ id }: ProjectProps) => {
  const text = useLanguageStore((state) => state.text())

  const clickProject = () => {}

  return (
    <div className="project" id={id}>
      <div className="project_title">{text.projectTitle}</div>
      <div className="project_list">
        {[1].map((i) => (
          <div className="project_item" key={i}>
            <Card onClick={clickProject} hoverable>
              <img src={text.projectImgSrc} alt="" />
              <div className="card_content">
                <div className="card_title">{text.projectContentTitle}</div>
                <div className="card_msg">{text.projectContentMsg}</div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
