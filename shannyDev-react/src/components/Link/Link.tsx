import React from 'react'
import { Typography } from 'antd'
import { useHeaderStore } from '@/stores'
import styles from './Link.module.scss'

const { Link } = Typography

interface LinkComponentProps {
  clickFunction?: () => void
  isIcon?: boolean
  icon?: React.ReactNode
  active?: number | null
  href?: string
  text?: string
  position?: 'center' | 'left' | 'right'
  target?: string
  isMobile?: boolean
}

const LinkComponent = ({
  clickFunction,
  isIcon = false,
  icon,
  active = null,
  href = '#',
  text = '',
  position = 'center',
  target = '_self',
  isMobile = false,
}: LinkComponentProps) => {
  const headerStore = useHeaderStore()
  const isActive = active !== null && headerStore.headerActive === active

  const linkClassList = [
    styles['header-item'],
    isActive ? styles.active : '',
    isIcon ? styles.isIcon : '',
    isMobile ? styles.isMobile : '',
  ]
    .filter(Boolean)
    .join(' ')

  const textWrapClass =
    position === 'center' ? styles.header_text : styles.header_left_text

  const handleClick = () => {
    // 只执行切换高亮，不拦截默认跳转，锚点正常滚动
    if (clickFunction) clickFunction()
  }

  return (
    <Link
      href={href}
      target={target}
      className={linkClassList}
      onClick={handleClick}
      underline={false}
    >
      {!isIcon ? (
        <span className={textWrapClass}>
          {!isMobile && (
            <span className={`${styles.bracket} ${styles.left}`}>[&nbsp;</span>
          )}
          <span className={styles.print_text}>{text}</span>
          {!isMobile && (
            <span className={`${styles.bracket} ${styles.right}`}>&nbsp;]</span>
          )}
        </span>
      ) : (
        icon
      )}
    </Link>
  )
}

export default LinkComponent
