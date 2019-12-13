import React from 'react'
import scss from "../components/header.scss"
import Head from 'next/head'

export default class extends React.Component {
  render() {
    return(
      <div>
        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>

        </head>
        <div className={scss.header_title}>
          <h1 class="animated fadeInDown">PAPILLON</h1>
          <p>個人が輝ける未来への挑戦</p>
        </div>
      </div>
    )
  }
}