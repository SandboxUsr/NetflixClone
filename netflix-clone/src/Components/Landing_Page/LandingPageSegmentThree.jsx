import React from 'react'
import "../../Styles/LandingPageSegmentThree.css"
import three from "../../Assets/Landing_Page/three.jpg"

export default function LandingPageSegmentThree() {
  return (
    <div className="landing-pg-three-contents">
        <div className="landing-pg-three-image">
            <img className="landing-pg-three-image-instance" src={three} alt="Third" />
        </div>
        <div className="landing-pg-three-textdata">
            <h1 className="landing-pg-three-textdata-one">Download your shows to</h1>
            <h1 className="landing-pg-three-textdata-two">watch offline</h1>
            <h3 className="landing-pg-three-textdata-three">Save your favourites easily and always have</h3>
            <h3 className="landing-pg-three-textdata-four">something to watch.</h3>
        </div>
    </div>
  )
}
