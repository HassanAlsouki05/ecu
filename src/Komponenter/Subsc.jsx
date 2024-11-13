import React, { useState } from 'react';

const Subsc = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(true);  // När användaren klickar på knappen
  };

  return (
    <section className="subscribe-section">
        <div className="subscribe-box">
            <div className="icon-text-container">
                <img src="/bilder/alarm.svg" alt="Notification Icon" className="icon" />
                <h2>Subscribe to Our Newsletter</h2>
            </div>
            <div className="input-button-container">
                <input type="email" placeholder="Your email" />
                <button onClick={handleSubscribe}>Subscribe</button>
            </div>
            {subscribed && <p className="subscribe-message">Thank you for subscribing!</p>} {/* Visa meddelande när användaren har klickat på knappen */}
        </div>
    </section>
  );
};

export default Subsc;
