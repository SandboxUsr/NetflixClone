import React from 'react'
import "../../Styles/LandingPageSegmentTwo.css"
import four from "../../Assets/Landing_Page/four.jpg"

export default function LandingPageSegmentFour() {
  return (
    <div className="sec-contents">
        <div className="textdata">
            <h1>Watch everywhere</h1>
            <h3>Stream unlimited movies and TV shows on your</h3>
            <h3>phone, tablet, laptop, and TV.</h3>
        </div>
        <div className="sec-image">
            <img src={four} alt="Second" />
        </div>
    </div>
  )
}
