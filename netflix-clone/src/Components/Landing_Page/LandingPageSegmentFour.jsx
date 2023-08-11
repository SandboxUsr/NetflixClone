import React from 'react'
import "../../Styles/LandingPageSegmentTwo.css"
import four from "../../Assets/Landing_Page/four.jpg"

export default function LandingPageSegmentFour() {
  return (
    <div className="landing-pg-two-contents">
        <div className="landing-pg-two-textdata">
            <h1 className="landing-pg-two-textdata-one">Watch everywhere</h1>
            <h3 className="landing-pg-two-textdata-two">Stream unlimited movies and TV shows on your</h3>
            <h3 className="landing-pg-two-textdata-three">phone, tablet, laptop, and TV.</h3>
        </div>
        <div className="landing-pg-two-contents-image">
            <img className="landing-pg-two-contents-image-instance" src={four} alt="Second" />
        </div>
    </div>
  )
}
