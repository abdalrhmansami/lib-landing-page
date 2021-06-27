import React from 'react'
import LibsList from './LibsList'
import About from "../component/About"
// import doctor from '../images/doctor-2.jpg'
// import doctor2 from '../images/doctor-3.jpg'
const Landing = ({libs}) => {
    
    return (
        <div>
        <section>
        <div className="landing">
            <div className="layer-black">
            {/* <div className="logo">LOGO</div> */}
            <div className="textlanding">
                مختبرنا
            </div>
            </div> 
        </div>
            <About />
            <LibsList libs={libs} />
            </section>
        </div>
    )
}

export default Landing
