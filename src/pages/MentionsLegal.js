import React, { useState } from "react";

function MentionsLegal() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      
      <div className="legal">
        <h1>MENTIONS LÉGALES</h1>
        <hr className="hr-work" />
      </div>

      
      <div className="accordion">
        
        <div className={`accordion-item ${activeIndex === 0 ? "active" : ""}`}>
        <div 
  className="accordion-header" 
  onClick={() => toggleAccordion(0)}
  role="button"
  aria-expanded={activeIndex === 0} 
  aria-controls="accordion-content-0"
  tabIndex={0} 
>
            <span>Éditeur du site</span>
            <span className={`accordion-icon ${activeIndex === 0 ? "open" : ""}`}>
              <img className="arroww" src="/arroww.svg" alt="Flèche d'ouverture" />
            </span>
          </div>
          {activeIndex === 0 && (
            <div className="accordion-content">
              <h2>John Doe</h2>
              <address>
                <img className="svgIcon" src="/pin.svg" alt="Localisation" />
                40 Rue Laure Diebold <br />
                69009 Lyon, France
              </address>
              <a className="linkrel" href="tel:+33620304050">
                <img className="svgIcon" src="/phone.svg" alt="Téléphone" />
                06 20 30 40 50
              </a>
              <br />
              <a className="linkrel" href="mailto:john.doe@gmail.com">
                <img className="svgIcon" src="/mail.svg" alt="Email" />
                john.doe@gmail.com
              </a>
            </div>
          )}
        </div>


        <div className={`accordion-item ${activeIndex === 1 ? "active" : ""}`}>
        <div 
  className="accordion-header" 
  onClick={() => toggleAccordion(1)}
  role="button"
  aria-expanded={activeIndex === 1} 
  aria-controls="accordion-content-1"
  tabIndex={1} 
>
            <span>Hébergeur</span>
            <span className={`accordion-icon ${activeIndex === 1 ? "open" : ""}`}>
              <img className="arroww" src="/arroww.svg" alt="Flèche d'ouverture" />
            </span>
          </div>
          {activeIndex === 1 && (
            <div className="accordion-content">
              <h2>Alway Data</h2>
              <address>
                91 rue du Faubourg Saint Honoré
                <br />
                75008 Paris
              </address>
              <br />
              <img className="svgIcon" src="/network.svg" alt="Hébergement internet" />
              <a
                className="linkrel"
                href="https://www.alwaysdata.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Aller sur le site AlwaysData"
              >
                www.alwaysdata.com
              </a>
            </div>
          )}
        </div>

        
        <div className={`accordion-item ${activeIndex === 2 ? "active" : ""}`}>
        <div 
  className="accordion-header" 
  onClick={() => toggleAccordion(2)}
  role="button"
  aria-expanded={activeIndex === 2} 
  aria-controls="accordion-content-2"
  tabIndex={2}
>
            <span>Crédits</span>
            <span className={`accordion-icon ${activeIndex === 2 ? "open" : ""}`}>
              <img className="arroww" src="/arroww.svg" alt="Flèche d'ouverture" />
            </span>
          </div>
          {activeIndex === 2 && (
            <div className="accordion-content">
              <h2>Crédits</h2>
              <p>Site développé par John Doe, étudiant au CEF.</p>
              <br />
              <p>
                Les images libres de droit sont issues du site{""}
                <a
                  className="linkrel"
                  href="https://pixabay.com/fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pixabay
                </a>.
              </p>
            </div>
          )}
        </div>
      </div>

      
      <style>
        {`
          body {
            background-color: #f9f9f9;
          }
          .legal {
            margin-bottom: 50px;
          }
          h1 {
            text-align: center;
            margin-top: 25px;
          }
          .accordion-content h2 {
            margin-bottom: 15px;
          }
          .accordion {
            width: 100%;
            max-width: 1000px;
            margin: 20px auto;
            margin-bottom: 50px;
          }
          .accordion-item {
            background-color: #f9f9f9;
          }
          .svgIcon {
            width: 20px;
            height: 25px;
          }
          .accordion-content .svgIcon {
            margin-right: 4px;
          }
          .accordion-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            cursor: pointer;
            font-weight: bold;
          }
          .accordion-header:hover {
            background-color: #e6e6e6;
          }
          .accordion-icon {
            transition: transform 0.3s ease;
          }
          .accordion-icon.open {
            transform: rotate(180deg);
          }
          .accordion-content * {
            margin: 0;
            padding: 0;
          }
          .accordion-content {
            padding: 15px;
            background-color: #fff;
            animation: fadeIn 0.3s ease;
            font-family: Arial, sans-serif;
            gap: 5px;
          }
          .accordion-item.active .accordion-header {
            background-color: #e8f1ff;
            color: #2d78e8;
            border: 3px solid #bcd6fc;
          }
          .arroww {
            width: 20px;
            height: 20px;
          }
          .linkrel {
            color: #2679fb;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
}

export default MentionsLegal;
