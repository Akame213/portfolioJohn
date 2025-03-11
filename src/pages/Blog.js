import React from "react";

function Work() {
    return (
        <>
            <img src="/banner.jpg" className="banner-work" alt="banner " />
            <div className="presentation-portfolio">
                <h1>BLOG</h1>
                <h2>Retrouvez ici quelques articles sur le développement web.</h2>
                <hr className="hr-work" />
            </div>

            <div className="global-work">

                <div className="mainBlog">
                    <img src="/codage.jpg" alt="codage HTML/CSS" className="picture" />
                    <div className="information-work">
                        <h3>Coder son site en HTML/CSS</h3>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn-blog">Lire la suite</button>
                    </div>
                    <div className="end-work">
                    <hr className="hr-customer" />
                    <p><time datetime="2022-08-22">Publié le 22 août 2022</time></p></div>
                </div>

                <div className="mainBlog">
                    <img src="/pieces.jpg" alt="vendre ses produits sur le web" className="picture" />
                    <div className="information-work">
                        <h3>Vendre ses produits sur le web</h3>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn-blog">Lire la suite</button>
                    </div>
                    <div className="end-work">
                    <hr className="hr-customer" />
                    <p><time datetime="2022-08-20">Publié le 20 août 2022</time></p></div>
                </div>

                <div className="mainBlog">
                    <img src="/ordinateur.jpg" alt="se positionner sur google" className="picture" />
                    <div className="information-work">
                        <h3>Se positionner sur Google</h3>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn-blog">Lire la suite</button>
                    </div>
                    <div className="end-work">
                    <hr className="hr-customer" />
                    <p><time datetime="2022-08-01">Publié le 1 août 2022</time></p></div>
                </div>

                <div className="mainBlog">
                    <img src="/responsive.jpg" alt="coder en responsive" className="picture" />
                    <div className="information-work">
                        <h3>Coder en responsive design</h3>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn-blog">Lire la suite</button>
                    </div>
                    <div className="end-work">
                    <hr className="hr-customer" />
                    <p><time datetime="2022-07-31">Publié le 31 juillet 2022</time></p></div>
                </div>

                <div className="mainBlog">
                    <img src="/SEO.jpg" alt="Techniques de référencement" className="picture" />
                    <div className="information-work">
                        <h3>Techniques de référencement</h3>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn-blog">Lire la suite</button>
                    </div>
                    <div className="end-work">
                    <hr className="hr-customer" />
                    <p><time datetime="2022-07-30">Publié le 30 juillet 2022</time></p></div>
                </div>

                <div className="secondBlog">
                    <img src="/logiciels.jpg" alt="Apprendre à coder" className="picture" />
                    <div className="information-work">
                        <h3>Apprendre à coder</h3>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn-blog">Lire la suite</button>
                    </div>
                    <div className="end-work">
                    <hr  className="hr-customer" />
                    <p><time datetime="2022-07-12"> Publié le 12 juillet 2022</time></p>
                    </div>
                </div>

            </div>

            <style>
                {`
                
                   p {
                          font-size: 0.85rem;
                         display: flex;                  
}

                p time {
                margin-left:10px;
                padding-top: 7px;
                }
               

                .banner-work {
                    width: 100vw;
                    height: 120px;
                }

                .presentation-portfolio {
                    text-align: center;
                    margin-top: 40px;
                }

                h2 {
                    font-size: 1rem;
                }

               
                
                .hr-work {
                    width: 15%;
                    margin: 0 auto;
                  
                    opacity: 1;
                }

                .global-work {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    width: 100%;
                    gap: 30px;
                    padding: 40px 20px 50px;
                }

                .picture {
                    width: 350px;
                    height: 220px;
                    border-radius: 5px;
                }

                .mainBlog {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: calc(33.333% - 20px);
                    max-width: 350px;
                    border: 1px solid #d4d4d4;
                    border-radius: 8px;
                    margin-bottom: 40px;
                   
                }
                    h3, p{
                     padding: 5px 10px;
                     }
                    .secondBlog{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: calc(33.333% - 20px);
                    max-width: 350px;
                    max-height: 435px;
                    border: 1px solid #d4d4d4;
                    border-radius: 8px;
                    margin-bottom: 40px;
                   
                    }

                .information-work {
                    text-align: left;
                    padding: 7px;
                    min-height: 100px; 
                    margin-bottom:7px;
                }

                .btn-blog {
                    color: #fff;
                    border: 1px solid #106cfc;
                    border-radius: 5px;
                    background-color: #106cfc;
                    margin-bottom: 5px;
                    padding: 5px 10px;
                    margin-left:10px;
                }

                .hr-customer {
                    width: 100%;
                    margin: auto;
                    align-items:center;
                }

                .end-work {
                    height:40px;
                    justify-content:center;
                    background-color: #f4f4f4;
 
                }

                @media (max-width: 768px) {
                    .global-work {
                        gap: 20px;

                    }
                    .picture{
                    width:342px;
                    }
                    .mainBlog,.secondBlog {
                        width: calc(50% - 20px);
                    }
                }

                @media (max-width: 480px) {
                    .mainBlog,.secondBlog {
                        width: 100%;
                    }
                        .picture{
                        width: 348px;
                        }

                
                }
                `}
            </style>
        </>
    );
}

export default Work;
