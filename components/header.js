import React from 'react'
import scss from "../components/header.scss"
import Head from 'next/head'

export default class extends React.Component {
  render() {
    return(
      <div>
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"/>
        </Head>
        <div className={scss.header_title}>
          <h1 class="animated fadeInDown">PAPILLON</h1>
          <p class="animated fadeInUp">個人が輝ける未来への挑戦</p>
        </div>
      </div>
    )
  }
}