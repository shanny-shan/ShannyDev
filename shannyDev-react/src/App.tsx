import { useEffect } from 'react'
import { Layout } from 'antd'
import Header from '@/pages/Header/Header'
import About from '@/pages/About/About'
import Resume from '@/pages/Resume/Resume'
import Project from '@/pages/Project/Project'
import Contact from '@/pages/Contact/Contact'
import { useHeaderStore } from '@/stores'
import './App.scss'

const { Header: AntHeader, Content } = Layout

const MainLayout = () => {
  const anchorList = useHeaderStore((state) => state.anchorList)
  const setHeaderActive = useHeaderStore((state) => state.setHeaderActive)

  const handleScroll = () => {
    const scrollTop = window.scrollY
    const clientHeight = document.documentElement.clientHeight
    const pageHeight = document.documentElement.scrollHeight
    const list = anchorList

    if (scrollTop + clientHeight >= pageHeight - 50) {
      setHeaderActive(list.length - 1)
      return
    }

    let current = 0
    for (let i = 0; i < list.length; i++) {
      const el = document.getElementById(list[i])
      if (!el) continue

      const rect = el.getBoundingClientRect()
      if (rect.top <= 200) {
        current = i
      }
    }

    setHeaderActive(current)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    // handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [anchorList, setHeaderActive])

  return (
    <div className="common-layout">
      <Layout>
        <AntHeader className="header">
          <Header />
        </AntHeader>
        <Content className="main">
          <About />
          <Resume id="resume" />
          <Project id="project" />
          <Contact id="contact" />
        </Content>
      </Layout>
    </div>
  )
}

export default MainLayout
