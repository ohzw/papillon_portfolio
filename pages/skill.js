import React from 'react'
import Link from 'next/link'
import scss from "../styles/skill.scss"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import PageTop from "../components/page_top.js"


export default class extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <div className={scss.header_menu}>
          <ul>
            <li><Link href="/about"><a>ABOUT</a></Link></li>
            <li><Link href="/works"><a>WORKS</a></Link></li>
            <li className={scss.menu_current}>SKILL</li>
            <li><Link href="/contact"><a>CONTACT</a></Link></li>
          </ul>
        </div>

        <div className={scss.skills_image}>
          <img src={require("../images/skill.jpg")}/>
          <div className={scss.on_image_text}>
            <h2>SKILL</h2>
            <p>要らなければ消す。test text test text test text test text test text test text</p>
          </div>
        </div>
        <div className={scss.languages}>
          <div className={scss.language}>
            <font color="skyblue">
            <h4>Language long</h4>
            </font>
            <p>text text text text text text text text text text text text text text text text text text </p>
          </div>

        <br/>
          <div className={scss.language_small}>
            <font color="aquamarine">
            <h4>Language</h4>
            </font>
            <p>text text text text text text text text text </p>
          </div>
          <div className={scss.language_small}>
            <font color="lightgreen">
            <h4>Language</h4>
            </font>
            <p>text text text text text text text text text </p>
          </div>
          <div className={scss.language_small}>
            <font color="palegoldenrod">
            <h4>Language</h4>
            </font>
            <p>text text text text text text text text text </p>
          </div>
          <div className={scss.language_small}>
            <font color="navajowhite">
            <h4>Language</h4>
            </font>
            <p>text text text text text text text text text </p>
          </div>
          <div className={scss.language_small}>
            <font color="wheat">
            <h4>Language</h4>
            </font>
            <p>text text text text text text text text text </p>
          </div>
          <div className={scss.language_small}>
            <font color="lightpink">
            <h4>Language</h4>
            </font>
            <p>text text text text text text text text text </p>
          </div>
          <div className={scss.language_small}>
            <font color="plum">
            <h4>Language</h4>
            </font>
            <p>text text text text text text text text text </p>
          </div>
        </div>
        <PageTop/>
        <Footer/>
      </div>
    )
  }
}

