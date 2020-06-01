import React from 'react'
import LandingCarousel from './carousel/LandingCarousel'
import About from './about/About'
import Wonder from './Wonder/Wonder'
import Services from './services/Services'

export default function Home() {
    return (
        <div style={{paddingTop : '71px'}}>
            <LandingCarousel/>
            <Services/>
            <Wonder/>
            <About/>
        </div>
    )
}
