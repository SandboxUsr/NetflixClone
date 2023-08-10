import React from 'react'
import "../../Styles/LandingPageSegmentThree.css"
import five from "../../Assets/Landing_Page/five.jpg"

export default function LandingPageSegmentFive() {
  return (
    <div className="third-contents">
        <div className="third-imaged">
            <img src={five} alt="Five" />
        </div>
        <div className="third-textdata">
            <h1>Create profiles for kids</h1>
            <h3>Send children on adventures with their favourite</h3>
            <h3>characters in a space made just for them—free with</h3>
            <h3>your membership.</h3>
        </div>
    </div>
  )
}
