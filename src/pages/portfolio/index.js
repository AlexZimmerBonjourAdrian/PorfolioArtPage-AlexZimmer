import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
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
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Portfolio | {meta.title} </title>{" "}
            <meta name="description" content={meta.description} />
          </Helmet>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4" style={{ 
                fontFamily: 'Marcellus, serif',
                fontWeight: 300,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#000000'
              }}> 
                Portfolio 
              </h1>{" "}
              <hr className="t_border my-4 ml-0 text-left" style={{ 
                borderWidth: '1px',
                opacity: 0.3,
                maxWidth: '100px',
                borderColor: '#000000'
              }} />
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: '#333333',
                opacity: 0.8,
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 300
              }}>
                Una colección organizada de proyectos que representan mi trabajo y visión creativa.
              </p>
            </Col>
          </Row>
          
          {/* Section Navigation */}
          <div className="section-navigation mb-5">
            <div className="nav-buttons">
              {sections.map((section) => (
                <button
                  key={section.key}
                  className={`nav-btn ${selectedSection === section.key ? 'active' : ''}`}
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

          {/* Main Gallery */}
          <div className="main-gallery">
            {/* Main Image */}
            <div className="main-image-container">
              <div className="main-image">
                <img 
                  src={currentImages[selectedImage].img} 
                  alt={currentImages[selectedImage].description}
                />
                <div className="image-overlay">
                  <div className="image-info">
                    <h3>{currentImages[selectedImage].description}</h3>
                    <a href={currentImages[selectedImage].link} className="view-project-btn">
                      Ver Proyecto
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Preview */}
            <div className="thumbnail-container">
              {currentImages.map((image, index) => (
                <div 
                  key={index}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img 
                    src={image.img} 
                    alt={image.description}
                  />
                  <div className="thumbnail-overlay">
                    <span className="thumbnail-number">{index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </HelmetProvider>
  );
};
