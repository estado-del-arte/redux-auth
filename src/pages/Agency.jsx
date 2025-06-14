import { useState, useEffect } from 'react';

export default function Agency() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'pricing', 'contact'];
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
            <i className="bi bi-code-square me-2" style={{ color: '#007AFF', fontSize: '1.5rem' }}></i>
            CodeCraft
          </button>
          
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button 
                  className={`nav-link btn border-0 px-3 py-2 rounded-pill mx-1 ${activeSection === 'about' ? 'active' : ''}`}
                  onClick={() => scrollToSection('about')}
                  style={{
                    backgroundColor: activeSection === 'about' ? 'rgba(0, 122, 255, 0.1)' : 'transparent',
                    color: activeSection === 'about' ? '#007AFF' : '#e5e5e7'
                  }}
                >
                  <i className="bi bi-people me-2"></i>Quiénes Somos
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link btn border-0 px-3 py-2 rounded-pill mx-1 ${activeSection === 'services' ? 'active' : ''}`}
                  onClick={() => scrollToSection('services')}
                  style={{
                    backgroundColor: activeSection === 'services' ? 'rgba(0, 122, 255, 0.1)' : 'transparent',
                    color: activeSection === 'services' ? '#007AFF' : '#e5e5e7'
                  }}
                >
                  <i className="bi bi-gear me-2"></i>Servicios
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link btn border-0 px-3 py-2 rounded-pill mx-1 ${activeSection === 'portfolio' ? 'active' : ''}`}
                  onClick={() => scrollToSection('portfolio')}
                  style={{
                    backgroundColor: activeSection === 'portfolio' ? 'rgba(0, 122, 255, 0.1)' : 'transparent',
                    color: activeSection === 'portfolio' ? '#007AFF' : '#e5e5e7'
                  }}
                >
                  <i className="bi bi-collection me-2"></i>Portfolio
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link btn border-0 px-3 py-2 rounded-pill mx-1 ${activeSection === 'pricing' ? 'active' : ''}`}
                  onClick={() => scrollToSection('pricing')}
                  style={{
                    backgroundColor: activeSection === 'pricing' ? 'rgba(0, 122, 255, 0.1)' : 'transparent',
                    color: activeSection === 'pricing' ? '#007AFF' : '#e5e5e7'
                  }}
                >
                  <i className="bi bi-currency-dollar me-2"></i>Precios
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link btn border-0 px-3 py-2 rounded-pill mx-1 ${activeSection === 'contact' ? 'active' : ''}`}
                  onClick={() => scrollToSection('contact')}
                  style={{
                    backgroundColor: activeSection === 'contact' ? 'rgba(0, 122, 255, 0.1)' : 'transparent',
                    color: activeSection === 'contact' ? '#007AFF' : '#e5e5e7'
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
                <i className="bi bi-laptop" style={{
                  fontSize: '4rem', 
                  color: '#007AFF',
                  filter: 'drop-shadow(0 0 20px rgba(0, 122, 255, 0.3))',
                  animation: 'float 6s ease-in-out infinite'
                }}></i>
              </div>
              <h1 className="display-2 fw-bold mb-4" style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em'
              }}>
                Desarrollamos el Futuro Digital
              </h1>
              <p className="lead mb-5" style={{ 
                color: '#a1a1a6', 
                fontSize: '1.3rem',
                lineHeight: '1.5'
              }}>
                Transformamos ideas innovadoras en aplicaciones web robustas y escalables. 
                Creamos soluciones digitales que impulsan el crecimiento de tu negocio.
              </p>
              
              <div className="d-flex justify-content-center gap-3 flex-wrap mb-5">
                <button 
                  className="btn btn-lg rounded-pill px-5 py-3"
                  onClick={() => scrollToSection('contact')}
                  style={{
                    backgroundColor: '#007AFF',
                    borderColor: '#007AFF',
                    color: 'white',
                    fontWeight: '500',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#0056CC';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#007AFF';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <i className="bi bi-rocket-takeoff me-2"></i>
                  Iniciar Proyecto
                </button>
                <button 
                  className="btn btn-lg rounded-pill px-5 py-3"
                  onClick={() => scrollToSection('portfolio')}
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: '#48484a',
                    color: '#ffffff',
                    fontWeight: '500',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#48484a';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <i className="bi bi-eye me-2"></i>
                  Ver Trabajos
                </button>
              </div>

              {/* Stats */}
              <div className="row text-center">
                <div className="col-md-4 mb-4">
                  <div style={{ fontSize: '3rem', fontWeight: '700', color: '#007AFF' }}>200+</div>
                  <p style={{ color: '#a1a1a6' }}>
                    <i className="bi bi-code-slash me-2"></i>Proyectos Entregados
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div style={{ fontSize: '3rem', fontWeight: '700', color: '#34c759' }}>99%</div>
                  <p style={{ color: '#a1a1a6' }}>
                    <i className="bi bi-heart-fill me-2"></i>Satisfacción Cliente
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div style={{ fontSize: '3rem', fontWeight: '700', color: '#ff9f0a' }}>5+</div>
                  <p style={{ color: '#a1a1a6' }}>
                    <i className="bi bi-calendar-check me-2"></i>Años Experiencia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '120px 0', backgroundColor: 'rgba(28, 28, 30, 0.5)' }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-4 fw-bold mb-4" style={{ color: '#ffffff' }}>
                <i className="bi bi-lightbulb me-3" style={{ color: '#ff9f0a' }}></i>
                Quiénes Somos
              </h2>
              <p className="lead" style={{ color: '#a1a1a6' }}>
                Somos un equipo especializado de desarrolladores full-stack que combina creatividad 
                técnica con experiencia empresarial para crear soluciones web de alto impacto.
              </p>
            </div>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-lg-4 col-md-6">
              <div className="h-100 p-4 text-center" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease'
              }}>
                <div className="mb-4" style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  background: 'rgba(0, 122, 255, 0.1)',
                  border: '2px solid rgba(0, 122, 255, 0.2)'
                }}>
                  <i className="bi bi-cpu" style={{ fontSize: '2rem', color: '#007AFF' }}></i>
                </div>
                <h5 className="fw-semibold mb-3" style={{ color: '#ffffff' }}>
                  Desarrollo Full-Stack
                </h5>
                <p style={{ color: '#a1a1a6' }}>
                  Dominamos tanto frontend como backend, utilizando tecnologías modernas 
                  como React, Node.js, Python y bases de datos escalables.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="h-100 p-4 text-center" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease'
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
                  <i className="bi bi-shield-check" style={{ fontSize: '2rem', color: '#34c759' }}></i>
                </div>
                <h5 className="fw-semibold mb-3" style={{ color: '#ffffff' }}>
                  Seguridad & Performance
                </h5>
                <p style={{ color: '#a1a1a6' }}>
                  Implementamos las mejores prácticas de seguridad web y optimización 
                  de rendimiento para garantizar aplicaciones rápidas y confiables.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="h-100 p-4 text-center" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease'
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
                  <i className="bi bi-graph-up-arrow" style={{ fontSize: '2rem', color: '#ff9f0a' }}></i>
                </div>
                <h5 className="fw-semibold mb-3" style={{ color: '#ffffff' }}>
                  Escalabilidad Empresarial
                </h5>
                <p style={{ color: '#a1a1a6' }}>
                  Diseñamos arquitecturas robustas que crecen con tu negocio, 
                  desde startups hasta aplicaciones de nivel empresarial.
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="p-5" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <h3 className="text-center fw-bold mb-5" style={{ color: '#ffffff' }}>
                  <i className="bi bi-tools me-3" style={{ color: '#007AFF' }}></i>
                  Nuestro Stack Tecnológico
                </h3>
                <div className="row text-center">
                  <div className="col-md-3 mb-4">
                    <i className="bi bi-filetype-js mb-3" style={{ fontSize: '2.5rem', color: '#ff9f0a' }}></i>
                    <h6 className="fw-semibold" style={{ color: '#ffffff' }}>JavaScript</h6>
                    <small style={{ color: '#a1a1a6' }}>React, Node.js, TypeScript</small>
                  </div>
                  <div className="col-md-3 mb-4">
                    <i className="bi bi-database mb-3" style={{ fontSize: '2.5rem', color: '#34c759' }}></i>
                    <h6 className="fw-semibold" style={{ color: '#ffffff' }}>Bases de Datos</h6>
                    <small style={{ color: '#a1a1a6' }}>MongoDB, PostgreSQL, Redis</small>
                  </div>
                  <div className="col-md-3 mb-4">
                    <i className="bi bi-cloud mb-3" style={{ fontSize: '2.5rem', color: '#007AFF' }}></i>
                    <h6 className="fw-semibold" style={{ color: '#ffffff' }}>Cloud & DevOps</h6>
                    <small style={{ color: '#a1a1a6' }}>AWS, Docker, CI/CD</small>
                  </div>
                  <div className="col-md-3 mb-4">
                    <i className="bi bi-phone mb-3" style={{ fontSize: '2.5rem', color: '#ff453a' }}></i>
                    <h6 className="fw-semibold" style={{ color: '#ffffff' }}>Mobile & API</h6>
                    <small style={{ color: '#a1a1a6' }}>React Native, REST, GraphQL</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: '120px 0' }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-4 fw-bold mb-4" style={{ color: '#ffffff' }}>
                <i className="bi bi-gear me-3" style={{ color: '#34c759' }}></i>
                Nuestros Servicios
              </h2>
              <p className="lead" style={{ color: '#a1a1a6' }}>
                Ofrecemos soluciones completas de desarrollo web, desde la conceptualización 
                hasta el despliegue y mantenimiento continuo.
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-6 col-md-6">
              <div className="h-100 p-4" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease'
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
                    <i className="bi bi-globe" style={{ fontSize: '1.5rem', color: '#007AFF' }}></i>
                  </div>
                  <h5 className="fw-semibold mb-0" style={{ color: '#ffffff' }}>
                    Aplicaciones Web Empresariales
                  </h5>
                </div>
                <p style={{ color: '#a1a1a6', marginBottom: '20px' }}>
                  Desarrollamos sistemas web complejos y escalables para empresas, 
                  incluyendo CRM, ERP y plataformas de gestión personalizadas.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge" style={{ 
                    backgroundColor: 'rgba(0, 122, 255, 0.1)', 
                    color: '#007AFF',
                    padding: '6px 12px',
                    borderRadius: '12px'
                  }}>SPA</span>
                  <span className="badge" style={{ 
                    backgroundColor: 'rgba(0, 122, 255, 0.1)', 
                    color: '#007AFF',
                    padding: '6px 12px',
                    borderRadius: '12px'
                  }}>PWA</span>
                  <span className="badge" style={{ 
                    backgroundColor: 'rgba(0, 122, 255, 0.1)', 
                    color: '#007AFF',
                    padding: '6px 12px',
                    borderRadius: '12px'
                  }}>Dashboard</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="h-100 p-4" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease'
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
                    <i className="bi bi-cart" style={{ fontSize: '1.5rem', color: '#34c759' }}></i>
                  </div>
                  <h5 className="fw-semibold mb-0" style={{ color: '#ffffff' }}>
                    E-commerce & Marketplace
                  </h5>
                </div>
                <p style={{ color: '#a1a1a6', marginBottom: '20px' }}>
                  Creamos tiendas online robustas con pasarelas de pago seguras, 
                  gestión de inventario avanzada y experiencias de compra optimizadas.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge" style={{ 
                    backgroundColor: 'rgba(52, 199, 89, 0.1)', 
                    color: '#34c759',
                    padding: '6px 12px',
                    borderRadius: '12px'
                  }}>Stripe</span>
                  <span className="badge" style={{ 
                    backgroundColor: 'rgba(52, 199, 89, 0.1)', 
                    color: '#34c759',
                    padding: '6px 12px',
                    borderRadius: '12px'
                  }}>PayPal</span>
                  <span className="badge" style={{ 
                    backgroundColor: 'rgba(52, 199, 89, 0.1)', 
                    color: '#34c759',
                    padding: '6px 12px',
                    borderRadius: '12px'
                  }}>Inventory</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="h-100 p-4" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease'
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
                    <i className="bi bi-phone" style={{ fontSize: '1.5rem', color: '#ff9f0a' }}></i>
                  </div>
                  <h5 className="fw-semibold mb-0" style={{ color: '#ffffff' }}>
                    Aplicaciones Móviles
                  </h5>
                </div>
                <p style={{ color: '#a1a1a6', marginBottom: '20px' }}>
                  Desarrollamos apps nativas y multiplataforma que ofrecen experiencias 
                  móviles excepcionales en iOS y Android.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge" style={{ 
                    backgroundColor: 'rgba(255, 159, 10, 0.1)', 
                    color: '#ff9f0a',
                    padding: '6px 12px',
                    borderRadius: '12px'
                  }}>React Native</span>
                  <span className="badge" style={{ 
                    backgroundColor: 'rgba(255, 159, 10, 0.1)', 
                    color: '#ff9f0a',
                    padding: '6px 12px',
                    borderRadius: '12px'
                  }}>iOS</span>
                  <span className="badge" style={{ 
                    backgroundColor: 'rgba(255, 159, 10, 0.1)', 
                    color: '#ff9f0a',
                    padding: '6px 12px',
                    borderRadius: '12px'
                  }}>Android</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="h-100 p-4" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease'
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
                    <i className="bi bi-server" style={{ fontSize: '1.5rem', color: '#ff453a' }}></i>
                  </div>
                  <h5 className="fw-semibold mb-0" style={{ color: '#ffffff' }}>
                    APIs & Microservicios
                  </h5>
                </div>
                <p style={{ color: '#a1a1a6', marginBottom: '20px' }}>
                  Diseñamos arquitecturas de API robustas y microservicios escalables 
                  que permiten integración fluida entre sistemas.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge" style={{ 
                    backgroundColor: 'rgba(255, 69, 58, 0.1)', 
                    color: '#ff453a',
                    padding: '6px 12px',
                    borderRadius: '12px'
                  }}>REST</span>
                  <span className="badge" style={{ 
                    backgroundColor: 'rgba(255, 69, 58, 0.1)', 
                    color: '#ff453a',
                    padding: '6px 12px',
                    borderRadius: '12px'
                  }}>GraphQL</span>
                  <span className="badge" style={{ 
                    backgroundColor: 'rgba(255, 69, 58, 0.1)', 
                    color: '#ff453a',
                    padding: '6px 12px',
                    borderRadius: '12px'
                  }}>Docker</span>
                </div>
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
                <i className="bi bi-collection me-3" style={{ color: '#007AFF' }}></i>
                Nuestro Portfolio
              </h2>
              <p className="lead" style={{ color: '#a1a1a6' }}>
                Explora algunos de nuestros proyectos más exitosos y descubre cómo hemos 
                ayudado a nuestros clientes a transformar sus ideas en realidades digitales.
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-6 col-md-6">
              <div style={{
                height: '320px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
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
                    <h5 className="fw-bold mb-3">Sistema ERP Empresarial</h5>
                    <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                      Plataforma completa de gestión empresarial con módulos de contabilidad, 
                      recursos humanos e inventario
                    </p>
                    <div className="d-flex justify-content-center gap-2 mt-3">
                      <span className="badge bg-light text-dark px-2 py-1">React</span>
                      <span className="badge bg-light text-dark px-2 py-1">Node.js</span>
                      <span className="badge bg-light text-dark px-2 py-1">PostgreSQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div style={{
                height: '320px',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
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
                    <h5 className="fw-bold mb-3">E-commerce Marketplace</h5>
                    <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                      Marketplace multi-vendor con pagos integrados, gestión de productos 
                      y sistema de reseñas avanzado
                    </p>
                    <div className="d-flex justify-content-center gap-2 mt-3">
                      <span className="badge bg-light text-dark px-2 py-1">Next.js</span>
                      <span className="badge bg-light text-dark px-2 py-1">Stripe</span>
                      <span className="badge bg-light text-dark px-2 py-1">MongoDB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div style={{
                height: '280px',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
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
                    <h5 className="fw-bold mb-3">App de Delivery</h5>
                    <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                      Aplicación móvil de delivery con tracking en tiempo real y pagos digitales
                    </p>
                    <div className="d-flex justify-content-center gap-1 mt-3 flex-wrap">
                      <span className="badge bg-light text-dark px-2 py-1" style={{ fontSize: '0.7rem' }}>React Native</span>
                      <span className="badge bg-light text-dark px-2 py-1" style={{ fontSize: '0.7rem' }}>GPS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div style={{
                height: '280px',
                background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
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
                    <i className="bi bi-graph-up" style={{ fontSize: '2.5rem', marginBottom: '16px' }}></i>
                    <h5 className="fw-bold mb-3">Analytics Dashboard</h5>
                    <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                      Dashboard de análisis de datos con visualizaciones interactivas y reportes automatizados
                    </p>
                    <div className="d-flex justify-content-center gap-1 mt-3 flex-wrap">
                      <span className="badge bg-light text-dark px-2 py-1" style={{ fontSize: '0.7rem' }}>D3.js</span>
                      <span className="badge bg-light text-dark px-2 py-1" style={{ fontSize: '0.7rem' }}>Charts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div style={{
                height: '280px',
                background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
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
                    <h5 className="fw-bold mb-3">Plataforma Educativa</h5>
                    <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                      LMS completo con cursos online, evaluaciones y certificaciones digitales
                    </p>
                    <div className="d-flex justify-content-center gap-1 mt-3 flex-wrap">
                      <span className="badge bg-light text-dark px-2 py-1" style={{ fontSize: '0.7rem' }}>Vue.js</span>
                      <span className="badge bg-light text-dark px-2 py-1" style={{ fontSize: '0.7rem' }}>LMS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <button 
              className="btn btn-lg rounded-pill px-5"
              style={{
                backgroundColor: '#007AFF',
                borderColor: '#007AFF',
                color: 'white',
                fontWeight: '500'
              }}
            >
              <i className="bi bi-plus-circle me-2"></i>
              Ver Más Proyectos
            </button>
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
                Ofrecemos soluciones flexibles adaptadas a diferentes necesidades y presupuestos. 
                Todos los planes incluyen código fuente, documentación completa y soporte técnico.
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="h-100 p-4 text-center position-relative" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease'
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
                  <i className="bi bi-rocket" style={{ fontSize: '2rem', color: '#34c759' }}></i>
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#ffffff' }}>Startup</h4>
                <div className="mb-4">
                  <span style={{ fontSize: '3rem', fontWeight: '700', color: '#34c759' }}>$2,500</span>
                  <div style={{ color: '#a1a1a6' }}>Proyecto completo</div>
                </div>
                <ul className="list-unstyled mb-4" style={{ color: '#a1a1a6', textAlign: 'left' }}>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#34c759' }}></i>
                    Aplicación web responsive
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#34c759' }}></i>
                    Base de datos optimizada
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#34c759' }}></i>
                    Panel de administración
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#34c759' }}></i>
                    Autenticación de usuarios
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#34c759' }}></i>
                    Despliegue en producción
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#34c759' }}></i>
                    3 meses de soporte
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
                  <i className="bi bi-cart-plus me-2"></i>
                  Elegir Plan
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="h-100 p-4 text-center position-relative" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '24px',
                border: '2px solid #007AFF',
                transform: 'scale(1.05)',
                boxShadow: '0 20px 60px rgba(0, 122, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '30px',
                  background: 'linear-gradient(135deg, #007AFF, #0056CC)',
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
                  background: 'rgba(0, 122, 255, 0.1)',
                  border: '2px solid rgba(0, 122, 255, 0.2)'
                }}>
                  <i className="bi bi-gem" style={{ fontSize: '2rem', color: '#007AFF' }}></i>
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#ffffff' }}>Profesional</h4>
                <div className="mb-4">
                  <span style={{ fontSize: '3rem', fontWeight: '700', color: '#007AFF' }}>$5,500</span>
                  <div style={{ color: '#a1a1a6' }}>Proyecto completo</div>
                </div>
                <ul className="list-unstyled mb-4" style={{ color: '#a1a1a6', textAlign: 'left' }}>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#007AFF' }}></i>
                    Todo del plan Startup
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#007AFF' }}></i>
                    API REST completa
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#007AFF' }}></i>
                    Integración con terceros
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#007AFF' }}></i>
                    Sistema de pagos online
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#007AFF' }}></i>
                    Analytics y reportes
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#007AFF' }}></i>
                    6 meses de soporte
                  </li>
                </ul>
                <button 
                  className="btn btn-lg w-100 rounded-pill"
                  style={{
                    backgroundColor: '#007AFF',
                    borderColor: '#007AFF',
                    color: 'white',
                    fontWeight: '500'
                  }}
                >
                  <i className="bi bi-lightning-charge me-2"></i>
                  Elegir Plan
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="h-100 p-4 text-center position-relative" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease'
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
                  <i className="bi bi-building" style={{ fontSize: '2rem', color: '#ff9f0a' }}></i>
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#ffffff' }}>Empresarial</h4>
                <div className="mb-4">
                  <span style={{ fontSize: '3rem', fontWeight: '700', color: '#ff9f0a' }}>$12,000</span>
                  <div style={{ color: '#a1a1a6' }}>Proyecto completo</div>
                </div>
                <ul className="list-unstyled mb-4" style={{ color: '#a1a1a6', textAlign: 'left' }}>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#ff9f0a' }}></i>
                    Todo del plan Profesional
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#ff9f0a' }}></i>
                    Arquitectura microservicios
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#ff9f0a' }}></i>
                    Aplicación móvil incluida
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#ff9f0a' }}></i>
                    Dashboard analítico avanzado
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#ff9f0a' }}></i>
                    Infraestructura cloud
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#ff9f0a' }}></i>
                    12 meses de soporte
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
                  <i className="bi bi-briefcase me-2"></i>
                  Elegir Plan
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <div className="p-4" style={{
              backgroundColor: '#1c1c1e',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <h5 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                <i className="bi bi-chat-dots me-2" style={{ color: '#ff453a' }}></i>
                ¿Necesitas algo personalizado?
              </h5>
              <p style={{ color: '#a1a1a6', marginBottom: '20px' }}>
                Ofrecemos soluciones a medida para proyectos únicos y empresas con necesidades específicas. 
                Contactanos para una cotización personalizada.
              </p>
              <button 
                className="btn rounded-pill px-4"
                onClick={() => scrollToSection('contact')}
                style={{
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  border: '1px solid #48484a',
                  fontWeight: '500'
                }}
              >
                <i className="bi bi-calendar-check me-2"></i>
                Solicitar Cotización
              </button>
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
                ¿Listo para transformar tu idea en una solución digital exitosa? 
                Contáctanos y te responderemos en menos de 24 horas con una propuesta detallada.
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
                  <i className="bi bi-send me-2" style={{ color: '#007AFF' }}></i>
                  Cuéntanos sobre tu proyecto
                </h4>
                <form className="contact-form">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label" style={{ color: '#ffffff', fontWeight: '500' }}>
                        <i className="bi bi-person me-2"></i>Nombre completo
                      </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Tu nombre"
                        style={{
                          backgroundColor: '#2c2c2e',
                          border: '1px solid #48484c',
                          color: '#F8F6F0',
                          borderRadius: '12px',
                          padding: '16px 20px'
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" style={{ color: '#ffffff', fontWeight: '500' }}>
                        <i className="bi bi-envelope me-2"></i>Email
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
                    <div className="col-md-6">
                      <label className="form-label" style={{ color: '#ffffff', fontWeight: '500' }}>
                        <i className="bi bi-telephone me-2"></i>Teléfono
                      </label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        placeholder="+52 55 1234 5678"
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
                        <i className="bi bi-building me-2"></i>Empresa
                      </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nombre de tu empresa"
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
                        <i className="bi bi-list-ul me-2"></i>Tipo de proyecto
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
                        <option>Aplicación web empresarial</option>
                        <option>E-commerce / Marketplace</option>
                        <option>Aplicación móvil</option>
                        <option>API / Microservicios</option>
                        <option>Sistema de gestión (CRM/ERP)</option>
                        <option>Otro</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label" style={{ color: '#ffffff', fontWeight: '500' }}>
                        <i className="bi bi-chat-text me-2"></i>Descripción del proyecto
                      </label>
                      <textarea 
                        className="form-control" 
                        rows="4" 
                        placeholder="Describe tu proyecto: funcionalidades requeridas, usuarios objetivo, timeline estimado, presupuesto aproximado..."
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
                      <div className="form-check mb-3">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="newsletter"
                          style={{
                            backgroundColor: '#2c2c2e',
                            borderColor: '#48484a'
                          }}
                        />
                        <label className="form-check-label" htmlFor="newsletter" style={{ color: '#a1a1a6' }}>
                          <i className="bi bi-newspaper me-2"></i>
                          Quiero recibir actualizaciones sobre nuevas tecnologías y tendencias de desarrollo
                        </label>
                      </div>
                      <button 
                        type="submit" 
                        className="btn btn-lg w-100 rounded-pill"
                        style={{
                          backgroundColor: '#007AFF',
                          borderColor: '#007AFF',
                          color: 'white',
                          fontWeight: '500',
                          padding: '16px 20px'
                        }}
                      >
                        <i className="bi bi-rocket-takeoff me-2"></i>
                        Enviar Propuesta de Proyecto
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
                    <i className="bi bi-telephone-fill me-3" style={{ color: '#007AFF', fontSize: '1.25rem' }}></i>
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: '500' }}>Teléfono</div>
                      <div style={{ color: '#a1a1a6' }}>+52 55 1234 5678</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-envelope-fill me-3" style={{ color: '#34c759', fontSize: '1.25rem' }}></i>
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: '500' }}>Email</div>
                      <div style={{ color: '#a1a1a6' }}>hola@codecraftstudio.com</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-pin-map-fill me-3" style={{ color: '#ff9f0a', fontSize: '1.25rem' }}></i>
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: '500' }}>Ubicación</div>
                      <div style={{ color: '#a1a1a6' }}>Ciudad de México, México</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-clock-fill me-3" style={{ color: '#ff453a', fontSize: '1.25rem' }}></i>
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: '500' }}>Horarios</div>
                      <div style={{ color: '#a1a1a6' }}>Lun - Vie: 9:00 - 19:00</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 mb-4" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <h5 className="fw-bold mb-4" style={{ color: '#ffffff' }}>
                  <i className="bi bi-share me-2" style={{ color: '#007AFF' }}></i>
                  Síguenos
                </h5>
                <div className="d-flex gap-3">
                  <a href="#" className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'rgba(0, 122, 255, 0.1)',
                    border: '1px solid rgba(0, 122, 255, 0.2)',
                    color: '#007AFF'
                  }}>
                    <i className="bi bi-linkedin" style={{ fontSize: '1.25rem' }}></i>
                  </a>
                  <a href="#" className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'rgba(52, 199, 89, 0.1)',
                    border: '1px solid rgba(52, 199, 89, 0.2)',
                    color: '#34c759'
                  }}>
                    <i className="bi bi-whatsapp" style={{ fontSize: '1.25rem' }}></i>
                  </a>
                  <a href="#" className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'rgba(255, 159, 10, 0.1)',
                    border: '1px solid rgba(255, 159, 10, 0.2)',
                    color: '#ff9f0a'
                  }}>
                    <i className="bi bi-github" style={{ fontSize: '1.25rem' }}></i>
                  </a>
                  <a href="#" className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'rgba(255, 69, 58, 0.1)',
                    border: '1px solid rgba(255, 69, 58, 0.2)',
                    color: '#ff453a'
                  }}>
                    <i className="bi bi-twitter" style={{ fontSize: '1.25rem' }}></i>
                  </a>
                </div>
              </div>

              <div className="p-4" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <h6 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                  <i className="bi bi-calendar-check me-2" style={{ color: '#ff9f0a' }}></i>
                  ¿Prefieres hablar directamente?
                </h6>
                <p style={{ color: '#a1a1a6', fontSize: '0.9rem', marginBottom: '16px' }}>
                  Agenda una videollamada gratuita de 30 minutos para discutir tu proyecto en detalle.
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
                  <i className="bi bi-camera-video me-2"></i>
                  Agendar Videollamada
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
                <i className="bi bi-code-square me-2" style={{ color: '#007AFF', fontSize: '1.5rem' }}></i>
                <h5 className="fw-bold mb-0" style={{ color: '#ffffff' }}>CodeCraft Studio</h5>
              </div>
              <p style={{ color: '#a1a1a6', marginBottom: '24px' }}>
                Especializados en desarrollo web full-stack y soluciones digitales innovadoras. 
                Transformamos ideas en aplicaciones web robustas y escalables.
              </p>
              <div className="d-flex gap-3">
                <i className="bi bi-award-fill" style={{ color: '#34c759', fontSize: '1.5rem' }}></i>
                <i className="bi bi-shield-check" style={{ color: '#007AFF', fontSize: '1.5rem' }}></i>
                <i className="bi bi-lightning-charge" style={{ color: '#ff9f0a', fontSize: '1.5rem' }}></i>
                <i className="bi bi-heart-fill" style={{ color: '#ff453a', fontSize: '1.5rem' }}></i>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-6 mb-4">
              <h6 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                <i className="bi bi-code-slash me-2"></i>Servicios
              </h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button 
                    className="btn p-0 border-0 bg-transparent text-start"
                    onClick={() => scrollToSection('services')}
                    style={{ color: '#a1a1a6', textDecoration: 'none' }}
                  >
                    <i className="bi bi-arrow-right me-2"></i>Desarrollo Web
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    className="btn p-0 border-0 bg-transparent text-start"
                    onClick={() => scrollToSection('services')}
                    style={{ color: '#a1a1a6', textDecoration: 'none' }}
                  >
                    <i className="bi bi-arrow-right me-2"></i>E-commerce
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    className="btn p-0 border-0 bg-transparent text-start"
                    onClick={() => scrollToSection('services')}
                    style={{ color: '#a1a1a6', textDecoration: 'none' }}
                  >
                    <i className="bi bi-arrow-right me-2"></i>Apps Móviles
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    className="btn p-0 border-0 bg-transparent text-start"
                    onClick={() => scrollToSection('services')}
                    style={{ color: '#a1a1a6', textDecoration: 'none' }}
                  >
                    <i className="bi bi-arrow-right me-2"></i>APIs
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="col-lg-2 col-md-6 mb-4">
              <h6 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                <i className="bi bi-info-circle me-2"></i>Empresa
              </h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button 
                    className="btn p-0 border-0 bg-transparent text-start"
                    onClick={() => scrollToSection('about')}
                    style={{ color: '#a1a1a6', textDecoration: 'none' }}
                  >
                    <i className="bi bi-arrow-right me-2"></i>Sobre Nosotros
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    className="btn p-0 border-0 bg-transparent text-start"
                    onClick={() => scrollToSection('portfolio')}
                    style={{ color: '#a1a1a6', textDecoration: 'none' }}
                  >
                    <i className="bi bi-arrow-right me-2"></i>Portfolio
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    className="btn p-0 border-0 bg-transparent text-start"
                    onClick={() => scrollToSection('pricing')}
                    style={{ color: '#a1a1a6', textDecoration: 'none' }}
                  >
                    <i className="bi bi-arrow-right me-2"></i>Precios
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    className="btn p-0 border-0 bg-transparent text-start"
                    onClick={() => scrollToSection('contact')}
                    style={{ color: '#a1a1a6', textDecoration: 'none' }}
                  >
                    <i className="bi bi-arrow-right me-2"></i>Contacto
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="col-lg-4 mb-4">
              <h6 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                <i className="bi bi-envelope-heart me-2"></i>Newsletter Técnico
              </h6>
              <p style={{ color: '#a1a1a6', marginBottom: '16px', fontSize: '0.9rem' }}>
                Recibe artículos sobre las últimas tecnologías, tutoriales de desarrollo y casos de estudio.
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
                    backgroundColor: '#007AFF',
                    borderColor: '#007AFF',
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
                2024 CodeCraft Studio. Todos los derechos reservados.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex justify-content-md-end gap-4">
                <a href="#" style={{ color: '#a1a1a6', textDecoration: 'none', fontSize: '0.9rem' }}>
                  <i className="bi bi-file-text me-1"></i>Privacidad
                </a>
                <a href="#" style={{ color: '#a1a1a6', textDecoration: 'none', fontSize: '0.9rem' }}>
                  <i className="bi bi-file-text me-1"></i>Términos
                </a>
                <a href="#" style={{ color: '#a1a1a6', textDecoration: 'none', fontSize: '0.9rem' }}>
                  <i className="bi bi-shield-check me-1"></i>Seguridad
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .form-control:focus {
          background-color: #2c2c2e !important;
          border-color: #007AFF !important;
          box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1) !important;
          color: #ffffff !important;
        }
      `}</style>
    </div>
  );
}