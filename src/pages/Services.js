
import React, { useState, useEffect } from "react";

function Services() {
  const [bannerImage, setBannerImage] = useState("/banner.jpg");

  useEffect(() => {
    const updateBannerImage = () => {
      if (window.innerWidth <= 480) {
        setBannerImage("/banner-mobile.jpg");
      } else if (window.innerWidth <= 768) {
        setBannerImage("/banner-tablette.jpg");
      } else {
        setBannerImage("/banner.jpg");
      }
    };

    updateBannerImage();
    window.addEventListener("resize", updateBannerImage);

    return () => {
      window.removeEventListener("resize", updateBannerImage);
    };
  }, []);

  return (
    
    <div className="serviceFull">
      <img src={bannerImage}  className="banner-work"alt="Bannière" style={{ width: "100%", display: "block" }} />
      <h1>MON OFFRE DE SERVICES</h1>
      <p className="intro-text">Voici les prestations sur lesquelles je peux intervenir.</p>
      <hr className="hr-work" />
    <br/>
      <div className="serviceMain">
        <div className="serviceCard">
          <img className="icon" src="/computer.svg" alt="computer blue" />
          <h2>UX DESIGN</h2>
          <p>
            <strong>L'UX Design</strong> est une méthode de conception centrée sur l'utilisateur.
            Son but est d'offrir une expérience de navigation optimale à l'internaute.
          </p>
        </div>

        <div className="serviceCard">
          <img className="icon" src="/document.png" alt="document blue" />
          <h2>DÉVELOPPEMENT WEB</h2>
          <p>
            <strong>Le développement de sites web</strong> repose sur l'utilisation des langages 
            <span className="seo"> HTML, CSS, </span> Javascript et <span className="seo">PHP</span>.
          </p>
        </div>

        <div className="serviceCard">
          <img className="icon" src="/ref.svg" alt="search dollar" />
          <h2>RÉFÉRENCEMENT</h2>
          <p>
            <strong>Le référencement naturel d'un site</strong>, aussi appelé <span className="seo">SEO</span>, 
            consiste à mettre en œuvre des techniques pour améliorer sa position dans les résultats des moteurs de recherche.
          </p>
        </div>
      </div>

      <style>
        {`
          .serviceFull {
            background-color: #f8f8fa;
            padding-bottom: 100px;
            text-align: center;
          }

          h1 {
            font-size: 2rem;
            margin: 20px 0;
          }

          .intro-text {
            font-size: 1.2rem;
            max-width: 600px;
            margin: 0 auto 20px;
          }

          .serviceMain {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            max-width: 1100px;
            margin: 0 auto;
          }

          .serviceCard {
            flex: 1;
            min-width: 280px;
            max-width: 350px;
            padding: 25px;
            background-color: white;
            border-radius: 15px;
            box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
            padding-bottom: 50px;
          }

          .serviceCard:hover {
            transform: translateY(-5px);
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
          }

          .icon {
            height: 50px;
            margin-bottom: 10px;
          }

          h2 {
            font-size: 1.5rem;
            margin: 10px 0;
          }

          p {
            font-size: 1rem;
            line-height: 1.5;
            margin: 10px 0;
          }

          .seo {
            text-decoration: underline dotted;
          }
@media screen and (max-width: 768px) {
  .serviceMain {
    width: 100%; 
    display: flex;
    justify-content: center;
    gap: 10px; 
  }

  .serviceCard {
    width: 250px; 
    padding: 15px; 
  }

  .icon {
    height: 35px; /* Icônes un peu plus petites */
  }

  h2 {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.9rem;
  }
}

          @media screen and (max-width: 480px) {
            .serviceMain {
              flex-direction: column;
              align-items: center;
            }

            .serviceCard {
              max-width: 100%;
              padding: 20px;
            }

            h1 {
              font-size: 1.6rem;
            }

            .intro-text {
              padding: 0 15px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Services;
