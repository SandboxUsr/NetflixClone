import React from 'react'
import "../../Styles/LandingPageSegmentThree.css"
import five from "../../Assets/Landing_Page/five.jpg"

export default function LandingPageSegmentFive() {
  return (
    <div className="landing-pg-three-contents">
        <div className="landing-pg-three-image">
            <img className="landing-pg-three-image-instance" src={five} alt="Five" />
        </div>
        <div className="landing-pg-three-textdata">
            <h1 className="landing-pg-three-textdata-one">Create profiles for kids</h1>
            <h3 className="landing-pg-three-textdata-two">Send children on adventures with their favourite</h3>
            <h3 className="landing-pg-three-textdata-three">characters in a space made just for them—free with</h3>
            <h3 className="landing-pg-three-textdata-four">your membership.</h3>
        </div>
    </div>
  )
}
