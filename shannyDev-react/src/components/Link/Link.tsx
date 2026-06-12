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
}: LinkComponentProps) => {
  const headerStore = useHeaderStore()
  const isActive = active !== null && headerStore.headerActive === active

  const linkClassList = [
    styles['header-item'],
    isActive ? styles.active : '',
    isIcon ? styles.isIcon : '',
  ]
    .filter(Boolean)
    .join(' ')

  const textWrapClass =
    position === 'center' ? styles.header_text : styles.header_left_text

  return (
    <Link
      href={href}
      target={target}
      className={linkClassList}
      onClick={clickFunction}
      underline={false}
    >
      {!isIcon ? (
        <span className={textWrapClass}>
          <span className={`${styles.bracket} ${styles.left}`}>[&nbsp;</span>
          <span className={styles.print_text}>{text}</span>
          <span className={`${styles.bracket} ${styles.right}`}>&nbsp;]</span>
        </span>
      ) : (
        icon
      )}
    </Link>
  )
}

export default LinkComponent
