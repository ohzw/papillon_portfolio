import React from 'react'
import scss from "../components/page_top.scss"

export default class extends React.Component {
  render() {
    return(
      <div>
        <div className={scss.page_top}>
          <a href="#">PAGE TOP ▲</a>
        </div>
      </div>
    )
  }
}