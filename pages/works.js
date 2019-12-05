import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import scss from "../styles/works.scss"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import PageTop from "../components/page_top.js"

export default class extends React.Component {
  render() {
    return(
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        
        <Header/>
        <div className={scss.header_menu}>
          <ul>
            <li><Link href="/about"><a>ABOUT</a></Link></li>
            <li className={scss.menu_current}>WORKS</li>
            <li><Link href="/skill"><a>SKILL</a></Link></li>
            <li><Link href="/contact"><a>CONTACT</a></Link></li>
          </ul>
        </div>

        <div className={scss.work_big_style1}>
          <div className={scss.work_big_image}><img src={require("../images/example_page1.jpg")}/></div>
          <div className={scss.work_border}/>
          <div className={scss.work_big_text}>
            <h2>current work</h2>
            <p>
              TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。
              TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。
              TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。
            </p>
          </div>
        </div>
        <div className={scss.work_big_style2}>
          <div className={scss.work_big_image}><img src={require("../images/example_page2.jpg")}/></div>
          <div className={scss.work_border}/>
          <div className={scss.work_big_text}>
            <h2>current work</h2>
            <p>
              TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。
              TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。
              TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。
            </p>
          </div>
        </div>

        <div className={scss.works}>
          <div className={scss.work_small}>
            <div className={scss.work_small_image}>
              <Link href="/works/papillon_website"><img src={require("../images/example_page1.jpg")}/></Link>
            </div>
            <div className={scss.work_border}></div>
            <div className={scss.work_small_text}>
              <h3>papillon website</h3>
              <h4>Design / Coding</h4>
              <p>text text text text text text</p>
            </div>
          </div>
          <div className={scss.work_small}>
            <div className={scss.work_small_image}><img src={require("../images/example_page1.jpg")}/></div>
            <div className={scss.work_border}></div>
            <div className={scss.work_small_text}>
              <h3>current work</h3>
              <h4>Design / Coding</h4>
              <p>text text text text text text</p>
            </div>
          </div>
          <div className={scss.work_small}>
            <div className={scss.work_small_image}><img src={require("../images/example_page1.jpg")}/></div>
            <div className={scss.work_border}></div>
            <div className={scss.work_small_text}>
              <h3>current work</h3>
              <h4>Design / Coding</h4>
              <p>text text text text text text</p>
            </div>
          </div>
          <div className={scss.work_small}>
            <div className={scss.work_small_image}><img src={require("../images/example_page1.jpg")}/></div>
            <div className={scss.work_border}></div>
            <div className={scss.work_small_text}>
              <h3>current work</h3>
              <h4>Design / Coding</h4>
              <p>text text text text text text</p>
            </div>
          </div>
          <div className={scss.work_small}>
            <div className={scss.work_small_image}><img src={require("../images/example_page1.jpg")}/></div>
            <div className={scss.work_border}></div>
            <div className={scss.work_small_text}>
              <h3>current work</h3>
              <h4>Design / Coding</h4>
              <p>text text text text text text</p>
            </div>
          </div>
          <div className={scss.work_small}>
            <div className={scss.work_small_image}><img src={require("../images/example_page1.jpg")}/></div>
            <div className={scss.work_border}></div>
            <div className={scss.work_small_text}>
              <h3>current work</h3>
              <h4>Design / Coding</h4>
              <p>text text text text text text</p>
            </div>
          </div>
          <div className={scss.work_small}>
            <div className={scss.work_small_image}><img src={require("../images/example_page1.jpg")}/></div>
            <div className={scss.work_border}></div>
            <div className={scss.work_small_text}>
              <h3>current work</h3>
              <h4>Design / Coding</h4>
              <p>text text text text text text</p>
            </div>
          </div>
        </div>
        <PageTop/>
        <Footer/>
      </div>
    )
  }
}