import { useState, useEffect } from 'react';

export default function VideoServices() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'portfolio', 'process', 'pricing', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ 
      backgroundColor: '#000000', 
      color: '#ffffff',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{
        backgroundColor: 'rgba(26, 26, 26, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #333',
        zIndex: 1000
      }}>
        <div className="container">
          <button 
            className="navbar-brand fw-bold d-flex align-items-center btn border-0 bg-transparent"
            onClick={() => scrollToSection('home')}
            style={{ fontSize: '1.25rem', color: '#ffffff' }}
          >
            <i className="bi bi-camera-reels me-2" style={{ color: '#ff453a', fontSize: '1.5rem' }}></i>
            VideoCraft
          </button>
          
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button 
                  className="nav-link btn border-0 px-3 py-2 rounded-pill mx-1"
                  onClick={() => scrollToSection('services')}
                  style={{
                    backgroundColor: activeSection === 'services' ? 'rgba(255, 69, 58, 0.1)' : 'transparent',
                    color: activeSection === 'services' ? '#ff453a' : '#e5e5e7'
                  }}
                >
                  <i className="bi bi-play-circle me-2"></i>Servicios
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link btn border-0 px-3 py-2 rounded-pill mx-1"
                  onClick={() => scrollToSection('portfolio')}
                  style={{
                    backgroundColor: activeSection === 'portfolio' ? 'rgba(255, 69, 58, 0.1)' : 'transparent',
                    color: activeSection === 'portfolio' ? '#ff453a' : '#e5e5e7'
                  }}
                >
                  <i className="bi bi-collection-play me-2"></i>Portfolio
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link btn border-0 px-3 py-2 rounded-pill mx-1"
                  onClick={() => scrollToSection('pricing')}
                  style={{
                    backgroundColor: activeSection === 'pricing' ? 'rgba(255, 69, 58, 0.1)' : 'transparent',
                    color: activeSection === 'pricing' ? '#ff453a' : '#e5e5e7'
                  }}
                >
                  <i className="bi bi-currency-dollar me-2"></i>Precios
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link btn border-0 px-3 py-2 rounded-pill mx-1"
                  onClick={() => scrollToSection('contact')}
                  style={{
                    backgroundColor: activeSection === 'contact' ? 'rgba(255, 69, 58, 0.1)' : 'transparent',
                    color: activeSection === 'contact' ? '#ff453a' : '#e5e5e7'
                  }}
                >
                  <i className="bi bi-envelope me-2"></i>Contacto
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{ paddingTop: '160px', paddingBottom: '120px' }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="mb-4">
                <i className="bi bi-camera-video" style={{
                  fontSize: '4rem', 
                  color: '#ff453a',
                  filter: 'drop-shadow(0 0 20px rgba(255, 69, 58, 0.3))'
                }}></i>
              </div>
              <h1 className="display-2 fw-bold mb-4" style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em'
              }}>
                Edición de Video Profesional
              </h1>
              <p className="lead mb-5" style={{ 
                color: '#a1a1a6', 
                fontSize: '1.3rem',
                lineHeight: '1.5'
              }}>
                Transformamos tu material audiovisual en contenido profesional que conecta con tu audiencia. 
                Especialistas en video corporativo, redes sociales y documentales.
              </p>
              
              <div className="d-flex justify-content-center gap-3 flex-wrap mb-5">
                <button 
                  className="btn btn-lg rounded-pill px-5 py-3"
                  onClick={() => scrollToSection('contact')}
                  style={{
                    backgroundColor: '#ff453a',
                    borderColor: '#ff453a',
                    color: 'white',
                    fontWeight: '500'
                  }}
                >
                  <i className="bi bi-play-fill me-2"></i>
                  Comenzar Proyecto
                </button>
                <button 
                  className="btn btn-lg rounded-pill px-5 py-3"
                  onClick={() => scrollToSection('portfolio')}
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: '#48484a',
                    color: '#ffffff',
                    fontWeight: '500'
                  }}
                >
                  <i className="bi bi-collection-play me-2"></i>
                  Ver Portfolio
                </button>
              </div>

              <div className="row text-center">
                <div className="col-md-4 mb-4">
                  <div style={{ fontSize: '3rem', fontWeight: '700', color: '#ff453a' }}>500+</div>
                  <p style={{ color: '#a1a1a6' }}>Videos Editados</p>
                </div>
                <div className="col-md-4 mb-4">
                  <div style={{ fontSize: '3rem', fontWeight: '700', color: '#34c759' }}>98%</div>
                  <p style={{ color: '#a1a1a6' }}>Satisfacción Cliente</p>
                </div>
                <div className="col-md-4 mb-4">
                  <div style={{ fontSize: '3rem', fontWeight: '700', color: '#ff9f0a' }}>8+</div>
                  <p style={{ color: '#a1a1a6' }}>Años Experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: '120px 0', backgroundColor: 'rgba(28, 28, 30, 0.5)' }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-4 fw-bold mb-4" style={{ color: '#ffffff' }}>
                <i className="bi bi-play-circle me-3" style={{ color: '#ff453a' }}></i>
                Nuestros Servicios
              </h2>
              <p className="lead" style={{ color: '#a1a1a6' }}>
                Ofrecemos servicios completos de edición de video, desde conceptualización 
                hasta entrega final, adaptados a cada tipo de contenido y plataforma.
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="h-100 p-4" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <div className="d-flex align-items-center mb-4">
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 69, 58, 0.1)',
                    marginRight: '16px'
                  }}>
                    <i className="bi bi-building" style={{ fontSize: '1.5rem', color: '#ff453a' }}></i>
                  </div>
                  <h5 className="fw-semibold mb-0" style={{ color: '#ffffff' }}>
                    Video Corporativo
                  </h5>
                </div>
                <p style={{ color: '#a1a1a6' }}>
                  Videos institucionales, presentaciones empresariales, capacitaciones internas 
                  y testimoniales que refuerzan la imagen profesional de tu empresa.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="h-100 p-4" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <div className="d-flex align-items-center mb-4">
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0, 122, 255, 0.1)',
                    marginRight: '16px'
                  }}>
                    <i className="bi bi-camera-reels" style={{ fontSize: '1.5rem', color: '#007AFF' }}></i>
                  </div>
                  <h5 className="fw-semibold mb-0" style={{ color: '#ffffff' }}>
                    Demo Reels
                  </h5>
                </div>
                <p style={{ color: '#a1a1a6' }}>
                  Reels profesionales que destacan productos, servicios o habilidades. 
                  Perfectos para portfolios, presentaciones comerciales y marketing digital.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="h-100 p-4" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <div className="d-flex align-items-center mb-4">
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(52, 199, 89, 0.1)',
                    marginRight: '16px'
                  }}>
                    <i className="bi bi-phone" style={{ fontSize: '1.5rem', color: '#34c759' }}></i>
                  </div>
                  <h5 className="fw-semibold mb-0" style={{ color: '#ffffff' }}>
                    Social Media Content
                  </h5>
                </div>
                <p style={{ color: '#a1a1a6' }}>
                  Contenido optimizado para redes sociales. Instagram Reels, TikToks, YouTube Shorts 
                  y videos para Facebook que maximizan el engagement y alcance.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="h-100 p-4" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <div className="d-flex align-items-center mb-4">
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 159, 10, 0.1)',
                    marginRight: '16px'
                  }}>
                    <i className="bi bi-film" style={{ fontSize: '1.5rem', color: '#ff9f0a' }}></i>
                  </div>
                  <h5 className="fw-semibold mb-0" style={{ color: '#ffffff' }}>
                    Video Documental
                  </h5>
                </div>
                <p style={{ color: '#a1a1a6' }}>
                  Narrativas documentales que cuentan historias reales con impacto emocional. 
                  Desde documentales corporativos hasta proyectos de impacto social.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" style={{ padding: '120px 0', backgroundColor: 'rgba(28, 28, 30, 0.5)' }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-4 fw-bold mb-4" style={{ color: '#ffffff' }}>
                <i className="bi bi-collection-play me-3" style={{ color: '#ff453a' }}></i>
                Nuestro Portfolio
              </h2>
              <p className="lead" style={{ color: '#a1a1a6' }}>
                Explora algunos de nuestros proyectos más destacados y descubre cómo hemos 
                ayudado a nuestros clientes a contar sus historias de forma impactante.
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div style={{
                height: '300px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textAlign: 'center',
                  padding: '20px'
                }}>
                  <div>
                    <i className="bi bi-building" style={{ fontSize: '3rem', marginBottom: '16px' }}></i>
                    <h5 className="fw-bold mb-3">Video Corporativo TechCorp</h5>
                    <p style={{ fontSize: '0.9rem' }}>
                      Video institucional que presenta la historia y valores de la empresa, 
                      aumentando la confianza del cliente en un 40%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div style={{
                height: '300px',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textAlign: 'center',
                  padding: '20px'
                }}>
                  <div>
                    <i className="bi bi-cart-check" style={{ fontSize: '3rem', marginBottom: '16px' }}></i>
                    <h5 className="fw-bold mb-3">Campaña E-commerce Fashion</h5>
                    <p style={{ fontSize: '0.9rem' }}>
                      Serie de videos para redes sociales que generó 2M de visualizaciones 
                      y aumentó las ventas online en un 300%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div style={{
                height: '250px',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textAlign: 'center',
                  padding: '20px'
                }}>
                  <div>
                    <i className="bi bi-phone" style={{ fontSize: '2.5rem', marginBottom: '16px' }}></i>
                    <h5 className="fw-bold mb-3">Demo Reel Startup</h5>
                    <p style={{ fontSize: '0.9rem' }}>
                      Demo reel de aplicación móvil que ayudó a conseguir $500K en inversión
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div style={{
                height: '250px',
                background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textAlign: 'center',
                  padding: '20px'
                }}>
                  <div>
                    <i className="bi bi-film" style={{ fontSize: '2.5rem', marginBottom: '16px' }}></i>
                    <h5 className="fw-bold mb-3">Documental ONG</h5>
                    <p style={{ fontSize: '0.9rem' }}>
                      Documental de 15 minutos sobre trabajo comunitario premiado en festival
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div style={{
                height: '250px',
                background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textAlign: 'center',
                  padding: '20px'
                }}>
                  <div>
                    <i className="bi bi-mortarboard" style={{ fontSize: '2.5rem', marginBottom: '16px' }}></i>
                    <h5 className="fw-bold mb-3">Serie Educativa Online</h5>
                    <p style={{ fontSize: '0.9rem' }}>
                      20 videos educativos que alcanzaron 1M+ estudiantes en plataforma e-learning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ padding: '120px 0' }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-4 fw-bold mb-4" style={{ color: '#ffffff' }}>
                <i className="bi bi-currency-dollar me-3" style={{ color: '#34c759' }}></i>
                Planes y Precios
              </h2>
              <p className="lead" style={{ color: '#a1a1a6' }}>
                Paquetes flexibles diseñados para diferentes necesidades y presupuestos. 
                Todos incluyen revisiones ilimitadas y entrega en múltiples formatos.
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-4">
              <div className="h-100 p-4 text-center" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <div className="mb-4" style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  background: 'rgba(52, 199, 89, 0.1)',
                  border: '2px solid rgba(52, 199, 89, 0.2)'
                }}>
                  <i className="bi bi-play-circle" style={{ fontSize: '2rem', color: '#34c759' }}></i>
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#ffffff' }}>Social Media</h4>
                <div className="mb-4">
                  <span style={{ fontSize: '3rem', fontWeight: '700', color: '#34c759' }}>$350</span>
                  <div style={{ color: '#a1a1a6' }}>Por video (hasta 60s)</div>
                </div>
                <ul className="list-unstyled mb-4" style={{ color: '#a1a1a6', textAlign: 'left' }}>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#34c759' }}></i>
                    Edición profesional hasta 60s
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#34c759' }}></i>
                    Color grading básico
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#34c759' }}></i>
                    Música y efectos de sonido
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#34c759' }}></i>
                    Formato optimizado para redes
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#34c759' }}></i>
                    Entrega en 3-5 días
                  </li>
                </ul>
                <button 
                  className="btn btn-lg w-100 rounded-pill"
                  style={{
                    backgroundColor: '#34c759',
                    borderColor: '#34c759',
                    color: 'white',
                    fontWeight: '500'
                  }}
                >
                  Elegir Plan
                </button>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="h-100 p-4 text-center position-relative" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '24px',
                border: '2px solid #ff453a',
                transform: 'scale(1.05)',
                boxShadow: '0 20px 60px rgba(255, 69, 58, 0.2)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '30px',
                  background: 'linear-gradient(135deg, #ff453a, #d70015)',
                  color: 'white',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  <i className="bi bi-star-fill me-1"></i>Más Popular
                </div>
                <div className="mb-4" style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  background: 'rgba(255, 69, 58, 0.1)',
                  border: '2px solid rgba(255, 69, 58, 0.2)'
                }}>
                  <i className="bi bi-camera-reels" style={{ fontSize: '2rem', color: '#ff453a' }}></i>
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#ffffff' }}>Corporativo</h4>
                <div className="mb-4">
                  <span style={{ fontSize: '3rem', fontWeight: '700', color: '#ff453a' }}>$1,200</span>
                  <div style={{ color: '#a1a1a6' }}>Por video (hasta 5 min)</div>
                </div>
                <ul className="list-unstyled mb-4" style={{ color: '#a1a1a6', textAlign: 'left' }}>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#ff453a' }}></i>
                    Todo del plan Social Media
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#ff453a' }}></i>
                    Color grading profesional
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#ff453a' }}></i>
                    Gráficos y animaciones
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#ff453a' }}></i>
                    Múltiples formatos de entrega
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#ff453a' }}></i>
                    Entrega en 7-10 días
                  </li>
                </ul>
                <button 
                  className="btn btn-lg w-100 rounded-pill"
                  style={{
                    backgroundColor: '#ff453a',
                    borderColor: '#ff453a',
                    color: 'white',
                    fontWeight: '500'
                  }}
                >
                  Elegir Plan
                </button>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="h-100 p-4 text-center" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <div className="mb-4" style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  background: 'rgba(255, 159, 10, 0.1)',
                  border: '2px solid rgba(255, 159, 10, 0.2)'
                }}>
                  <i className="bi bi-film" style={{ fontSize: '2rem', color: '#ff9f0a' }}></i>
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#ffffff' }}>Documental</h4>
                <div className="mb-4">
                  <span style={{ fontSize: '3rem', fontWeight: '700', color: '#ff9f0a' }}>$2,500</span>
                  <div style={{ color: '#a1a1a6' }}>Por proyecto (hasta 15 min)</div>
                </div>
                <ul className="list-unstyled mb-4" style={{ color: '#a1a1a6', textAlign: 'left' }}>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#ff9f0a' }}></i>
                    Todo del plan Corporativo
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#ff9f0a' }}></i>
                    Narrativa y guión incluido
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#ff9f0a' }}></i>
                    Entrevistas y testimonios
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#ff9f0a' }}></i>
                    Música original opcional
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#ff9f0a' }}></i>
                    Entrega en 2-3 semanas
                  </li>
                </ul>
                <button 
                  className="btn btn-lg w-100 rounded-pill"
                  style={{
                    backgroundColor: '#ff9f0a',
                    borderColor: '#ff9f0a',
                    color: 'white',
                    fontWeight: '500'
                  }}
                >
                  Elegir Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '120px 0', backgroundColor: 'rgba(28, 28, 30, 0.5)' }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-4 fw-bold mb-4" style={{ color: '#ffffff' }}>
                <i className="bi bi-envelope me-3" style={{ color: '#ff453a' }}></i>
                Contáctanos
              </h2>
              <p className="lead" style={{ color: '#a1a1a6' }}>
                ¿Listo para dar vida a tu proyecto audiovisual? 
                Contáctanos y te responderemos en menos de 24 horas con una propuesta creativa.
              </p>
            </div>
          </div>

          <div className="row g-5">
            <div className="col-lg-8">
              <div className="p-5" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <h4 className="fw-bold mb-4" style={{ color: '#ffffff' }}>
                  <i className="bi bi-camera-video me-2" style={{ color: '#ff453a' }}></i>
                  Cuéntanos sobre tu proyecto
                </h4>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label" style={{ color: '#ffffff', fontWeight: '500' }}>
                        Nombre completo
                      </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Tu nombre"
                        style={{
                          backgroundColor: '#2c2c2e',
                          border: '1px solid #48484a',
                          color: '#ffffff',
                          borderRadius: '12px',
                          padding: '16px 20px'
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" style={{ color: '#ffffff', fontWeight: '500' }}>
                        Email
                      </label>
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="tu@empresa.com"
                        style={{
                          backgroundColor: '#2c2c2e',
                          border: '1px solid #48484a',
                          color: '#ffffff',
                          borderRadius: '12px',
                          padding: '16px 20px'
                        }}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label" style={{ color: '#ffffff', fontWeight: '500' }}>
                        Tipo de video
                      </label>
                      <select 
                        className="form-control"
                        style={{
                          backgroundColor: '#2c2c2e',
                          border: '1px solid #48484a',
                          color: '#ffffff',
                          borderRadius: '12px',
                          padding: '16px 20px'
                        }}
                      >
                        <option>Video corporativo/institucional</option>
                        <option>Demo reel de producto/servicio</option>
                        <option>Contenido para redes sociales</option>
                        <option>Video documental</option>
                        <option>Otro</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label" style={{ color: '#ffffff', fontWeight: '500' }}>
                        Descripción del proyecto
                      </label>
                      <textarea 
                        className="form-control" 
                        rows="4" 
                        placeholder="Describe tu proyecto: objetivo del video, audiencia objetivo, estilo deseado..."
                        style={{
                          backgroundColor: '#2c2c2e',
                          border: '1px solid #48484a',
                          color: '#ffffff',
                          borderRadius: '12px',
                          padding: '16px 20px'
                        }}
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button 
                        type="submit" 
                        className="btn btn-lg w-100 rounded-pill"
                        style={{
                          backgroundColor: '#ff453a',
                          borderColor: '#ff453a',
                          color: 'white',
                          fontWeight: '500',
                          padding: '16px 20px'
                        }}
                      >
                        <i className="bi bi-play-fill me-2"></i>
                        Enviar Propuesta de Video
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="p-4 mb-4" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <h5 className="fw-bold mb-4" style={{ color: '#ffffff' }}>
                  <i className="bi bi-geo-alt me-2" style={{ color: '#34c759' }}></i>
                  Información de contacto
                </h5>
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-telephone-fill me-3" style={{ color: '#ff453a', fontSize: '1.25rem' }}></i>
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: '500' }}>Teléfono</div>
                      <div style={{ color: '#a1a1a6' }}>+52 55 9876 5432</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-envelope-fill me-3" style={{ color: '#34c759', fontSize: '1.25rem' }}></i>
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: '500' }}>Email</div>
                      <div style={{ color: '#a1a1a6' }}>hola@videocraftpro.com</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-pin-map-fill me-3" style={{ color: '#ff9f0a', fontSize: '1.25rem' }}></i>
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: '500' }}>Estudio</div>
                      <div style={{ color: '#a1a1a6' }}>Ciudad de México, México</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <h6 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                  <i className="bi bi-camera-video me-2" style={{ color: '#ff9f0a' }}></i>
                  ¿Prefieres una videollamada?
                </h6>
                <p style={{ color: '#a1a1a6', fontSize: '0.9rem', marginBottom: '16px' }}>
                  Agenda una consulta gratuita de 30 minutos para discutir tu proyecto audiovisual en detalle.
                </p>
                <button 
                  className="btn btn-sm w-100 rounded-pill"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#ffffff',
                    border: '1px solid #48484a',
                    fontWeight: '500'
                  }}
                >
                  <i className="bi bi-calendar-plus me-2"></i>
                  Agendar Consulta
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 0', backgroundColor: '#1c1c1e' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="d-flex align-items-center mb-4">
                <i className="bi bi-camera-reels me-2" style={{ color: '#ff453a', fontSize: '1.5rem' }}></i>
                <h5 className="fw-bold mb-0" style={{ color: '#ffffff' }}>VideoCraft Pro</h5>
              </div>
              <p style={{ color: '#a1a1a6', marginBottom: '24px' }}>
                Especialistas en edición de video profesional. Transformamos tu material audiovisual 
                en contenido que conecta, inspira y genera resultados.
              </p>
            </div>
            
            <div className="col-lg-2 col-md-6 mb-4">
              <h6 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                Servicios
              </h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button 
                    className="btn p-0 border-0 bg-transparent text-start"
                    onClick={() => scrollToSection('services')}
                    style={{ color: '#a1a1a6', textDecoration: 'none' }}
                  >
                    Video Corporativo
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    className="btn p-0 border-0 bg-transparent text-start"
                    onClick={() => scrollToSection('services')}
                    style={{ color: '#a1a1a6', textDecoration: 'none' }}
                  >
                    Demo Reels
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    className="btn p-0 border-0 bg-transparent text-start"
                    onClick={() => scrollToSection('services')}
                    style={{ color: '#a1a1a6', textDecoration: 'none' }}
                  >
                    Social Media
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    className="btn p-0 border-0 bg-transparent text-start"
                    onClick={() => scrollToSection('services')}
                    style={{ color: '#a1a1a6', textDecoration: 'none' }}
                  >
                    Documentales
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="col-lg-2 col-md-6 mb-4">
              <h6 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                Empresa
              </h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button 
                    className="btn p-0 border-0 bg-transparent text-start"
                    onClick={() => scrollToSection('portfolio')}
                    style={{ color: '#a1a1a6', textDecoration: 'none' }}
                  >
                    Portfolio
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    className="btn p-0 border-0 bg-transparent text-start"
                    onClick={() => scrollToSection('pricing')}
                    style={{ color: '#a1a1a6', textDecoration: 'none' }}
                  >
                    Precios
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    className="btn p-0 border-0 bg-transparent text-start"
                    onClick={() => scrollToSection('contact')}
                    style={{ color: '#a1a1a6', textDecoration: 'none' }}
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="col-lg-4 mb-4">
              <h6 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                Newsletter Creativo
              </h6>
              <p style={{ color: '#a1a1a6', marginBottom: '16px', fontSize: '0.9rem' }}>
                Recibe tips de edición, tendencias audiovisuales y casos de estudio.
              </p>
              <div className="input-group mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="tu@email.com"
                  style={{
                    backgroundColor: '#2c2c2e',
                    border: '1px solid #48484a',
                    color: '#ffffff'
                  }}
                />
                <button 
                  className="btn"
                  style={{
                    backgroundColor: '#ff453a',
                    borderColor: '#ff453a',
                    color: 'white'
                  }}
                >
                  <i className="bi bi-send"></i>
                </button>
              </div>
            </div>
          </div>
          
          <hr style={{ borderColor: '#48484a', margin: '40px 0 20px' }} />
          
          <div className="row align-items-center">
            <div className="col-md-6">
              <p style={{ color: '#a1a1a6', margin: 0, fontSize: '0.9rem' }}>
                <i className="bi bi-c-circle me-2"></i>
                2024 VideoCraft Pro. Todos los derechos reservados.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex justify-content-md-end gap-4">
                <a href="#" style={{ color: '#a1a1a6', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Privacidad
                </a>
                <a href="#" style={{ color: '#a1a1a6', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Términos
                </a>
                <a href="#" style={{ color: '#a1a1a6', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Licencias
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}