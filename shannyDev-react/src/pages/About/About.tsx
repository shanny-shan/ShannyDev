import Title from '@/components/Title/Title'
import { useLanguageStore } from '@/stores'
import './About.scss'
const About = () => {
  const text = useLanguageStore((state) => state.text())

  return (
    <div className="about">
      <div className="about_top">
        <div className="about_name">
          <div>{text.aboutTitleOne}</div>
          <div>{text.aboutTitleTwo}</div>
        </div>
        <div className="about_msg">
          <span>
            {text.aboutContentOne}
            <span className="about_lan">&nbsp;Vue3&nbsp;</span>
            {text.aboutContentTwo}
          </span>
          <span>
            {text.aboutContentThree}
            <span className="about_lan">&nbsp;.NET、Java&nbsp;</span>
            {text.aboutContentFour}
          </span>
          {text.aboutContentFive}
        </div>
      </div>

      <div className="about_expertise" id="about">
        <Title title={text.exTitle} />

        <div className="ex_content">
          <div className="content_header">{text.exContentHeader}</div>
          <div className="content_list">
            <div className="content">
              <div className="content_title one">{text.exContentTitleOne}</div>
              <div className="content_msg">
                <div className="text_h3">&lt;h3&gt;</div>
                <div className="msg">{text.exContentMsgOne}</div>
                <div className="text_h3">&lt;h3/&gt;</div>
              </div>
            </div>

            <div className="content">
              <div className="content_title two">{text.exContentTitleTwo}</div>
              <div className="content_msg">
                <div className="text_h3">&lt;h3&gt;</div>
                <div className="msg">{text.exContentMsgTwo}</div>
                <div className="text_h3">&lt;h3/&gt;</div>
              </div>
            </div>

            <div className="content">
              <div className="content_title three">
                {text.exContentTitleThree}
              </div>
              <div className="content_msg">
                <div className="text_h3">&lt;h3&gt;</div>
                <div className="msg">{text.exContentMsgThree}</div>
                <div className="text_h3">&lt;h3/&gt;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
