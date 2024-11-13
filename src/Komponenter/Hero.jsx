import React from 'react'

const Hero = () => {
  return (
    <section className="hero">
    <div className="container">
        <div className="text-section">
            <h1>Manage All Your Money in One App</h1>
            <p>Experience next-gen mobile banking. Save, spend & manage your finances effortlessly.</p>
            <div className="buttons">
                <a href="#" className="app-store-btn">
                    <img src="/bilder/appstore.svg" alt="Download on the App Store" />
                </a>
                <a href="#" className="google-play-btn">
                    <img src="/bilder/googleplay.svg" alt="Get it on Google Play" />
                </a>
            </div>
            <div className="read-more">
                <a href="#" className="btn btn-round btn-white">
                    <i className="fa fa-angle-down"></i>
                </a>
                <span>Discover More</span>
            </div>
        </div>
        <div className="image-container">
            <img src="/bilder/dubbleiphopne.svg" alt="App interface on phone" className="phone-image" />
        </div>
    </div>
</section>
  )
}

export default Hero