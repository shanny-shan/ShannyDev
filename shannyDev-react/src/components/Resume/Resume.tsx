import { useState } from 'react'
import { Collapse } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useLanguageStore } from '@/stores'
import './Resume.scss'

interface ResumeProps {
  id?: string
}

const Resume = ({ id }: ResumeProps) => {
  const [activeKey, setActiveKey] = useState<string>('1')
  const text = useLanguageStore((state) => state.text())

  const items = [
    {
      key: '1',
      label: (
        <div className="collapse_title">
          <div>{text.resumeTitleLeftOne}</div>
          <div>{text.resumeTitleRightOne} | 2022.03 ~ 2026.02</div>
        </div>
      ),
      children: <div className="collapse_content">{text.resumeContentOne}</div>,
    },
    {
      key: '2',
      label: (
        <div className="collapse_title">
          <div>{text.resumeTitleLeftTwo}</div>
          <div>{text.resumeTitleRightTwo} | 2017.09 ~ 2021.06</div>
        </div>
      ),
      children: <div className="collapse_content">{text.resumeContentTwo}</div>,
    },
  ]

  return (
    <div className="resume" id={id}>
      <div className="resume_title">{text.resumeTitle}</div>
      <div className="collapse">
        <Collapse
          activeKey={activeKey}
          onChange={(keys) => setActiveKey(keys[0])}
          ghost
          accordion
          items={items}
          expandIcon={() => <PlusOutlined />}
        />
      </div>
    </div>
  )
}

export default Resume
