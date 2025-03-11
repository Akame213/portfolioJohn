import React, { useRef, useState, useEffect } from "react";

function ContactForm() {
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();

    const [planImage, setPlanImage] = useState(
        window.innerWidth <= 480 ? "/plan-mobile.jpg" : "/plan.png"
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setPlanImage("/plan-mobile.jpg");
            } else {
                setPlanImage("/plan.png");
            }
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            subject: subjectRef.current.value,
            message: messageRef.current.value,
        };

        console.log("Formulaire soumis :", formData);
    };

    return (
        <div className="main-card">
            <section className="main-content">
                <div>
                    <h1>
                        <span className="line1">ME</span> <span className="line2">CONTACTER</span>
                    </h1>
                    <p>
                        Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
                    </p>
                    <hr className="hrContact" />
                </div>

                <section className="sectionFull">
                    <section className="sectionLeft">
                        
                        <h2>
                            <span className="line1">Formulaire de</span><span className="line2"> contact</span>
                        </h2>
                        <hr className="hr-form" />

                        <section className="formulaire">
                            <form onSubmit={handleSubmit}>
                                <label>
                                    <input type="text" name="name" placeholder="Votre nom" ref={nameRef} required />
                                </label>

                                <label>
                                    <input type="email" name="email" placeholder="Votre adresse email" ref={emailRef} required />
                                </label>

                                <label>
                                    <input type="tel" name="phone" placeholder="Votre numéro de téléphone" ref={phoneRef} />
                                </label>

                                <label>
                                    <input type="text" name="subject" placeholder="Sujet" ref={subjectRef} required />
                                </label>

                                <label>
                                    <textarea name="message" placeholder="Votre message" ref={messageRef} required></textarea>
                                </label>

                                <button type="submit">Envoyer</button>
                            </form>
                        </section>
                    </section>

                    <section className="sectionRight">
                    <h2>
                         <span className="line1">Mes </span> <span className="line2">coordonnées</span>
                    </h2>

                        <hr className="hr-formm" />

                        <section className="content-right">
                            <address>
                                <img className="little-svg" src="/pin.svg" alt="position" />
                                40 Rue Laure Diebold, 69009 Lyon, France <br />
                                <img className="little-svg" src="/phone.svg" alt="smartphone" />
                                <a href="tel:+33620304050">06 20 30 40 50</a>
                            </address>

                            <img
                                className="adresse-john"
                                src={planImage} 
                                alt="Plan de l'adresse"
                            />
                        </section>
                    </section>
                </section>
            </section>

            <style>{`
                 .main-card {
                    background-image: url('/contact-bg.jpg');
                    background-size: cover;
                    background-repeat: no-repeat;
                    padding: 15px 0px 90px 0px;
                }
                .main-content {
                    width: 90%;
                    margin: 0 auto;
                    background-color: white;
                    padding: 20px;
                    padding-bottom: 60px;
                    border-radius: 10px;
                    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
                }
                .sectionFull {
                    margin-top: 50px;
                    display: flex;
                    align-items: start;
                }
                .sectionLeft {
                    flex: 1;
                }
                .sectionRight {
                    flex: 1;
                    margin-left: 15px;
                }
                .content-right {
                    margin-left: 15px;
                }
                h1 {
                    flex-wrap: nowrap;
                    text-align: center;
                    margin-top: 5px;
                }
                h2 {
                    font-size: 1.7rem;
                    margin-left: 15px;
                    font-weight: bold;
                }
                .hrContact {
                    width: 22%;
                    margin: 0 auto;
                    border: solid 2px #247cfc;
                    opacity: 1;
                }
                p {
                    font-size: 1.1rem;
                    text-align: center;
                }
                .little-svg {
                    height: 17px;
                    width: 17px;
                    margin-bottom: 5px;
                }
                .adresse-john {
                    width: 92%;
                    height: 310px;
                    position: relative;
                    top: -10px;
                }
                    a[href^="tel"] {
    all: unset;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
}
    
                .hr-form, .hr-formm {
                    margin-left: 15px;
                    border: solid 1.5px #247cfc;
                    opacity: 1;
                    margin-top: 0;
                    margin-bottom: 30px;
                }
                    .hr-form{
                    width: 97%
                    }
                  .hr-formm{
                    width: 89%
                    }  
                .formulaire {
                    display: flex;
                    flex-direction: column;
                    
                    margin-left: 15px;
                }
                .formulaire label {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }
                .formulaire input, .formulaire textarea {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                .formulaire textarea {
                    height: 150px;
                }
                .formulaire button {
                    background-color: #007BFF;
                    color: white;
                    border: none;
                    padding: 8px 15px;
                    cursor: pointer;
                    border-radius: 5px;
                    display: block;
                    margin: 1px auto;
                }
                .formulaire button:hover {
                    background-color: #0056b3;
                }
                ::placeholder {
                    font-size: 15px;
                    color: #72777d;
                    opacity: 1;
                }

                @media (max-width:768px) {
                    h2 {
                        font-size: 2rem;
                    }
                    p {
                        font-size: 1.4rem;
                    }
                    .adresse-john {
                        width: 92%;
                        height: 250px;
                    }
                    .formulaire input {
                        height: 35px;
                    }
                    .formulaire textarea {
                        height: 125px;
                    }
                }



             
    @media (max-width: 480px) {
    .main-card {
        margin: 0 auto;
        
    }

    .main-content {
        display: flex;
        flex-direction: column;
        align-items: center; 
        width: 85%;
        padding-bottom: 100px;
        margin: 0 auto;
        
        
    }
        .sectionLeft  {
    text-align: left;
    padding-left: 35px;
}
    .sectionRight {
    padding-left: 25px;
    }
    h1 {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 25px;
        font-size: 2.3rem;
    }

     .line1, .line2 {
        width: 100%;
        display: block;
    }

    h2 {
        font-size: 2rem;
        text-align: left;
    }



    p {
        font-size: 1.4rem;
        padding: 0 55px;
    }

    .hrContact{
    width:14%;
    height: 2px;
    background-color: #007BFF;
    }
    .sectionFull {
        flex-direction: column;
       
    }

    .formulaire {
        width: 95%; 
        
    }

    .formulaire input,
    .formulaire textarea {
        width: 100%; 
        margin-bottom: 7px;
    }

    .formulaire button {
        background-color: #007BFF;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
        margin: 10px auto;
    }

    .formulaire button:hover {
        background-color: #0056b3;
    }

    .hr-form, .hr-formm {
        width: 250px;  
        border: solid 1.5px #247cfc;
    }

    address {
      padding-right: 50px;
      font-size: 1.1rem;
    }

    .adresse-john {
        margin: 0 auto;
        width: 83%;
        height: 330px;
        
        
    }

    .little-svg {
        height: 20px;
        width: 20px;
        
    }
}


            `}</style>
        </div>
    );
}

export default ContactForm;
    