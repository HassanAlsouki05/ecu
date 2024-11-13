import React from 'react'

const FeatuersSection = () => {
  return (
    <section className="features-section">
        <div className="container">
            <div className="iphone-container">
                <img src="/bilder/iphonesnett.svg" alt="iPhone with app" className="iphone-image" />
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <h2>
                        <img className="icon" src="/bilder/icon1.svg" alt="Easy Payments" /> 
                        Easy Payments
                    </h2>
                    <p>Effortless and secure transactions wherever you are.</p>
                </div>
                <div className="grid-item">
                    <h2>
                        <img className="icon" src="/bilder/icon2.svg" alt="Data Security" /> 
                        Data Security
                    </h2>
                    <p>Your data is safe with top-level encryption and security measures.</p>
                </div>
                <div className="grid-item">
                    <h2>
                        <img className="icon" src="/bilder/icon3.svg" alt="Cost Statistics" /> 
                        Cost Statistics
                    </h2>
                    <p>Track all your expenses in one simple, intuitive dashboard.</p>
                </div>
                <div className="grid-item">
                    <h2>
                        <img className="icon" src="/bilder/icon4.svg" alt="24/7 Support" /> 
                        24/7 Support
                    </h2>
                    <p>Our support team is always available to assist you anytime.</p>
                </div>
                <div className="grid-item">
                    <h2>
                        <img className="icon" src="/bilder/icon5.svg" alt="Cashback" /> 
                        Regular Cashback
                    </h2>
                    <p>Earn cashback on your everyday spending with our exclusive offers.</p>
                </div>
                <div className="grid-item">
                    <h2>
                        <img className="icon" src="/bilder/icon6.svg" alt="Top Standards" /> 
                        Top Standards
                    </h2>
                    <p>We follow industry-leading standards to provide the best experience.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeatuersSection