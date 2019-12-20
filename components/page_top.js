import React from 'react'
import scss from "../components/page_top.scss"
import Head from 'next/head'

export default class extends React.Component {
  render() {
    return(
      <div>
        <Head>
          <script type="text/javascript" src="../static/script.js"/>
        </Head>
        <div className={scss.page_top}>
          <a href="#" id="return-top">PAGE TOP ▲</a>
        </div>
      </div>
    )
  }
}