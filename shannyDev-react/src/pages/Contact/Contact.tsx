import Title from '@/components/Title/Title'
import { useState } from 'react'
import { Input, Button, message } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { useLanguageStore } from '@/stores'
import emailjs from '@emailjs/browser'
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
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!inputName || !inputEmail || !inputMessage) {
      message.warning(text.formRequired)
      return
    }
    setLoading(true)
    try {
      const templateParams = {
        name: inputName,
        email: inputEmail,
        message: inputMessage,
        reply_to: inputEmail,
      }
      await emailjs.send(
        'service_8dudqbm',
        'template_xb7nvew',
        templateParams,
        'XGFbMQhsBdx6cR_vA',
      )
      message.success(text.sendSuccess)
      setInputName('')
      setInputEmail('')
      setInputMessage('')
    } catch (err) {
      message.error(text.sendFailed)
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact" id={id}>
      <Title title={text.contactTitle} />
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
        <Button type="primary" loading={loading} onClick={handleSubmit}>
          {text.submit}
        </Button>
      </div>
    </div>
  )
}

export default Contact
