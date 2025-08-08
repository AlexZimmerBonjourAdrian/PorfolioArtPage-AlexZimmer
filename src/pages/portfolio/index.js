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
          
          {/* Art by Wu Style Header */}
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4" style={{ 
                fontFamily: 'Didact Gothic, sans-serif',
                fontWeight: 400,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#000000',
                fontSize: '2.5rem',
                textAlign: 'center'
              }}> 
                Portfolio 
              </h1>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#666666',
                fontFamily: 'Didact Gothic, sans-serif',
                fontWeight: 300,
                maxWidth: '600px',
                margin: '0 auto',
                textAlign: 'center'
              }}>
                Una colección de trabajos que exploran la narrativa visual y el desarrollo artístico.
              </p>
            </Col>
          </Row>
          
          {/* Art by Wu Style Navigation */}
          <div className="artbywu-navigation mb-5">
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
        </Container>
      </div>
    </HelmetProvider>
  );
};
