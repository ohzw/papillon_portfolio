import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import scss from "../styles/contact.scss"
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
          <nav class="cl-effect-11">
          <ul>
            <li><Link href="/about"><a data-hover="Desultory">ABOUT</a></Link></li>
            <li><Link href="/works"><a>WORKS</a></Link></li>
            <li><Link href="/skill"><a>SKILL</a></Link></li>
            <li className={scss.menu_current}>CONTACT</li>
          </ul>
          </nav>
        </div>

        <div className={scss.contact}>
          <div className={scss.form}>
            <form>
              <input type="text" name="name" placeholder="Name"/>
              <input type="email" name="mailaddress" placeholder="Email"/>
              <textarea name="message" rows="18" placeholder="Message"/>
              <button type="submit">send</button>
            </form>
          </div>
        </div>

        <Footer/>
      </div>
    )
  }
}