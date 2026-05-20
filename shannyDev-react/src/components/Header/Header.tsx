import { Affix, Typography } from 'antd'
import Language from './Language/Language'
import { useHeaderStore, useLanguageStore } from '@/stores'
import './Header.scss'

const { Link } = Typography

const Header = () => {
  const headerActive = useHeaderStore((state) => state.headerActive)
  const setHeaderActive = useHeaderStore((state) => state.setHeaderActive)
  const text = useLanguageStore((state) => state.text())

  const changeHeader = (index: number) => {
    setHeaderActive(index)
  }

  return (
    <Affix offsetTop={0} style={{ width: '100%' }}>
      <div className="header-group">
        <div className="header_left">
          <Link
            href="/"
            className="header-item"
            onClick={() => changeHeader(0)}
            underline={false}
          >
            <span className="header_left_text">
              <span className="bracket left">[&nbsp;</span>
              <span className="print_text">www.shanny.wang</span>
              <span className="bracket right">&nbsp;]</span>
            </span>
          </Link>
        </div>

        <div className="header_center">
          <Link
            href="#about"
            className={`header-item ${headerActive === 0 ? 'active' : ''}`}
            onClick={() => changeHeader(0)}
            underline={false}
          >
            <span className="header_text">
              <span className="bracket left">[&nbsp;</span>
              <span className="print_text">{text.about}</span>
              <span className="bracket right">&nbsp;]</span>
            </span>
          </Link>

          <Link
            href="#resume"
            className={`header-item ${headerActive === 1 ? 'active' : ''}`}
            onClick={() => changeHeader(1)}
            underline={false}
          >
            <span className="header_text">
              <span className="bracket left">[&nbsp;</span>
              <span className="print_text">{text.resume}</span>
              <span className="bracket right">&nbsp;]</span>
            </span>
          </Link>

          <Link
            href="#project"
            className={`header-item ${headerActive === 2 ? 'active' : ''}`}
            onClick={() => changeHeader(2)}
            underline={false}
          >
            <span className="header_text">
              <span className="bracket left">[&nbsp;</span>
              <span className="print_text">{text.project}</span>
              <span className="bracket right">&nbsp;]</span>
            </span>
          </Link>

          <Link
            href="#contact"
            className={`header-item ${headerActive === 3 ? 'active' : ''}`}
            onClick={() => changeHeader(3)}
            underline={false}
          >
            <span className="header_text">
              <span className="bracket left">[&nbsp;</span>
              <span className="print_text">{text.contact}</span>
              <span className="bracket right">&nbsp;]</span>
            </span>
          </Link>
        </div>

        <div className="header_right">
          <Language className="header-item header_language" />
        </div>
      </div>
    </Affix>
  )
}

export default Header
