import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Mentions from "./pages/MentionsLegal";
import Contact from "./pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <NavLink className="navbar-brand" to="/">JOHN DOE</NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">ACCUEIL</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/services" className="nav-link">SERVICES</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/work" className="nav-link">RÉALISATIONS</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/blog" className="nav-link">BLOG</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">ME CONTACTER</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions" element={<Mentions />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>

        <footer>
          <div className="global">
            <div className="contact">
              <h4>John Doe</h4>
              <address>
                <ul>
                  <li>40 Rue Laure Diebold</li>
                  <li>69009 Lyon, France</li>
                  <li><a href="tel:+33620304050">Téléphone : 06 20 30 40 50</a></li>
                </ul>
              </address>
              <div className="social-logos">
              <a href="https://github.com/JohnDoe" target="_blank" rel="noopener noreferrer">
    <img src="/github.png" className="logo-github" alt="Logo de GitHub" />
  </a>
  <a href="https://twitter.com/JohnDoe" target="_blank" rel="noopener noreferrer">
    <img src="/twitter.png" className="logo-twitter" alt="Logo de Twitter" />
  </a>
  <a href="https://linkedin.com/in/JohnDoe" target="_blank" rel="noopener noreferrer">
    <img src="/linkedin.png" className="logo-linkedin" alt="Logo de LinkedIn" />
  </a>
              </div>
            </div>
            
            <div className="information-footer">
              <h4> Liens utiles</h4>
              <ul>
                <li><NavLink to="/">Acceuil</NavLink></li>
                <li>A propos</li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/contact">Me contacter</NavLink></li>
                <li><NavLink to="/mentions">Mentions légales</NavLink></li>
              </ul>
            </div>

            <div className="information-footer">
            <h4><NavLink to="/work">Mes dernières réalisations</NavLink></h4>
              <ul>
              <li><NavLink to="/work">Fresh food</NavLink></li>
              <li><NavLink to="/work">Restaurant Akira</NavLink></li>
              <li><NavLink to="/work">Espace bien-être</NavLink></li>
              </ul>
            </div>

            <div className="information-footer">
            <h4><NavLink to="/blog"> Mes derniers articles</NavLink></h4>                                          
              <ul>                                                                       
              <li><NavLink to="/blog">Coder son site en HTML/CSS</NavLink></li>                                            
              <li><NavLink to="/blog"> Vendre ses produits sur le web</NavLink></li>                           
              <li><NavLink to="/blog">Se positionner sur Google</NavLink></li>     
              </ul>
            </div>
          </div>
          <div className="fin">
            &copy; Designed by John Doe
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
