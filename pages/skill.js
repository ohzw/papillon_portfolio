import React from 'react'
import scss from "../styles/skill.scss"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import PageTop from "../components/page_top.js"


export default class extends React.Component {
  render() {
    return(
      <div>
        <Header/>
          <div className={scss.skills_image}>
            <img src={require("../images/example_page1.jpg")}/>
            <div className={scss.on_image_text}>
              <h2>SKILL</h2>
              <p>要らなければ消す。test text test text test text test text test text test text</p>
            </div>
          </div>
          <div className={scss.languages}>
            <div className={scss.language}>
              <font color="red">
              <h4>Language long</h4>
              </font>
              <p>text text text text text text text text text text text text text text text text text text </p>
            </div>

          <br/>
            <div className={scss.language_small}>
              <font color="pink">
              <h4>Language</h4>
              </font>
              <p>text text text text text text text text text </p>
            </div>
            <div className={scss.language_small}>
              <font color="purple">
              <h4>Language</h4>
              </font>
              <p>text text text text text text text text text </p>
            </div>
            <div className={scss.language_small}>
              <font color="orange">
              <h4>Language</h4>
              </font>
              <p>text text text text text text text text text </p>
            </div>
            <div className={scss.language_small}>
              <font color="lightblue">
              <h4>Language</h4>
              </font>
              <p>text text text text text text text text text </p>
            </div>
            <div className={scss.language_small}>
              <font color="blue">
              <h4>Language</h4>
              </font>
              <p>text text text text text text text text text </p>
            </div>
            <div className={scss.language_small}>
              <font color="cyan">
              <h4>Language</h4>
              </font>
              <p>text text text text text text text text text </p>
            </div>
            <div className={scss.language_small}>
              <font color="brown">
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

