import React from 'react'
import scss from "../styles/index.scss"
import Header from "../components/header.js"
import Footer from "../components/footer.js"


export default class extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        body text
        <Footer/>
      </div>
    )
  }
}