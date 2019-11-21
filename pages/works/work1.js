import React from 'react'
import scss from "../../styles/works.scss"
import Header from "../../components/header.js"
import Footer from "../../components/footer.js"
import PageTop from "../../components/page_top.js"

export default class extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        work1
        <PageTop/>
        <Footer/>
      </div>
    )
  }
}