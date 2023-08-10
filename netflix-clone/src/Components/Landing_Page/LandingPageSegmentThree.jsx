import React from 'react'
import "../../Styles/LandingPageSegmentThree.css"
import three from "../../Assets/Landing_Page/three.jpg"

export default function LandingPageSegmentThree() {
  return (
    <div className="third-contents">
        <div className="third-imaged">
            <img src={three} alt="Third" />
        </div>
        <div className="third-textdata">
            <h1>Download your shows to</h1>
            <h1>watch offline</h1>
            <h3>Save your favourites easily and always have</h3>
            <h3>something to watch.</h3>
        </div>
    </div>
  )
}
