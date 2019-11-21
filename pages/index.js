
import React from 'react'
import scss from "../styles/works.scss"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import PageTop from "../components/page_top.js"


export default class extends React.Component {
  render() {
    return(
      <div>
      <meta http-equiv="refresh" content="0; URL=../about"/>
        {/* <Header/>
        <div className={scss.frame}>
        <iframe src="http://localhost:3000/about" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
        </div>
        <PageTop/> */}
        <Footer/>
      </div>
    )
  }
}