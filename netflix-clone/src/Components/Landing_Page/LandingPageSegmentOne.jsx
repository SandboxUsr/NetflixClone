import React from 'react'
import "../../Styles/LandingPageSegmentOne.css"
import logo from "../../Assets/netflixlogo.png"

export default function LandingPageSegmentOne() {
  return (
    <div className="landing-pg-one-container">
        <div className="landing-pg-one-top">
            <div className="landing-pg-one-logo">
                <img className="landing-pg-one-ntflx-logo" src={logo} alt="netflix-logo" />
            </div>
            <div className="landing-pg-one-side">
                <select className="landing-pg-one-language-selector" name="language" id="language">
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                </select>
                <button type="button" className="btn btn-danger landing-pg-one-signin-button">Sign In</button>
            </div>
        </div>
        <div className="landing-pg-one-contents">
            <h1 className="landing-pg-one-contents-title">Unlimited movies, TV shows and more</h1>
            <h3 className="landing-pg-one-contents-text">Watch anywhere. Cancel anytime.</h3>
            <h5 className="landing-pg-one-contents-text">Ready to watch? Enter your email to create or restart your membership.</h5>
            <div className="landing-pg-one-contents-details">
                <input className="landing-pg-one-contents-details-email" type="email" name="usrEmail" id="usrEmail" placeholder="Email address"/>
                <button type="button" className="btn btn-danger landing-pg-one-contents-details-button">Get Started &gt;</button>
            </div>
        </div>
    </div>
  )
}
