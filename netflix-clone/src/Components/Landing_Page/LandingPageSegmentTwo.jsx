import React from 'react'
import "../../Styles/LandingPageSegmentTwo.css"
import second from "../../Assets/Landing_Page/two_1.jpg"

export default function LandingPageSegmentTwo() {
  return (
    <div className="sec-contents">
        <div className="textdata">
            <h1>Enjoy on your TV</h1>
            <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast,</h3>
            <h3>Apple TV, Blu-ray players and more.</h3>
        </div>
        <div className="sec-image">
            <img src={second} alt="Second" />
        </div>
    </div>
  )
}
