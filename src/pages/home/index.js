import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta, dataportfolio, dataabout, skills, services, contactConfig } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSection, setSelectedSection] = useState('props');

  const sections = [
    { key: 'props', title: 'Props', description: 'Objetos y elementos que complementan la narrativa visual' },
    { key: 'escenarios', title: 'Escenarios', description: 'Ambientes y espacios que transportan al espectador' },
    { key: 'personajes', title: 'Personajes', description: 'Retratos y expresiones que capturan la esencia humana' },
    { key: 'composiciones', title: 'Composiciones', description: 'Arreglos visuales que crean armonía perfecta' },
  ];

  const currentImages = dataportfolio[selectedSection];

  return (
    <HelmetProvider>
      {/* Hero Section */}
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{dataabout.title}</h2>
          </div>
          <div className="about-content">
            <p className="about-text">{dataabout.aboutme}</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Habilidades</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.value}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Servicios</h2>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3 className="service-title">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section">
        <div className="container">
          {/* Art by Wu Style Header */}
          <div className="portfolio-header">
            <h1 className="portfolio-title">Portfolio</h1>
            <p className="portfolio-description">
              Una colección de trabajos que exploran la narrativa visual y el desarrollo artístico.
            </p>
          </div>
          
          {/* Art by Wu Style Navigation */}
          <div className="artbywu-navigation">
            <div className="nav-links">
              {sections.map((section) => (
                <button
                  key={section.key}
                  className={`nav-link ${selectedSection === section.key ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedSection(section.key);
                    setSelectedImage(0);
                  }}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* Art by Wu Style Gallery */}
          <div className="artbywu-gallery">
            {/* Main Image - Large and Prominent */}
            <div className="main-image-section">
              <div className="image-container">
                <img 
                  src={currentImages[selectedImage].img} 
                  alt={currentImages[selectedImage].description}
                  className="main-image"
                />
                <div className="image-overlay">
                  <div className="image-details">
                    <h3>{currentImages[selectedImage].description}</h3>
                    <div className="image-actions">
                      <span className="image-number">{selectedImage + 1} / {currentImages.length}</span>
                      <a href={currentImages[selectedImage].link} className="view-link">
                        Ver Proyecto
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Grid - Art by Wu Style */}
            <div className="thumbnail-grid">
              {currentImages.map((image, index) => (
                <div 
                  key={index}
                  className={`thumbnail-item ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img 
                    src={image.img} 
                    alt={image.description}
                    className="thumbnail-image"
                  />
                  <div className="thumbnail-overlay">
                    <span className="thumbnail-number">{index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Contacto</h2>
          </div>
          <div className="contact-content">
            <p className="contact-description">{contactConfig.description}</p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Email Directo:</span>
                <a href={`mailto:${contactConfig.YOUR_EMAIL}`} className="contact-link">
                  {contactConfig.YOUR_EMAIL}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email Empresarial:</span>
                <a href={`mailto:${contactConfig.YOUR_EMAIL_BUSINESS}`} className="contact-link">
                  {contactConfig.YOUR_EMAIL_BUSINESS}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
