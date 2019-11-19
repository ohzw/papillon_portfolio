import React from 'react'
import scss from "../styles/about.scss"
import Header from "../components/header.js"
import Footer from "../components/footer.js"


export default class extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <div className={scss.about}>
          <div className={scss.about_logo}><img src={require("../images/logo.png")}/></div>
          <div className={scss.about_company}>
            <ul>
              <li>COMPANY: 株式会社Papillon</li>
              <li>ESTABLISHED: 2019</li>
              <li>PRESIDENT DIRECTOR: TSUZUKI RYOGO</li>
              <li>CAPITAL: 900万円</li>
            </ul>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}