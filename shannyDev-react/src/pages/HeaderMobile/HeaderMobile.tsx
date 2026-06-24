import { Affix, Drawer } from 'antd'
import LinkComponent from '@/components/Link/Link'
import { MenuOutlined } from '@ant-design/icons'
import { useHeaderStore, useLanguageStore } from '@/stores'
import styles from './HeaderMobile.module.scss'

const HeaderMobile = () => {
  const { drawer, setDrawer, changeHeader } = useHeaderStore()
  const languageStore = useLanguageStore()
  const text = languageStore.text()
  const { lang, toggleLang } = languageStore

  const closeDrawer = () => setDrawer(false)

  return (
    <Affix offsetTop={0} style={{ width: '100%' }}>
      <div className={styles['header-group']}>
        <div className={styles['header_left']}>
          <MenuOutlined
            className={styles.menu_icon}
            onClick={() => setDrawer(true)}
          />
          <Drawer
            open={drawer}
            placement="left"
            title=""
            closable={false}
            onClose={closeDrawer}
          >
            <LinkComponent
              href="#about"
              active={0}
              text={text.about}
              clickFunction={() => changeHeader(0)}
              isMobile
            />
            <LinkComponent
              href="#resume"
              active={1}
              text={text.resume}
              clickFunction={() => changeHeader(1)}
              isMobile
            />
            <LinkComponent
              href="#project"
              active={2}
              text={text.project}
              clickFunction={() => changeHeader(2)}
              isMobile
            />
            <LinkComponent
              href="#contact"
              active={3}
              text={text.contact}
              clickFunction={() => changeHeader(3)}
              isMobile
            />
          </Drawer>
        </div>
        <div className={styles['header_right']}>
          <LinkComponent
            href="https://www.shanny.wang"
            text="To Vue"
            position="right"
            target="_blank"
          />
          <LinkComponent
            text={lang === 'zh-cn' ? '中' : 'EN'}
            position="right"
            clickFunction={toggleLang}
            isMobile
          />
        </div>
      </div>
    </Affix>
  )
}

export default HeaderMobile
