    import React from "react";


    function WorkCard({ imgSrc, altText, title, description, tech, btnText }) {
        return (
            <div className="card">
                <img src={imgSrc} alt={altText} className="fruits" />
                <div className="information-work">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <button className="btn-customer">{btnText}</button>
                </div>
                <hr className="hr-travail" />
                <div className="end-work">{tech}</div>
            </div>
        );
    }

    function Work() {
        return (
            <>
                <img src="/banner.jpg" className="banner-work" alt="blue banner" />
                <div className="presentation-portfolio">
                    <h1>PORTFOLIO</h1>
                    <h2>Voici quelques-unes de mes réalisations.</h2>
                    <hr className="hr-work" />
                </div>

                <div className="global-work">
                    
                    <WorkCard
                        imgSrc="/freshfood.jpg"
                        altText="Fruits et légumes frais"
                        title="Fresh Food"
                        description="Réalisation d'un site avec commande en ligne."
                        tech="Site réalisé avec PHP et MySQL"
                        btnText="Voir"
                    />
                    <WorkCard
                        imgSrc="/akira.jpg"
                        altText="Sushis du Restaurant Akira"
                        title="Restaurant Akira"
                        description="Réalisation d'un site vitrine."
                        tech="Site réalisé avec WordPress"
                        btnText="Voir"
                    />
                    <WorkCard
                        imgSrc="/bien.jpg"
                        altText="Décor zen pour Espace bien-être"
                        title="Espace bien-être"
                        description="Réalisation d'un site vitrine pour un praticien de bien-être."
                        tech="Site réalisé en HTML/CSS"
                        btnText="Voir"
                    />
                </div>

            
                <style>
                    {`
                    p {
                        font-size: 0.85rem;
                    }

                    .presentation-portfolio {
                        text-align: center;
                        margin-top: 40px;
                    }

                    h2 {
                        font-size: 1rem;
                    }

                        .hr-work{
                        width: 16%;
                        
                        }

                    .global-work {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        width: 100%;
                        gap: 30px;
                        padding: 40px 20px 50px;
                        min-height: 200px;
                    }

                    .fruits {
                        width: 300px;
                        height: 220px;
                        border-radius: 5px;
                    }

                    .card {
                        width: calc(33.333% - 20px);
                        max-width: 301px;
                        border: 1px solid #d4d4d4;
                        border-radius: 8px;
                        margin-bottom: 40px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        overflow: hidden;
                    }

                    .information-work {
                        text-align: center;
                        padding: 15px;
                    }

                    .btn-customer {
                        color: #146cfc;
                        border: 1px solid #146cfc;
                        border-radius: 5px;
                        background-color: white;
                        margin-bottom: 5px;
                        padding: 5px 10px;
                    }

                    .hr-travail {
                        width: 100%;
                        margin: 0;
                    }

                    .end-work {
                        padding: 10px;
                        background-color: #f4f4f4;
                        text-align: center;
                    }

                    @media (max-width: 768px) {
                        .global-work {
                            justify-content: flex-start;
                            margin: 40px ;
                            
                        }

                        .card {
                            width: calc(50% - 20px);
                         
                        }
                    }

                    @media (max-width: 480px) {
                        .global-work{
                    align-items: center;

                        }
                        .card {
                            width: 100%; 
                          margin-left: 30px;
                        }
                        
                        information-work{
                        text-align: center;
                        }
                    }
                    `}
                </style>
            </>
        );
    }

    export default Work;
