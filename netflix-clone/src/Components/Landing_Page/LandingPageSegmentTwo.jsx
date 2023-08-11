import React from 'react'
import "../../Styles/LandingPageSegmentTwo.css"
import second from "../../Assets/Landing_Page/two_1.jpg"

export default function LandingPageSegmentTwo() {
  return (
    <div className="landing-pg-two-contents">
        <div className="landing-pg-two-textdata">
            <h1 className="landing-pg-two-textdata-one">Enjoy on your TV</h1>
            <h3 className="landing-pg-two-textdata-two">Watch on smart TVs, PlayStation, Xbox, Chromecast,</h3>
            <h3 className="landing-pg-two-textdata-three">Apple TV, Blu-ray players and more.</h3>
        </div>
        <div className="landing-pg-two-contents-image">
            <img className="landing-pg-two-contents-image-instance" src={second} alt="Second" />
        </div>
    </div>
  )
}
