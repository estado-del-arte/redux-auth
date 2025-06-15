import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  // Scroll tracking para navbar activo
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'starters', 'process', 'pricing', 'contact'];
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

  const starters = [
    {
      id: 1,
      title: 'E-commerce Moderno',
      description: 'Tienda online completa con carrito, pagos y gestión de productos',
      category: 'ecommerce',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      price: 'PREMIUM',
      priceValue: '$2,500',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: 'bi-cart-check',
      demo: '#',
      github: '#',
      type: 'premium'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Panel de control con gráficos interactivos y reportes en tiempo real',
      category: 'dashboard',
      technologies: ['React', 'D3.js', 'Charts.js', 'PostgreSQL'],
      price: 'PREMIUM',
      priceValue: '$3,200',
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      icon: 'bi-graph-up-arrow',
      demo: '#',
      github: '#',
      type: 'premium'
    },
    {
      id: 3,
      title: 'Blog Personal',
      description: 'Blog moderno con CMS integrado y optimización SEO',
      category: 'content',
      technologies: ['Next.js', 'Contentful', 'Vercel', 'Algolia'],
      price: 'FREE',
      priceValue: 'Gratis',
      image: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      icon: 'bi-journal-text',
      demo: '#',
      github: '#',
      type: 'free'
    },
    {
      id: 4,
      title: 'Todo App',
      description: 'Aplicación de tareas con autenticación y sincronización en tiempo real',
      category: 'productivity',
      technologies: ['React', 'Firebase', 'Material-UI'],
      price: 'FREE',
      priceValue: 'Gratis',
      image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      icon: 'bi-check2-square',
      demo: '#',
      github: '#',
      type: 'free'
    },
    {
      id: 5,
      title: 'Sistema CRM',
      description: 'Gestión completa de clientes con seguimiento y automatización',
      category: 'business',
      technologies: ['React', 'Node.js', 'MySQL', 'Redis'],
      price: 'PREMIUM',
      priceValue: '$4,800',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      icon: 'bi-people-fill',
      demo: '#',
      github: '#',
      type: 'premium'
    },
    {
      id: 6,
      title: 'Portfolio Personal',
      description: 'Portfolio responsive con animaciones y modo oscuro/claro',
      category: 'portfolio',
      technologies: ['React', 'Framer Motion', 'Styled Components'],
      price: 'FREE',
      priceValue: 'Gratis',
      image: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      icon: 'bi-person-badge',
      demo: '#',
      github: '#',
      type: 'free'
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos', icon: 'bi-grid-3x3-gap' },
    { id: 'free', name: 'Gratuitos', icon: 'bi-gift' },
    { id: 'premium', name: 'Premium', icon: 'bi-star' },
    { id: 'ecommerce', name: 'E-commerce', icon: 'bi-cart' },
    { id: 'dashboard', name: 'Dashboard', icon: 'bi-graph-up' },
    { id: 'business', name: 'Empresarial', icon: 'bi-building' },
    { id: 'portfolio', name: 'Portfolio', icon: 'bi-person-badge' },
    { id: 'content', name: 'Contenido', icon: 'bi-journal' }
  ];

  const filteredStarters = starters.filter(starter => {
    const matchesCategory = activeCategory === 'all' || 
                           starter.category === activeCategory || 
                           starter.type === activeCategory;
    const matchesSearch = starter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         starter.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         starter.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ 
      backgroundColor: '#000000', 
      color: '#ffffff',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      {/* Hero Section */}
      <section id="home" style={{ paddingTop: '160px', paddingBottom: '120px' }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <div className="mb-4">
                <div className="d-flex justify-content-center gap-4 mb-4">
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(0, 122, 255, 0.1)',
                    border: '2px solid rgba(0, 122, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-grid-3x3-gap" style={{ fontSize: '1.5rem', color: '#007AFF' }}></i>
                  </div>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(0, 122, 255, 0.1)',
                    border: '2px solid rgba(0, 122, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-code-square" style={{ fontSize: '1.5rem', color: '#007AFF' }}></i>
                  </div>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(255, 69, 58, 0.1)',
                    border: '2px solid rgba(255, 69, 58, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-camera-video" style={{ fontSize: '1.5rem', color: '#ff453a' }}></i>
                  </div>
                </div>
              </div>
              <h1 className="display-1 fw-bold mb-4" style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em'
              }}>
                DigitalCraft Studio
              </h1>
              <p className="lead mb-5" style={{ 
                color: '#a1a1a6', 
                fontSize: '1.4rem',
                lineHeight: '1.5'
              }}>
                <strong style={{ color: '#ffffff' }}>De la idea al lanzamiento en tiempo récord.</strong><br />
                Starters listos, desarrollo personalizado y contenido audiovisual profesional. 
                Todo lo que necesitas para hacer realidad tu proyecto digital.
              </p>
              
              <div className="d-flex justify-content-center gap-3 flex-wrap mb-5">
                <a 
                  href="#starters"
                  className="btn btn-lg rounded-pill px-5 py-3"
                  style={{
                    backgroundColor: '#007AFF',
                    borderColor: '#007AFF',
                    color: 'white',
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}
                >
                  <i className="bi bi-grid-3x3-gap me-2"></i>
                  Explorar Starters
                </a>
                <a 
                  href="#services"
                  className="btn btn-lg rounded-pill px-5 py-3"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: '#48484a',
                    color: '#ffffff',
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}
                >
                  <i className="bi bi-rocket-takeoff me-2"></i>
                  Ver Servicios
                </a>
              </div>

              {/* Stats */}
              <div className="row text-center">
                <div className="col-md-3 mb-4">
                  <div style={{ fontSize: '3rem', fontWeight: '700', color: '#007AFF' }}>50+</div>
                  <p style={{ color: '#a1a1a6', margin: 0 }}>
                    <i className="bi bi-grid-3x3-gap me-2"></i>Starters Disponibles
                  </p>
                </div>
                <div className="col-md-3 mb-4">
                  <div style={{ fontSize: '3rem', fontWeight: '700', color: '#34c759' }}>200+</div>
                  <p style={{ color: '#a1a1a6', margin: 0 }}>
                    <i className="bi bi-code-slash me-2"></i>Proyectos Entregados
                  </p>
                </div>
                <div className="col-md-3 mb-4">
                  <div style={{ fontSize: '3rem', fontWeight: '700', color: '#ff453a' }}>500+</div>
                  <p style={{ color: '#a1a1a6', margin: 0 }}>
                    <i className="bi bi-camera-video me-2"></i>Videos Editados
                  </p>
                </div>
                <div className="col-md-3 mb-4">
                  <div style={{ fontSize: '3rem', fontWeight: '700', color: '#ff9f0a' }}>98%</div>
                  <p style={{ color: '#a1a1a6', margin: 0 }}>
                    <i className="bi bi-heart-fill me-2"></i>Satisfacción Cliente
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
                Acerca de DigitalCraft
              </h2>
              <p className="lead" style={{ color: '#a1a1a6' }}>
                Somos un estudio digital que acelera el lanzamiento de proyectos tecnológicos. 
                Combinamos templates listos para usar, desarrollo personalizado y contenido audiovisual 
                para que puedas llevar tu idea al mercado en tiempo récord.
              </p>
            </div>
          </div>

          <div className="row g-4 mb-5">
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
                  background: 'rgba(0, 122, 255, 0.1)',
                  border: '2px solid rgba(0, 122, 255, 0.2)'
                }}>
                  <i className="bi bi-lightning-charge" style={{ fontSize: '2rem', color: '#007AFF' }}></i>
                </div>
                <h5 className="fw-semibold mb-3" style={{ color: '#ffffff' }}>
                  Velocidad de Lanzamiento
                </h5>
                <p style={{ color: '#a1a1a6' }}>
                  Reducimos el tiempo de desarrollo del 70% usando starters optimizados 
                  y procesos ágiles que te permiten llegar al mercado antes que la competencia.
                </p>
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
                  background: 'rgba(52, 199, 89, 0.1)',
                  border: '2px solid rgba(52, 199, 89, 0.2)'
                }}>
                  <i className="bi bi-puzzle" style={{ fontSize: '2rem', color: '#34c759' }}></i>
                </div>
                <h5 className="fw-semibold mb-3" style={{ color: '#ffffff' }}>
                  Solución Integral
                </h5>
                <p style={{ color: '#a1a1a6' }}>
                  Todo en un solo lugar: desde el código base hasta el contenido visual. 
                  No necesitas coordinar múltiples proveedores.
                </p>
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
                  <i className="bi bi-gear-fill" style={{ fontSize: '2rem', color: '#ff9f0a' }}></i>
                </div>
                <h5 className="fw-semibold mb-3" style={{ color: '#ffffff' }}>
                  Escalabilidad Garantizada
                </h5>
                <p style={{ color: '#a1a1a6' }}>
                  Nuestros starters y desarrollos están diseñados para crecer contigo, 
                  desde MVP hasta aplicaciones de nivel empresarial.
                </p>
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
                Tres pilares fundamentales que cubren todo el ciclo de vida de tu proyecto digital: 
                desde la base técnica hasta la promoción visual.
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4">
              <div className="h-100 p-5 text-center" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '24px',
                border: '2px solid rgba(0, 122, 255, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #007AFF, #0056CC)'
                }}></div>
                
                <div className="mb-4" style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  background: 'rgba(0, 122, 255, 0.1)',
                  border: '3px solid rgba(0, 122, 255, 0.2)'
                }}>
                  <i className="bi bi-grid-3x3-gap" style={{ fontSize: '2.5rem', color: '#007AFF' }}></i>
                </div>
                
                <h4 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                  Starters Catalog
                </h4>
                <p style={{ color: '#a1a1a6', marginBottom: '24px' }}>
                  Proyectos base listos para personalizar. Desde blogs simples hasta sistemas complejos. 
                  Código limpio, documentado y con las mejores prácticas.
                </p>
                
                <div className="mb-4">
                  <div className="d-flex justify-content-center gap-2 mb-3">
                    <span className="badge" style={{ 
                      backgroundColor: 'rgba(52, 199, 89, 0.1)', 
                      color: '#34c759',
                      padding: '6px 12px',
                      borderRadius: '12px'
                    }}>Gratuitos</span>
                    <span className="badge" style={{ 
                      backgroundColor: 'rgba(255, 159, 10, 0.1)', 
                      color: '#ff9f0a',
                      padding: '6px 12px',
                      borderRadius: '12px'
                    }}>Premium</span>
                  </div>
                  <small style={{ color: '#a1a1a6', display: 'block' }}>
                    Desde $0 hasta $5,000
                  </small>
                </div>
                
                <a 
                  href="#starters"
                  className="btn btn-primary w-100 rounded-pill"
                  style={{
                    backgroundColor: '#007AFF',
                    borderColor: '#007AFF',
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}
                >
                  <i className="bi bi-arrow-down-circle me-2"></i>
                  Ver Starters
                </a>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="h-100 p-5 text-center" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '24px',
                border: '2px solid rgba(0, 122, 255, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #007AFF, #0056CC)'
                }}></div>
                
                <div className="mb-4" style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  background: 'rgba(0, 122, 255, 0.1)',
                  border: '3px solid rgba(0, 122, 255, 0.2)'
                }}>
                  <i className="bi bi-code-square" style={{ fontSize: '2.5rem', color: '#007AFF' }}></i>
                </div>
                
                <h4 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                  CodeCraft Agency
                </h4>
                <p style={{ color: '#a1a1a6', marginBottom: '24px' }}>
                  Desarrollo web personalizado cuando necesitas algo único. 
                  Full-stack, escalable y con las tecnologías más modernas.
                </p>
                
                <div className="mb-4">
                  <div className="d-flex justify-content-center gap-2 mb-3">
                    <span className="badge" style={{ 
                      backgroundColor: 'rgba(0, 122, 255, 0.1)', 
                      color: '#007AFF',
                      padding: '6px 12px',
                      borderRadius: '12px'
                    }}>React</span>
                    <span className="badge" style={{ 
                      backgroundColor: 'rgba(0, 122, 255, 0.1)', 
                      color: '#007AFF',
                      padding: '6px 12px',
                      borderRadius: '12px'
                    }}>Node.js</span>
                  </div>
                  <small style={{ color: '#a1a1a6', display: 'block' }}>
                    Desde $2,500
                  </small>
                </div>
                
                <Link 
                  to="/agency"
                  className="btn btn-primary w-100 rounded-pill"
                  style={{
                    backgroundColor: '#007AFF',
                    borderColor: '#007AFF',
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}
                >
                  <i className="bi bi-arrow-right-circle me-2"></i>
                  Ver CodeCraft
                </Link>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="h-100 p-5 text-center" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '24px',
                border: '2px solid rgba(255, 69, 58, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #ff453a, #d70015)'
                }}></div>
                
                <div className="mb-4" style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  background: 'rgba(255, 69, 58, 0.1)',
                  border: '3px solid rgba(255, 69, 58, 0.2)'
                }}>
                  <i className="bi bi-camera-video" style={{ fontSize: '2.5rem', color: '#ff453a' }}></i>
                </div>
                
                <h4 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                  VideoCraft Services
                </h4>
                <p style={{ color: '#a1a1a6', marginBottom: '24px' }}>
                  Edición de video profesional para promocionar tu proyecto. 
                  Desde demos hasta contenido para redes sociales.
                </p>
                
                <div className="mb-4">
                  <div className="d-flex justify-content-center gap-2 mb-3">
                    <span className="badge" style={{ 
                      backgroundColor: 'rgba(255, 69, 58, 0.1)', 
                      color: '#ff453a',
                      padding: '6px 12px',
                      borderRadius: '12px'
                    }}>Corporativo</span>
                    <span className="badge" style={{ 
                      backgroundColor: 'rgba(255, 69, 58, 0.1)', 
                      color: '#ff453a',
                      padding: '6px 12px',
                      borderRadius: '12px'
                    }}>Social Media</span>
                  </div>
                  <small style={{ color: '#a1a1a6', display: 'block' }}>
                    Desde $350
                  </small>
                </div>
                
                <Link 
                  to="/video-services"
                  className="btn w-100 rounded-pill"
                  style={{
                    backgroundColor: '#ff453a',
                    borderColor: '#ff453a',
                    color: 'white',
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}
                >
                  <i className="bi bi-arrow-right-circle me-2"></i>
                  Ver VideoCraft
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Starters Catalog Section */}
      <section id="starters" style={{ padding: '120px 0', backgroundColor: 'rgba(28, 28, 30, 0.5)' }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-4 fw-bold mb-4" style={{ color: '#ffffff' }}>
                <i className="bi bi-grid-3x3-gap me-3" style={{ color: '#007AFF' }}></i>
                Catálogo de Starters
              </h2>
              <p className="lead mb-4" style={{ color: '#a1a1a6' }}>
                Acelera tu desarrollo con nuestros proyectos base listos para personalizar. 
                Código limpio, documentado y con las mejores prácticas.
              </p>
              
              {/* Search Bar */}
              <div className="row justify-content-center mb-4">
                <div className="col-lg-6">
                  <div className="position-relative">
                    <i className="bi bi-search position-absolute" style={{
                      top: '50%',
                      left: '20px',
                      transform: 'translateY(-50%)',
                      color: '#a1a1a6',
                      fontSize: '1.1rem'
                    }}></i>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Buscar proyectos, tecnologías..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      style={{
                        backgroundColor: '#1c1c1e',
                        border: '1px solid #48484a',
                        color: '#ffffff',
                        borderRadius: '50px',
                        paddingLeft: '60px',
                        paddingRight: '20px',
                        height: '60px'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categories Filter */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className="btn rounded-pill px-4 py-2"
                    onClick={() => setActiveCategory(category.id)}
                    style={{
                      backgroundColor: activeCategory === category.id ? '#007AFF' : 'transparent',
                      borderColor: activeCategory === category.id ? '#007AFF' : '#48484a',
                      color: activeCategory === category.id ? '#ffffff' : '#a1a1a6',
                      transition: 'all 0.2s ease',
                      margin: '4px'
                    }}
                  >
                    <i className={`${category.icon} me-2`}></i>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="row g-4 mb-5">
            {filteredStarters.map(starter => (
              <div key={starter.id} className="col-lg-4 col-md-6">
                <div className="h-100" style={{
                  background: starter.image,
                  borderRadius: '20px',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  minHeight: '400px'
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
                    background: 'rgba(0, 0, 0, 0.6)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    color: 'white',
                    padding: '24px'
                  }}>
                    {/* Header */}
                    <div>
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <i className={`${starter.icon}`} style={{ fontSize: '2.5rem' }}></i>
                        <span className={`badge px-3 py-2 ${starter.type === 'free' ? 'bg-success' : 'bg-warning text-dark'}`} style={{
                          borderRadius: '12px',
                          fontSize: '0.875rem',
                          fontWeight: '600'
                        }}>
                          {starter.price}
                        </span>
                      </div>
                      <h5 className="fw-bold mb-2">{starter.title}</h5>
                      <p style={{ fontSize: '0.9rem', opacity: 0.9, marginBottom: '20px' }}>
                        {starter.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-3">
                      <div className="d-flex flex-wrap gap-1">
                        {starter.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="badge bg-dark bg-opacity-50 px-2 py-1" style={{
                            fontSize: '0.75rem',
                            borderRadius: '8px'
                          }}>
                            {tech}
                          </span>
                        ))}
                        {starter.technologies.length > 3 && (
                          <span className="badge bg-dark bg-opacity-50 px-2 py-1" style={{
                            fontSize: '0.75rem',
                            borderRadius: '8px'
                          }}>
                            +{starter.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="d-flex gap-2">
                      <button 
                        className="btn btn-light btn-sm flex-fill rounded-pill"
                        style={{ fontWeight: '500' }}
                      >
                        <i className="bi bi-eye me-2"></i>Demo
                      </button>
                      <button 
                        className="btn btn-outline-light btn-sm flex-fill rounded-pill"
                        style={{ fontWeight: '500' }}
                      >
                        <i className="bi bi-github me-2"></i>Código
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredStarters.length === 0 && (
            <div className="text-center py-5">
              <i className="bi bi-search" style={{ fontSize: '4rem', color: '#48484a', marginBottom: '20px' }}></i>
              <h5 style={{ color: '#a1a1a6', marginBottom: '10px' }}>No se encontraron proyectos</h5>
              <p style={{ color: '#8e8e93' }}>
                Intenta con otros términos de búsqueda o selecciona una categoría diferente
              </p>
              <button 
                className="btn btn-outline-secondary rounded-pill px-4"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
              >
                <i className="bi bi-arrow-counterclockwise me-2"></i>
                Limpiar Filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" style={{ padding: '120px 0' }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-4 fw-bold mb-4" style={{ color: '#ffffff' }}>
                <i className="bi bi-diagram-3 me-3" style={{ color: '#ff9f0a' }}></i>
                Cómo Trabajamos
              </h2>
              <p className="lead" style={{ color: '#a1a1a6' }}>
                Un proceso optimizado que combina velocidad y calidad para llevar tu proyecto 
                del concepto al lanzamiento en tiempo récord.
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="text-center p-4" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                position: 'relative'
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
                  border: '3px solid rgba(0, 122, 255, 0.2)',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    background: '#007AFF',
                    color: 'white',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.875rem',
                    fontWeight: '700'
                  }}>1</span>
                  <i className="bi bi-chat-dots" style={{ fontSize: '1.8rem', color: '#007AFF' }}></i>
                </div>
                <h6 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                  Consulta Inicial
                </h6>
                <p style={{ color: '#a1a1a6', fontSize: '0.9rem' }}>
                  Entendemos tu visión, objetivos y requisitos. Definimos el alcance y la mejor estrategia.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="text-center p-4" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                position: 'relative'
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
                  border: '3px solid rgba(52, 199, 89, 0.2)',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    background: '#34c759',
                    color: 'white',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.875rem',
                    fontWeight: '700'
                  }}>2</span>
                  <i className="bi bi-grid-3x3-gap" style={{ fontSize: '1.8rem', color: '#34c759' }}></i>
                </div>
                <h6 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                  Selección de Base
                </h6>
                <p style={{ color: '#a1a1a6', fontSize: '0.9rem' }}>
                  Elegimos el starter más adecuado o planificamos el desarrollo desde cero según tus necesidades.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="text-center p-4" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                position: 'relative'
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
                  border: '3px solid rgba(255, 159, 10, 0.2)',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    background: '#ff9f0a',
                    color: 'white',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.875rem',
                    fontWeight: '700'
                  }}>3</span>
                  <i className="bi bi-gear-fill" style={{ fontSize: '1.8rem', color: '#ff9f0a' }}></i>
                </div>
                <h6 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                  Personalización
                </h6>
                <p style={{ color: '#a1a1a6', fontSize: '0.9rem' }}>
                  Adaptamos el código, diseño y funcionalidades específicas para tu proyecto único.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="text-center p-4" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                position: 'relative'
              }}>
                <div className="mb-4" style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  background: 'rgba(255, 69, 58, 0.1)',
                  border: '3px solid rgba(255, 69, 58, 0.2)',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    background: '#ff453a',
                    color: 'white',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.875rem',
                    fontWeight: '700'
                  }}>4</span>
                  <i className="bi bi-rocket-takeoff" style={{ fontSize: '1.8rem', color: '#ff453a' }}></i>
                </div>
                <h6 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                  Lanzamiento
                </h6>
                <p style={{ color: '#a1a1a6', fontSize: '0.9rem' }}>
                  Desplegamos tu proyecto y creamos el contenido audiovisual para su promoción.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Visual */}
          <div className="row justify-content-center mt-5">
            <div className="col-lg-10">
              <div className="p-4" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <div className="text-center mb-4">
                  <h5 className="fw-bold" style={{ color: '#ffffff' }}>
                    <i className="bi bi-stopwatch me-2" style={{ color: '#34c759' }}></i>
                    Timeline Típico
                  </h5>
                </div>
                <div className="row text-center">
                  <div className="col-md-3 mb-3">
                    <div style={{ color: '#007AFF', fontSize: '1.5rem', fontWeight: '700' }}>24h</div>
                    <small style={{ color: '#a1a1a6' }}>Consulta y Propuesta</small>
                  </div>
                  <div className="col-md-3 mb-3">
                    <div style={{ color: '#34c759', fontSize: '1.5rem', fontWeight: '700' }}>3-7 días</div>
                    <small style={{ color: '#a1a1a6' }}>Desarrollo/Personalización</small>
                  </div>
                  <div className="col-md-3 mb-3">
                    <div style={{ color: '#ff9f0a', fontSize: '1.5rem', fontWeight: '700' }}>2-3 días</div>
                    <small style={{ color: '#a1a1a6' }}>Testing y Ajustes</small>
                  </div>
                  <div className="col-md-3 mb-3">
                    <div style={{ color: '#ff453a', fontSize: '1.5rem', fontWeight: '700' }}>1 día</div>
                    <small style={{ color: '#a1a1a6' }}>Despliegue y Video</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ padding: '120px 0', backgroundColor: 'rgba(28, 28, 30, 0.5)' }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-4 fw-bold mb-4" style={{ color: '#ffffff' }}>
                <i className="bi bi-currency-dollar me-3" style={{ color: '#34c759' }}></i>
                Precios Transparentes
              </h2>
              <p className="lead" style={{ color: '#a1a1a6' }}>
                Opciones flexibles para cada presupuesto. Desde starters gratuitos hasta 
                soluciones empresariales completas. Sin costos ocultos.
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Starters Gratuitos */}
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
                  <i className="bi bi-gift" style={{ fontSize: '2rem', color: '#34c759' }}></i>
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#ffffff' }}>Starters FREE</h4>
                <div className="mb-4">
                  <span style={{ fontSize: '3rem', fontWeight: '700', color: '#34c759' }}>$0</span>
                  <div style={{ color: '#a1a1a6' }}>Para siempre</div>
                </div>
                <ul className="list-unstyled mb-4" style={{ color: '#a1a1a6', textAlign: 'left' }}>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#34c759' }}></i>
                    Código fuente completo
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#34c759' }}></i>
                    Documentación incluida
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#34c759' }}></i>
                    Proyectos básicos listos
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#34c759' }}></i>
                    Soporte comunidad
                  </li>
                </ul>
                <a 
                  href="#starters"
                  className="btn btn-lg w-100 rounded-pill"
                  style={{
                    backgroundColor: '#34c759',
                    borderColor: '#34c759',
                    color: 'white',
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}
                >
                  Descargar Gratis
                </a>
              </div>
            </div>

            {/* Starters Premium */}
            <div className="col-lg-4">
              <div className="h-100 p-4 text-center position-relative" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '24px',
                border: '2px solid #007AFF',
                transform: 'scale(1.05)',
                boxShadow: '0 20px 60px rgba(0, 122, 255, 0.2)'
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
                  <i className="bi bi-star" style={{ fontSize: '2rem', color: '#007AFF' }}></i>
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#ffffff' }}>Starters PREMIUM</h4>
                <div className="mb-4">
                  <span style={{ fontSize: '2.5rem', fontWeight: '700', color: '#007AFF' }}>$500</span>
                  <span style={{ fontSize: '1.2rem', color: '#a1a1a6' }}> - $5,000</span>
                  <div style={{ color: '#a1a1a6' }}>Por proyecto</div>
                </div>
                <ul className="list-unstyled mb-4" style={{ color: '#a1a1a6', textAlign: 'left' }}>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#007AFF' }}></i>
                    Todo de los FREE
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#007AFF' }}></i>
                    Funcionalidades avanzadas
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#007AFF' }}></i>
                    Base de datos incluida
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#007AFF' }}></i>
                    Soporte técnico 30 días
                  </li>
                </ul>
                <a 
                  href="#starters"
                  className="btn btn-lg w-100 rounded-pill"
                  style={{
                    backgroundColor: '#007AFF',
                    borderColor: '#007AFF',
                    color: 'white',
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}
                >
                  Ver Premium
                </a>
              </div>
            </div>

            {/* Desarrollo Custom */}
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
                  <i className="bi bi-code-square" style={{ fontSize: '2rem', color: '#ff9f0a' }}></i>
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#ffffff' }}>Desarrollo Custom</h4>
                <div className="mb-4">
                  <span style={{ fontSize: '2rem', fontWeight: '700', color: '#ff9f0a' }}>Desde $2,500</span>
                  <div style={{ color: '#a1a1a6' }}>Proyecto completo</div>
                </div>
                <ul className="list-unstyled mb-4" style={{ color: '#a1a1a6', textAlign: 'left' }}>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#ff9f0a' }}></i>
                    Desarrollo desde cero
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#ff9f0a' }}></i>
                    Arquitectura escalable
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#ff9f0a' }}></i>
                    Video promocional incluido
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle me-2" style={{ color: '#ff9f0a' }}></i>
                    Soporte 6 meses
                  </li>
                </ul>
                <Link 
                  to="/agency"
                  className="btn btn-lg w-100 rounded-pill"
                  style={{
                    backgroundColor: '#ff9f0a',
                    borderColor: '#ff9f0a',
                    color: 'white',
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}
                >
                  Consultar
                </Link>
              </div>
            </div>
          </div>

          {/* Add-ons */}
          <div className="row justify-content-center mt-5">
            <div className="col-lg-10">
              <div className="p-4" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <h5 className="text-center fw-bold mb-4" style={{ color: '#ffffff' }}>
                  <i className="bi bi-plus-circle me-2" style={{ color: '#ff453a' }}></i>
                  Servicios Adicionales
                </h5>
                <div className="row text-center">
                  <div className="col-md-4 mb-3">
                    <i className="bi bi-camera-video mb-2" style={{ fontSize: '2rem', color: '#ff453a' }}></i>
                    <h6 className="fw-semibold" style={{ color: '#ffffff' }}>Video Demo</h6>
                    <p style={{ color: '#a1a1a6', fontSize: '0.9rem', margin: 0 }}>
                      Desde $350 - Video promocional de tu proyecto
                    </p>
                  </div>
                  <div className="col-md-4 mb-3">
                    <i className="bi bi-cloud-upload mb-2" style={{ fontSize: '2rem', color: '#34c759' }}></i>
                    <h6 className="fw-semibold" style={{ color: '#ffffff' }}>Despliegue</h6>
                    <p style={{ color: '#a1a1a6', fontSize: '0.9rem', margin: 0 }}>
                      $200 - Configuración completa en producción
                    </p>
                  </div>
                  <div className="col-md-4 mb-3">
                    <i className="bi bi-headset mb-2" style={{ fontSize: '2rem', color: '#007AFF' }}></i>
                    <h6 className="fw-semibold" style={{ color: '#ffffff' }}>Soporte Premium</h6>
                    <p style={{ color: '#a1a1a6', fontSize: '0.9rem', margin: 0 }}>
                      $100/mes - Soporte prioritario y actualizaciones
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '120px 0' }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-4 fw-bold mb-4" style={{ color: '#ffffff' }}>
                <i className="bi bi-envelope me-3" style={{ color: '#007AFF' }}></i>
                Hablemos de tu Proyecto
              </h2>
              <p className="lead" style={{ color: '#a1a1a6' }}>
                ¿Listo para acelerar tu proyecto digital? Contáctanos y te responderemos 
                en menos de 24 horas con una propuesta personalizada.
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
                  <i className="bi bi-rocket-takeoff me-2" style={{ color: '#007AFF' }}></i>
                  Cuéntanos sobre tu idea
                </h4>
                <form>
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
                          border: '1px solid #48484a',
                          color: '#ffffff',
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
                    <div className="col-12">
                      <label className="form-label" style={{ color: '#ffffff', fontWeight: '500' }}>
                        <i className="bi bi-list-ul me-2"></i>¿Qué necesitas?
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
                        <option>Starter personalizado</option>
                        <option>Desarrollo web desde cero</option>
                        <option>Video promocional</option>
                        <option>Proyecto completo (código + video)</option>
                        <option>Consultoría técnica</option>
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
                        placeholder="Describe tu proyecto: funcionalidades, audiencia objetivo, timeline, presupuesto aproximado..."
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
                          Quiero recibir actualizaciones sobre nuevos starters y recursos
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
                        <i className="bi bi-send me-2"></i>
                        Enviar Propuesta
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
                    <i className="bi bi-envelope-fill me-3" style={{ color: '#007AFF', fontSize: '1.25rem' }}></i>
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: '500' }}>Email</div>
                      <div style={{ color: '#a1a1a6' }}>hola@digitalcraft.studio</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-chat-dots-fill me-3" style={{ color: '#34c759', fontSize: '1.25rem' }}></i>
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: '500' }}>WhatsApp</div>
                      <div style={{ color: '#a1a1a6' }}>+52 55 1234 5678</div>
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
                      <div style={{ color: '#ffffff', fontWeight: '500' }}>Respuesta</div>
                      <div style={{ color: '#a1a1a6' }}> 24 horas garantizado</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 mb-4" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <h6 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                  <i className="bi bi-calendar-check me-2" style={{ color: '#ff9f0a' }}></i>
                  ¿Prefieres una videollamada?
                </h6>
                <p style={{ color: '#a1a1a6', fontSize: '0.9rem', marginBottom: '16px' }}>
                  Agenda una consulta gratuita de 30 minutos para discutir tu proyecto en detalle.
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
                  Agendar Llamada
                </button>
              </div>

              <div className="p-4" style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <h6 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                  <i className="bi bi-share me-2" style={{ color: '#007AFF' }}></i>
                  Síguenos
                </h6>
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
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 0', backgroundColor: '#1c1c1e', borderTop: '1px solid #2c2c2e' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="d-flex align-items-center mb-4">
                <div 
                  className="me-3 d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #007AFF20, #007AFF10)',
                    border: '2px solid #007AFF40'
                  }}
                >
                  <i className="bi bi-grid-3x3-gap" style={{ color: '#007AFF', fontSize: '1.5rem' }}></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-0" style={{ color: '#ffffff' }}>DigitalCraft</h5>
                  <small style={{ color: '#a1a1a6' }}>Studio</small>
                </div>
              </div>
              <p style={{ color: '#a1a1a6', marginBottom: '24px' }}>
                De la idea al lanzamiento en tiempo récord. Starters listos, desarrollo personalizado 
                y contenido audiovisual profesional.
              </p>
              <div className="d-flex gap-3">
                <i className="bi bi-lightning-charge" style={{ color: '#007AFF', fontSize: '1.5rem' }}></i>
                <i className="bi bi-shield-check" style={{ color: '#34c759', fontSize: '1.5rem' }}></i>
                <i className="bi bi-heart-fill" style={{ color: '#ff453a', fontSize: '1.5rem' }}></i>
                <i className="bi bi-star-fill" style={{ color: '#ff9f0a', fontSize: '1.5rem' }}></i>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-6 mb-4">
              <h6 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                <i className="bi bi-grid-3x3-gap me-2"></i>Starters
              </h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#starters" style={{ color: '#a1a1a6', textDecoration: 'none' }}>
                    <i className="bi bi-arrow-right me-2"></i>Gratuitos
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#starters" style={{ color: '#a1a1a6', textDecoration: 'none' }}>
                    <i className="bi bi-arrow-right me-2"></i>Premium
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#starters" style={{ color: '#a1a1a6', textDecoration: 'none' }}>
                    <i className="bi bi-arrow-right me-2"></i>E-commerce
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#starters" style={{ color: '#a1a1a6', textDecoration: 'none' }}>
                    <i className="bi bi-arrow-right me-2"></i>Dashboard
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="col-lg-2 col-md-6 mb-4">
              <h6 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                <i className="bi bi-gear me-2"></i>Servicios
              </h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/agency" style={{ color: '#a1a1a6', textDecoration: 'none' }}>
                    <i className="bi bi-arrow-right me-2"></i>CodeCraft
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/video-services" style={{ color: '#a1a1a6', textDecoration: 'none' }}>
                    <i className="bi bi-arrow-right me-2"></i>VideoCraft
                  </Link>
                </li>
                <li className="mb-2">
                  <a href="#pricing" style={{ color: '#a1a1a6', textDecoration: 'none' }}>
                    <i className="bi bi-arrow-right me-2"></i>Precios
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#contact" style={{ color: '#a1a1a6', textDecoration: 'none' }}>
                    <i className="bi bi-arrow-right me-2"></i>Contacto
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="col-lg-4 mb-4">
              <h6 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                <i className="bi bi-envelope-heart me-2"></i>Newsletter Developer
              </h6>
              <p style={{ color: '#a1a1a6', marginBottom: '16px', fontSize: '0.9rem' }}>
                Recibe starters gratuitos, recursos de desarrollo y casos de estudio directamente en tu inbox.
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
                2024 DigitalCraft Studio. Todos los derechos reservados.
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
                  <i className="bi bi-shield-check me-1"></i>Open Source
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        .form-control:focus {
          background-color: #2c2c2e !important;
          border-color: #007AFF !important;
          box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1) !important;
          color: #ffffff !important;
        }

        .btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {
          .display-1 {
            font-size: 2.5rem !important;
          }
          
          .display-4 {
            font-size: 2rem !important;
          }
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Link hover effects */
        a:hover {
          transform: translateY(-1px);
          transition: all 0.2s ease;
        }
      `}</style>
    </div>
  );
}