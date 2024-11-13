import React, { useState } from 'react';

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null); // För att hålla reda på vilket FAQ-item som är öppet

  const toggleFaq = (index) => {
    setIsOpen(isOpen === index ? null : index); // Om samma index klickas stängs den, annars öppnas den
  };

  return (
    <section className="container6">
      <div className="left-column">
        <div className="ask">
          <h2>Har du några frågor? Kolla in vanliga frågor och svar</h2>
          <p>Om du fortfarande har frågor och behöver kontakta oss?</p>
        </div>
        <div className="call">
          <img src="/bilder/call.svg" alt="Bild av en telefon" />
        </div>
        <div className="call">
          <img src="/bilder/sms.svg" alt="Bild av sms" />
        </div>
      </div>

      <div className="right-column">
        <div className="faq-main">
          <div className="faq-container">
            <div className={`faq-item ${isOpen === 0 ? 'open' : ''}`}>
              <h3 onClick={() => toggleFaq(0)}>Lagras någon av mina personuppgifter i appen?</h3>
              <i
                className={`fa-regular ${isOpen === 0 ? 'fa-angle-up' : 'fa-angle-down'}`}
                onClick={() => toggleFaq(0)}
              ></i>
              {isOpen === 0 && (
                <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus...</p>
              )}
            </div>

            <div className={`faq-item ${isOpen === 1 ? 'open' : ''}`}>
              <h3 onClick={() => toggleFaq(1)}>I vilka format kan jag ladda ner min transaktionshistorik?</h3>
              <i
                className={`fa-regular ${isOpen === 1 ? 'fa-angle-up' : 'fa-angle-down'}`}
                onClick={() => toggleFaq(1)}
              ></i>
              {isOpen === 1 && (
                <p>Exempel på möjliga format: PDF, CSV, Excel...</p>
              )}
            </div>

            <div className={`faq-item ${isOpen === 2 ? 'open' : ''}`}>
              <h3 onClick={() => toggleFaq(2)}>Hur kan jag uppdatera min användarprofil?</h3>
              <i
                className={`fa-regular ${isOpen === 2 ? 'fa-angle-up' : 'fa-angle-down'}`}
                onClick={() => toggleFaq(2)}
              ></i>
              {isOpen === 2 && (
                <p>För att uppdatera din profil, gå till inställningarna i appen...</p>
              )}
            </div>

            {/* Fler FAQ-items */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
