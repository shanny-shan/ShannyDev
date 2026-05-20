import { Typography } from 'antd'
import { useLanguageStore } from '@/stores'
import './Language.scss'

const { Link } = Typography

interface LanguageProps {
  className: string
}

const Language = ({ className }: LanguageProps) => {
  const { lang, toggleLang } = useLanguageStore()

  return (
    <Link
      className={`header_language ${className}`}
      onClick={toggleLang}
      underline={false}
    >
      <span className="bracket left">[&nbsp;</span>
      <span className="print_text">{lang === 'zh-cn' ? '中' : 'EN'}</span>
      <span className="bracket right">&nbsp;]</span>
    </Link>
  )
}

export default Language
