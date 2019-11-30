import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import scss from "../styles/about.scss"
import Header from "../components/header.js"
import Footer from "../components/footer.js"

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
            <li className={scss.menu_current}>ABOUT</li>
            <li><Link href="/works" pressHref>WORKS</Link></li>
            <li><Link href="/skill" pressHref>SKILL</Link></li>
            <li><Link href="/contact" pressHref>CONTACT</Link></li>
          </ul>
        </div>

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