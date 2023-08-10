import React from 'react'
import "../../Styles/LandingPageSegmentOne.css"
import logo from "../../Assets/netflixlogo.png"

export default function LandingPageSegmentOne() {
  return (
    <div className="container">
        <div className="top">
            <div className="logo">
                <img src={logo} alt="netflix-logo" />
            </div>
            <div className="info">
                <select name="language" id="language">
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                </select>
                <button type="button" className="btn btn-danger">Sign In</button>
            </div>
        </div>
        <div className="contents">
            <h1>Unlimited movies, TV shows and more</h1>
            <h3 className="contents-text">Watch anywhere. Cancel anytime.</h3>
            <h5 className="contents-text">Ready to watch? Enter your email to create or restart your membership.</h5>
            <div className="info">
                <input type="email" name="usrEmail" id="usrEmail" placeholder="Email address"/>
                <button type="button" id="inside" className="btn btn-danger">Get Started &gt;</button>
            </div>
        </div>
    </div>
  )
}
