import { Affix } from 'antd'
import LinkComponent from '@/components/Link/Link'
import { useHeaderStore, useLanguageStore } from '@/stores'
import styles from './Header.module.scss'

const Header = () => {
  const { changeHeader } = useHeaderStore()
  const languageStore = useLanguageStore()
  const text = languageStore.text()

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
        </div>
      </div>
    </Affix>
  )
}

export default Header
