import { Typography } from 'antd'
import { SunOutlined, MoonOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import './Theme.scss'

const { Link } = Typography

interface ThemeProps {
  className: string
}

const Theme = ({ className }: ThemeProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <Link className={className} onClick={toggleTheme} underline={false}>
      {theme === 'dark' ? <MoonOutlined /> : <SunOutlined />}
    </Link>
  )
}

export default Theme
