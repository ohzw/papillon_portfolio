import React from 'react'
import scss from "../../styles/work.scss"
import Header from "../../components/header.js"
import Footer from "../../components/footer.js"
import PageTop from "../../components/page_top.js"

export default class extends React.Component {
  render() {
    return(
      <div>
        <Header/>

        <div className={scss.path}>
          {/* この辺Next.js使いたい */}
          work > papillon_website
        </div>

        <div className={scss.work_title}>
          <h1>Project 1</h1>
        </div>

        <div className={scss.work_detail_style1}>
          <img src={require("../works/papillon_website-images/page_screenshot (1).png")}/>
          <h2>style1</h2>
            <p>
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            </p>
        </div>
        <div className={scss.work_detail_style2}>
          <img src={require("../works/papillon_website-images/page_screenshot (2).png")}/>
          <h2>style2</h2>
          <div className={scss.text_box}>
            <div className={scss.text_left}>
              <p>
              テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
              テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
              テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
              </p>
            </div>
            <div className={scss.text_right}>
              <p>
              テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
              テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
              テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
              </p>
            </div>
          </div>
        </div>
        <div className={scss.work_detail_style3}>
          <img src={require("../works/papillon_website-images/page_screenshot (3).png")}/>
          <div className={scss.box}>
          <h2>style3</h2>
            <div className={scss.text}>
              <p>
              テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
              テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
              テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
              テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
              テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
              テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
              </p>
            </div>
          </div>
        </div>
        <PageTop/>
        <Footer/>
      </div>
    )
  }
}