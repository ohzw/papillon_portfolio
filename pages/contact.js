import React from 'react'
import scss from "../styles/contact.scss"
import Header from "../components/header.js"
import Footer from "../components/footer.js"


export default class extends React.Component {
  render() {
    return(
      <div>
        <Header/>

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