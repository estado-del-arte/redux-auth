import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const starters = [
    {
      id: 1,
      title: 'E-commerce Moderno',
      description: 'Tienda online completa con carrito, pagos y gestión de productos',
      category: 'ecommerce',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      price: '$2,500',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: 'bi-cart-check',
      demo: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Panel de control con gráficos interactivos y reportes en tiempo real',
      category: 'dashboard',
      technologies: ['React', 'D3.js', 'Charts.js', 'PostgreSQL'],
      price: '$3,200',
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      icon: 'bi-graph-up-arrow',
      demo: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Sistema CRM',
      description: 'Gestión completa de clientes con seguimiento y automatización',
      category: 'business',
      technologies: ['React', 'Node.js', 'MySQL', 'Redis'],
      price: '$4,800',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      icon: 'bi-people-fill',
      demo: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'App Móvil Social',
      description: 'Red social móvil con chat en tiempo real y contenido multimedia',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Socket.io', 'AWS'],
      price: '$5,500',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      icon: 'bi-phone',
      demo: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Plataforma LMS',
      description: 'Sistema de aprendizaje online con cursos y certificaciones',
      category: 'education',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Vimeo'],
      price: '$4,200',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      icon: 'bi-mortarboard',
      demo: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'API Marketplace',
      description: 'Marketplace de APIs con documentación y sistema de pagos',
      category: 'api',
      technologies: ['Node.js', 'Express', 'Swagger', 'Stripe'],
      price: '$3,800',
      image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      icon: 'bi-server',
      demo: '#',
      github: '#'
    },
    {
      id: 7,
      title: 'Sistema POS',
      description: 'Punto de venta con inventario y facturación electrónica',
      category: 'business',
      technologies: ['React', 'Electron', 'SQLite', 'Thermal'],
      price: '$3,500',
      image: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      icon: 'bi-cash-register',
      demo: '#',
      github: '#'
    },
    {
      id: 8,
      title: 'Blog Personal',
      description: 'Blog moderno con CMS integrado y optimización SEO',
      category: 'content',
      technologies: ['Next.js', 'Contentful', 'Vercel', 'Algolia'],
      price: '$1,800',
      image: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      icon: 'bi-journal-text',
      demo: '#',
      github: '#'
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos', icon: 'bi-grid-3x3-gap' },
    { id: 'ecommerce', name: 'E-commerce', icon: 'bi-cart' },
    { id: 'dashboard', name: 'Dashboard', icon: 'bi-graph-up' },
    { id: 'business', name: 'Empresarial', icon: 'bi-building' },
    { id: 'mobile', name: 'Móvil', icon: 'bi-phone' },
    { id: 'education', name: 'Educación', icon: 'bi-mortarboard' },
    { id: 'api', name: 'API', icon: 'bi-server' },
    { id: 'content', name: 'Contenido', icon: 'bi-journal' }
  ];

  const filteredStarters = starters.filter(starter => {
    const matchesCategory = activeCategory === 'all' || starter.category === activeCategory;
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
      <section style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="mb-4">
                <i className="bi bi-code-square" style={{
                  fontSize: '4rem', 
                  color: '#007AFF',
                  filter: 'drop-shadow(0 0 20px rgba(0, 122, 255, 0.3))'
                }}></i>
              </div>
              <h1 className="display-2 fw-bold mb-4" style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em'
              }}>
                Catálogo de Starters
              </h1>
              <p className="lead mb-5" style={{ 
                color: '#a1a1a6', 
                fontSize: '1.3rem',
                lineHeight: '1.5'
              }}>
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

              {/* Stats */}
              <div className="row text-center">
                <div className="col-md-4 mb-3">
                  <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#007AFF' }}>50+</div>
                  <p style={{ color: '#a1a1a6', margin: 0 }}>
                    <i className="bi bi-code-slash me-2"></i>Proyectos Disponibles
                  </p>
                </div>
                <div className="col-md-4 mb-3">
                  <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#34c759' }}>100%</div>
                  <p style={{ color: '#a1a1a6', margin: 0 }}>
                    <i className="bi bi-shield-check me-2"></i>Código Fuente
                  </p>
                </div>
                <div className="col-md-4 mb-3">
                  <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#ff9f0a' }}>24h</div>
                  <p style={{ color: '#a1a1a6', margin: 0 }}>
                    <i className="bi bi-lightning-charge me-2"></i>Entrega Rápida
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div className="row justify-content-center">
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
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ paddingBottom: '120px' }}>
        <div className="container">
          <div className="row g-4">
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
                        <span className="badge bg-light text-dark px-3 py-2" style={{
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

      {/* CTA Section */}
      <section style={{ 
        padding: '80px 0', 
        backgroundColor: 'rgba(28, 28, 30, 0.5)',
        borderTop: '1px solid #48484a'
      }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-4" style={{ color: '#ffffff' }}>
                ¿No encuentras lo que necesitas?
              </h2>
              <p className="lead mb-4" style={{ color: '#a1a1a6' }}>
                Creamos proyectos starter personalizados para tus necesidades específicas
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link 
                  to="/agency"
                  className="btn btn-primary btn-lg rounded-pill px-5"
                  style={{
                    backgroundColor: '#007AFF',
                    borderColor: '#007AFF',
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}
                >
                  <i className="bi bi-plus-circle me-2"></i>
                  Solicitar Proyecto Custom
                </Link>
                <Link 
                  to="/counter"
                  className="btn btn-outline-light btn-lg rounded-pill px-5"
                  style={{
                    borderColor: '#48484a',
                    color: '#ffffff',
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}
                >
                  <i className="bi bi-calculator me-2"></i>
                  Demo Counter App
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}