import React from 'react'
import scss from "../components/footer.scss"

export default class extends React.Component {
  render() {
    return(
      <div>

        <div className={scss.footer}>
          <div className={scss.contact}><p>Contact</p></div>
          <div className={scss.logo}><img src={require("../images/logo.png")}/></div>
          <div className={scss.copyright}><p>COPYRIGHT 2019</p></div>
        </div>
      </div>
    )
  }
}