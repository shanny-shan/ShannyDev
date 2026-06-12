import { Affix } from 'antd'
import LinkComponent from '@/components/Link/Link'
import { useHeaderStore, useLanguageStore } from '@/stores'
import { SunOutlined, MoonOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import styles from './Header.module.scss'

const Header = () => {
  const headerStore = useHeaderStore()
  const setHeaderActive = headerStore.setHeaderActive
  const languageStore = useLanguageStore()
  const text = languageStore.text()

  const getInitialTheme = (): 'dark' | 'light' => {
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | null
    if (stored) return stored
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
    return prefersDark ? 'dark' : 'light'
  }

  const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme)

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.classList.toggle('light', theme === 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) =>
      setTheme(e.matches ? 'dark' : 'light')
    media.addEventListener('change', handler)
    return () => media.removeEventListener('change', handler)
  }, [])

  const changeHeader = (idx: number) => setHeaderActive(idx)

  return (
    <Affix offsetTop={0} style={{ width: '100%' }}>
      <div className={styles['header-group']}>
        <div className={styles['header_left']}>
          <LinkComponent
            active={0}
            href="https://www.shanny.wang/react"
            text="www.shanny.wang / React"
            position="left"
            clickFunction={() => changeHeader(0)}
          />
        </div>

        <div className={styles['header_center']}>
          <LinkComponent
            href="#about"
            active={0}
            text={text.about}
            clickFunction={() => changeHeader(0)}
          />
          <LinkComponent
            href="#resume"
            active={1}
            text={text.resume}
            clickFunction={() => changeHeader(1)}
          />
          <LinkComponent
            href="#project"
            active={2}
            text={text.project}
            clickFunction={() => changeHeader(2)}
          />
          <LinkComponent
            href="#contact"
            active={3}
            text={text.contact}
            clickFunction={() => changeHeader(3)}
          />
        </div>

        <div className={styles['header_right']}>
          <LinkComponent
            href="https://www.shanny.wang"
            text="To Vue"
            position="right"
            target="_blank"
          />
          <LinkComponent
            text={languageStore.lang === 'zh-cn' ? '中' : 'EN'}
            position="right"
            clickFunction={languageStore.toggleLang}
          />
          {/* <LinkComponent
            isIcon
            icon={theme === 'dark' ? <MoonOutlined /> : <SunOutlined />}
            position="right"
            clickFunction={toggleTheme}
          /> */}
        </div>
      </div>
    </Affix>
  )
}

export default Header
