import { Layout } from 'antd'
import { useEffect } from 'react'
import Header from '@/pages/Header/Header'
import HeaderMobile from '@/pages/HeaderMobile/HeaderMobile'
import About from '@/pages/About/About'
import Resume from '@/pages/Resume/Resume'
import Project from '@/pages/Project/Project'
import Contact from '@/pages/Contact/Contact'
import { useUtilStore, useInitMobile, useScrollStore } from '@/stores'
import styles from './App.module.scss'

const { Header: AntHeader, Content } = Layout

const MainLayout = () => {
  useInitMobile()
  const isMobile = useUtilStore((state) => state.isMobile)
  const { handleScroll } = useScrollStore()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    // 页面首次加载执行一次
    handleScroll()
    // 组件销毁移除监听
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div className={styles['common-layout']}>
      <Layout>
        <AntHeader className={styles.header}>
          {isMobile ? <HeaderMobile /> : <Header />}
        </AntHeader>
        <Content className={styles.main}>
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
