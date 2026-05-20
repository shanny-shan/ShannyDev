import { useState } from 'react'
import { Input, Button } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { useLanguageStore } from '@/stores'
import './Contact.scss'

const { TextArea } = Input

interface ContactProps {
  id?: string
}

const Contact = ({ id }: ContactProps) => {
  const text = useLanguageStore((state) => state.text())

  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputMessage, setInputMessage] = useState('')

  return (
    <div className="contact" id={id}>
      <div className="contact_title">{text.contactTitle}</div>
      <div className="contact_sub_title">{text.contactSubTitle}</div>
      <div className="contact_content">
        <Input
          className="input_name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder={text.contactNamePlaceholder}
          allowClear={{ clearIcon: <CloseOutlined /> }}
        />
        <Input
          className="input_email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          placeholder={text.contactEmailPlaceholder}
          allowClear={{ clearIcon: <CloseOutlined /> }}
        />
        <TextArea
          className="input_message"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          rows={5}
          placeholder={text.contactMessagePlaceholder}
          allowClear={{ clearIcon: <CloseOutlined /> }}
        />
      </div>
      <div className="submit_button">
        <Button type="primary">{text.submit}</Button>
      </div>
    </div>
  )
}

export default Contact
