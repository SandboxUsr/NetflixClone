import React from 'react'
import "../Styles/LandingPage.css"
import LandingPageSegmentOne from '../Components/Landing_Page/LandingPageSegmentOne'
import LandingPageSegmentTwo from './Landing_Page/LandingPageSegmentTwo'
import LandingPageSegmentThree from './Landing_Page/LandingPageSegmentThree'
import LandingPageSegmentFour from './Landing_Page/LandingPageSegmentFour'
import LandingPageSegmentFive from './Landing_Page/LandingPageSegmentFive'
import FAQ from './Landing_Page/FAQ'
import FinalFooter from './Landing_Page/FinalFooter'

export default function LandingPage() {
  return (
    <>
      <LandingPageSegmentOne />
      <div className="gap"></div>
      <LandingPageSegmentTwo />
      <div className="gap"></div>
      <LandingPageSegmentThree />
      <div className="gap"></div>
      <LandingPageSegmentFour />
      <div className="gap"></div>
      <LandingPageSegmentFive />
      <div className="gap"></div>
      <FAQ />
      <div className="gap"></div>
      <FinalFooter />
    </>
  )
}
