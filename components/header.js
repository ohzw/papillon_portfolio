import React from 'react'
import scss from "../components/header.scss"

export default class extends React.Component {
  render() {
    return(
      <div>
        <div className={scss.header_title}>
          <h1>PAPILLION</h1>
          <p>個人が輝ける未来への挑戦 adojfsidof</p>
        </div>
      </div>
    )
  }
}