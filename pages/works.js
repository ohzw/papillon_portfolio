import React from 'react'
import scss from "../styles/works.scss"
import Header from "../components/header.js"
import Footer from "../components/footer.js"


export default class extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <div className={scss.current_work}>
          <div className={scss.current_work_image}><img src={require("../images/example_page1.jpg")}/></div>
          <div className={scss.current_work_border}/>
          <div className={scss.current_work_text}>
            <h2>current work</h2>
            <p>TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 
            TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 
            TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 
            </p>
          </div>
        </div>
        <div className={scss.current_work2}>
          <div className={scss.current_work_image}><img src={require("../images/example_page2.jpg")}/></div>
          <div className={scss.current_work_border}/>
          <div className={scss.current_work_text}>
            <h2>current work</h2>
            <p>TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 
            TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 
            TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 TEXT 説明。 
            </p>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}