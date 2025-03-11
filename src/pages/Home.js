import React, { useState, useEffect } from "react";

function Home() {
  const [prenom] = useState("John");
  const [nom] = useState("Doe");
  const [metier] = useState("Développeur web full stack");
  
  const [backgroundImage, setBackgroundImage] = useState("/hero-bg.jpg");

  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.innerWidth <= 480) {
        setBackgroundImage("/hero-bg-mobile.jpg");
      } else if (window.innerWidth <= 768) {
        setBackgroundImage("/hero-bg-tablette.jpg");
      } else {
        setBackgroundImage("/hero-bg.jpg");
      }
    };

    updateBackgroundImage();
    window.addEventListener("resize", updateBackgroundImage);

    return () => window.removeEventListener("resize", updateBackgroundImage);
  }, []);

  const handleClick = () => {
    alert("bouton cliqué !");
  };

  return (
    <>
      <div
        className="home-background d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="home-container">
          <div className="home-row">
            <h1>Bonjour, je suis {prenom} {nom}</h1>
            <h2>{metier}</h2>
            <div>
            <button className="home-btn-custom" onClick={handleClick} aria-label="En savoir plus sur moi">
  En savoir plus
</button>
            </div>
          </div>
        </div>
      </div>

      
      <div className="home-main-container d-flex flex-column justify-content-center align-items-center">
        <div className="home-blockContainer">
          <div className="home-blockContainerLeft">
            <h3>À propos</h3>
            <hr />
            <p>
              Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web.</strong>
            </p>
            <p>
              Basé à Lyon, je suis en recherche d'une alternance pour consolider ma formation de <strong>développeur web full stack</strong>.
            </p>
            <p>
              J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
            </p>
          </div>

          <div className="home-blockContainerRight">
            <img src="/john-doe-about.jpg" alt="John Doe" className="home-about-image" />
            <h3 className="home-competences">Mes compétences</h3>
            <ul className="home-skills">
              <li className="home-skill-item">
                <span>HTML 5 90%</span>
                <div className="home-bar-progress">
                  <div style={{ width: "90%", backgroundColor: "#FF4C4C", height: "100%", borderRadius: "10px" }}></div>
                </div>
              </li>
              <li className="home-skill-item">
                <span>CSS 80%</span>
                <div className="home-bar-progress">
                  <div style={{ width: "80%", backgroundColor: "#1BC5DC", height: "100%", borderRadius: "10px" }}></div>
                </div>
              </li>
              <li className="home-skill-item">
                <span>JAVASCRIPT 70%</span>
                <div className="home-bar-progress">
                  <div style={{ width: "70%", backgroundColor: "#F7D154", height: "100%", borderRadius: "10px" }}></div>
                </div>
              </li>
              <li className="home-skill-item">
                <span>PHP 60%</span>
                <div className="home-bar-progress">
                  <div style={{ width: "60%", backgroundColor: "#4CAF50", height: "100%", borderRadius: "10px" }}></div>
                </div>
              </li>
              <li className="home-skill-item">
                <span>REACT 50%</span>
                <div className="home-bar-progress">
                  <div style={{ width: "50%", backgroundColor: "#2196F3", height: "100%", borderRadius: "10px" }}></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style>
        {`
          .home-background {
            position: relative;
            width: 100vw;
            height: 100vh;
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          .home-row {
            padding-bottom: 70px;
          }

          h1 {
            font-size: 5rem;
          }

          h2 {
            font-size: 3.3rem;
          }
          h3{
           font-weight: bold;
           }
          .home-btn-custom {
            margin-top: 25px;
            padding: 8px 30px;
            font-size: 1rem;
            color: #fff;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .home-btn-custom:hover {
            background-color: #0056b3;
          }

          .home-blockContainer {
            max-width: 90vw;
            margin: 40px auto;
            padding: 0;
            display: flex;
            background-color: white;
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
          }

          .home-blockContainerLeft, .home-blockContainerRight {
            flex: 1;
            padding: 30px;
          }
          
          .home-main-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            margin: 0 auto;
          }

          .home-skills {
            padding: 0;
            margin: 0;
            list-style: none;
          }

          .home-bar-progress {
            width: 100%;
            background-color: #eee;
            height: 10px;
            border-radius: 5px;
            overflow: hidden;
            margin-top: 5px;
          }

          .home-skill-item{
            margin-top: 5px;
          }
          .home-about-image {
            width: 100%;
            height: auto;
            max-width: 500px;
          }

          hr {
            color: blue;
            opacity: 1;
            border: solid 1px;
          }

          p {
            font-size: 1.12rem;
          }

          strong {
            color: black;
          }

          /* Responsive pour mobile */

          @media (max-width: 480px) {

            .home-background {
            
              padding: 10px;
              background-image: url('/hero-bg-mobile.jpg');
              display: flex;
              height: 100vh;
 
            }

            h1 {
              font-size: 2.5rem;
              padding: 0 50px;
            }

            h2 {
              font-size: 1.8rem;
            }

            h3{
            text-align: left;
            margin-left: 30px;
            position: relative;
            top: 10px;
            }

            p{
            font-size: 0.9rem;
            padding: 0 30px 0 5px;
            margin-left: 25px;
            }

            hr{
               margin-left: 30px;
               width: 83%;
            }

            .home-btn-custom {
              font-size: 0.8rem;
              padding: 6px 15px;
              margin: 0 auto;
            }

            .home-blockContainer {
              padding: 0;
              margin: 10px 0;
              flex-direction: column;
              box-shadow: none;
            }

            .home-blockContainerLeft,
            .home-blockContainerRight {
              width: 100%;
              padding: 10px;
              margin: 0;
            }

            .home-about-image {
              width: 100%;
              max-width: 350px;
              height: auto;
              display: block;
              margin: 0 auto;
            }

            .home-skill-item {
              display: flex;
              flex-direction: column;
              margin-left: 35px;
              margin-top: 20px;
              font-size: 1rem;
            }

            .home-skill-item span {
              margin-bottom: 5px;
            }

            .home-skill-item .home-bar-progress {
              width: 85%;
              S
              
            }
          }
        `}
      </style>
    </>
  );
}

export default Home;
