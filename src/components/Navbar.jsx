import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { login, logout } from '../features/auth/authSlice';

export default function Navbar() {
  const { isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para efecto navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = () => setShowDropdown(false);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Determinar contexto actual basado en la ruta
  const getCurrentContext = () => {
    if (location.pathname === '/') return 'starters';
    if (location.pathname === '/agency') return 'codecraft';
    if (location.pathname === '/video-services') return 'videocraft';
    if (location.pathname === '/counter') return 'demo';
    return 'starters';
  };

  const currentContext = getCurrentContext();

  // Configuración de contextos
  const contexts = {
    starters: {
      name: 'Starters Catalog',
      icon: 'bi-grid-3x3-gap',
      color: '#007AFF',
      description: 'Proyectos base listos para personalizar'
    },
    codecraft: {
      name: 'CodeCraft Agency',
      icon: 'bi-code-square',
      color: '#007AFF',
      description: 'Desarrollo web personalizado'
    },
    videocraft: {
      name: 'VideoCraft Services',
      icon: 'bi-camera-video',
      color: '#ff453a',
      description: 'Edición de video profesional'
    },
    demo: {
      name: 'Demo Counter',
      icon: 'bi-calculator',
      color: '#34c759',
      description: 'Ejemplo interactivo'
    }
  };

  const currentCtx = contexts[currentContext];

  return (
    <>
      {/* External Resources */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      <nav 
        className="navbar navbar-expand-lg navbar-dark fixed-top" 
        style={{
          backgroundColor: scrolled ? 'rgba(26, 26, 26, 0.95)' : 'rgba(26, 26, 26, 0.8)',
          borderBottom: `1px solid ${scrolled ? '#333' : 'rgba(51, 51, 51, 0.5)'}`,
          backdropFilter: 'blur(20px)',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
          transition: 'all 0.3s ease',
          zIndex: 1050
        }}
      >
        <div className="container-fluid px-4">
          
          {/* Logo Principal con Dropdown */}
          <div className="position-relative">
            <button 
              className="navbar-brand fw-bold d-flex align-items-center btn border-0 bg-transparent p-0"
              onClick={(e) => {
                e.stopPropagation();
                setShowDropdown(!showDropdown);
              }}
              style={{
                fontSize: '1.25rem',
                color: '#ffffff',
                textDecoration: 'none'
              }}
            >
              <div className="d-flex align-items-center">
                <div 
                  className="me-3 d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: `linear-gradient(135deg, ${currentCtx.color}20, ${currentCtx.color}10)`,
                    border: `2px solid ${currentCtx.color}40`
                  }}
                >
                  <i className={currentCtx.icon} style={{ 
                    color: currentCtx.color, 
                    fontSize: '1.2rem' 
                  }}></i>
                </div>
                
                <div className="text-start">
                  <div className="d-flex align-items-center">
                    <span style={{ fontSize: '1.1rem', fontWeight: '700' }}>
                      DigitalCraft
                    </span>
                    <i 
                      className={`bi bi-chevron-${showDropdown ? 'up' : 'down'} ms-2`}
                      style={{ 
                        fontSize: '0.9rem', 
                        color: '#a1a1a6',
                        transition: 'transform 0.2s ease'
                      }}
                    ></i>
                  </div>
                  <div style={{ 
                    fontSize: '0.75rem', 
                    color: '#a1a1a6',
                    fontWeight: '400',
                    lineHeight: '1'
                  }}>
                    {currentCtx.name}
                  </div>
                </div>
              </div>
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div 
                className="position-absolute start-0 mt-2"
                style={{
                  backgroundColor: '#1c1c1e',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
                  minWidth: '320px',
                  zIndex: 1060,
                  animation: 'fadeIn 0.2s ease-out'
                }}
              >
                <div className="p-3">
                  <div className="mb-3">
                    <h6 className="fw-bold mb-1" style={{ color: '#ffffff', fontSize: '0.9rem' }}>
                      <i className="bi bi-grid-3x2 me-2" style={{ color: '#007AFF' }}></i>
                      Servicios DigitalCraft
                    </h6>
                    <p style={{ color: '#a1a1a6', fontSize: '0.8rem', margin: 0 }}>
                      De la idea al lanzamiento en tiempo récord
                    </p>
                  </div>

                  {/* Opciones del Dropdown */}
                  <div className="d-grid gap-2">
                    <Link
                      to="/"
                      className="btn text-start p-3 border-0"
                      onClick={() => setShowDropdown(false)}
                      style={{
                        backgroundColor: currentContext === 'starters' ? 'rgba(0, 122, 255, 0.1)' : 'transparent',
                        borderRadius: '12px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={(e) => {
                        if (currentContext !== 'starters') {
                          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (currentContext !== 'starters') {
                          e.target.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <div 
                          className="me-3 d-flex align-items-center justify-content-center rounded-circle"
                          style={{
                            width: '32px',
                            height: '32px',
                            backgroundColor: 'rgba(0, 122, 255, 0.1)',
                            border: '1px solid rgba(0, 122, 255, 0.2)'
                          }}
                        >
                          <i className="bi bi-grid-3x3-gap" style={{ color: '#007AFF', fontSize: '0.9rem' }}></i>
                        </div>
                        <div>
                          <div style={{ 
                            color: '#ffffff', 
                            fontWeight: '600', 
                            fontSize: '0.9rem',
                            lineHeight: '1.2'
                          }}>
                            Starters Catalog
                          </div>
                          <div style={{ 
                            color: '#a1a1a6', 
                            fontSize: '0.75rem',
                            lineHeight: '1.2'
                          }}>
                            Proyectos base FREE & PREMIUM
                          </div>
                        </div>
                        {currentContext === 'starters' && (
                          <i className="bi bi-check-circle-fill ms-auto" style={{ color: '#007AFF' }}></i>
                        )}
                      </div>
                    </Link>

                    <Link
                      to="/agency"
                      className="btn text-start p-3 border-0"
                      onClick={() => setShowDropdown(false)}
                      style={{
                        backgroundColor: currentContext === 'codecraft' ? 'rgba(0, 122, 255, 0.1)' : 'transparent',
                        borderRadius: '12px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={(e) => {
                        if (currentContext !== 'codecraft') {
                          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (currentContext !== 'codecraft') {
                          e.target.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <div 
                          className="me-3 d-flex align-items-center justify-content-center rounded-circle"
                          style={{
                            width: '32px',
                            height: '32px',
                            backgroundColor: 'rgba(0, 122, 255, 0.1)',
                            border: '1px solid rgba(0, 122, 255, 0.2)'
                          }}
                        >
                          <i className="bi bi-code-square" style={{ color: '#007AFF', fontSize: '0.9rem' }}></i>
                        </div>
                        <div>
                          <div style={{ 
                            color: '#ffffff', 
                            fontWeight: '600', 
                            fontSize: '0.9rem',
                            lineHeight: '1.2'
                          }}>
                            CodeCraft Agency
                          </div>
                          <div style={{ 
                            color: '#a1a1a6', 
                            fontSize: '0.75rem',
                            lineHeight: '1.2'
                          }}>
                            Desarrollo web personalizado
                          </div>
                        </div>
                        {currentContext === 'codecraft' && (
                          <i className="bi bi-check-circle-fill ms-auto" style={{ color: '#007AFF' }}></i>
                        )}
                      </div>
                    </Link>

                    <Link
                      to="/video-services"
                      className="btn text-start p-3 border-0"
                      onClick={() => setShowDropdown(false)}
                      style={{
                        backgroundColor: currentContext === 'videocraft' ? 'rgba(255, 69, 58, 0.1)' : 'transparent',
                        borderRadius: '12px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={(e) => {
                        if (currentContext !== 'videocraft') {
                          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (currentContext !== 'videocraft') {
                          e.target.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <div 
                          className="me-3 d-flex align-items-center justify-content-center rounded-circle"
                          style={{
                            width: '32px',
                            height: '32px',
                            backgroundColor: 'rgba(255, 69, 58, 0.1)',
                            border: '1px solid rgba(255, 69, 58, 0.2)'
                          }}
                        >
                          <i className="bi bi-camera-video" style={{ color: '#ff453a', fontSize: '0.9rem' }}></i>
                        </div>
                        <div>
                          <div style={{ 
                            color: '#ffffff', 
                            fontWeight: '600', 
                            fontSize: '0.9rem',
                            lineHeight: '1.2'
                          }}>
                            VideoCraft Services
                          </div>
                          <div style={{ 
                            color: '#a1a1a6', 
                            fontSize: '0.75rem',
                            lineHeight: '1.2'
                          }}>
                            Edición de video profesional
                          </div>
                        </div>
                        {currentContext === 'videocraft' && (
                          <i className="bi bi-check-circle-fill ms-auto" style={{ color: '#ff453a' }}></i>
                        )}
                      </div>
                    </Link>
                  </div>

                  {/* Footer del Dropdown */}
                  <div className="border-top mt-3 pt-3" style={{ borderColor: '#2c2c2e' }}>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <div style={{ color: '#ffffff', fontSize: '0.8rem', fontWeight: '600' }}>
                          ¿Necesitas ayuda?
                        </div>
                        <div style={{ color: '#a1a1a6', fontSize: '0.7rem' }}>
                          Contáctanos para una consulta
                        </div>
                      </div>
                      <button 
                        className="btn btn-sm rounded-pill px-3"
                        style={{
                          backgroundColor: 'rgba(0, 122, 255, 0.1)',
                          border: '1px solid rgba(0, 122, 255, 0.2)',
                          color: '#007AFF',
                          fontSize: '0.75rem'
                        }}
                      >
                        <i className="bi bi-chat-dots me-1"></i>
                        Hablar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="navbar-toggler border-0" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/* Navigation Links Contextuales */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto ms-4">
              {currentContext === 'starters' && (
                <>
                  <li className="nav-item">
                    <a 
                      className="nav-link px-3 py-2 rounded-pill mx-1"
                      href="#about"
                      style={{ color: '#e5e5e7', transition: 'all 0.2s ease' }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = 'rgba(0, 122, 255, 0.1)';
                        e.target.style.color = '#007AFF';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#e5e5e7';
                      }}
                    >
                      <i className="bi bi-info-circle me-2"></i>Acerca de
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className="nav-link px-3 py-2 rounded-pill mx-1"
                      href="#services"
                      style={{ color: '#e5e5e7', transition: 'all 0.2s ease' }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = 'rgba(0, 122, 255, 0.1)';
                        e.target.style.color = '#007AFF';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#e5e5e7';
                      }}
                    >
                      <i className="bi bi-gear me-2"></i>Servicios
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className="nav-link px-3 py-2 rounded-pill mx-1"
                      href="#pricing"
                      style={{ color: '#e5e5e7', transition: 'all 0.2s ease' }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = 'rgba(0, 122, 255, 0.1)';
                        e.target.style.color = '#007AFF';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#e5e5e7';
                      }}
                    >
                      <i className="bi bi-currency-dollar me-2"></i>Precios
                    </a>
                  </li>
                </>
              )}

              {currentContext === 'codecraft' && (
                <>
                  <li className="nav-item">
                    <a 
                      className="nav-link px-3 py-2 rounded-pill mx-1"
                      href="#about"
                      style={{ color: '#e5e5e7', transition: 'all 0.2s ease' }}
                    >
                      <i className="bi bi-people me-2"></i>Quiénes Somos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className="nav-link px-3 py-2 rounded-pill mx-1"
                      href="#services"
                      style={{ color: '#e5e5e7', transition: 'all 0.2s ease' }}
                    >
                      <i className="bi bi-gear me-2"></i>Servicios
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className="nav-link px-3 py-2 rounded-pill mx-1"
                      href="#portfolio"
                      style={{ color: '#e5e5e7', transition: 'all 0.2s ease' }}
                    >
                      <i className="bi bi-collection me-2"></i>Portfolio
                    </a>
                  </li>
                </>
              )}

              {currentContext === 'videocraft' && (
                <>
                  <li className="nav-item">
                    <a 
                      className="nav-link px-3 py-2 rounded-pill mx-1"
                      href="#services"
                      style={{ color: '#e5e5e7', transition: 'all 0.2s ease' }}
                    >
                      <i className="bi bi-play-circle me-2"></i>Servicios
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className="nav-link px-3 py-2 rounded-pill mx-1"
                      href="#portfolio"
                      style={{ color: '#e5e5e7', transition: 'all 0.2s ease' }}
                    >
                      <i className="bi bi-collection-play me-2"></i>Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className="nav-link px-3 py-2 rounded-pill mx-1"
                      href="#pricing"
                      style={{ color: '#e5e5e7', transition: 'all 0.2s ease' }}
                    >
                      <i className="bi bi-currency-dollar me-2"></i>Precios
                    </a>
                  </li>
                </>
              )}
            </ul>
            
            {/* Auth Button */}
            <div className="d-flex">
              {isAuthenticated ? (
                <button 
                  className="btn btn-outline-light rounded-pill px-4" 
                  onClick={() => dispatch(logout())}
                  style={{
                    border: '1px solid #48484a',
                    color: '#ff453a',
                    backgroundColor: 'transparent',
                    transition: 'all 0.2s ease',
                    fontSize: '0.9rem'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#ff453a';
                    e.target.style.color = '#ffffff';
                    e.target.style.borderColor = '#ff453a';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#ff453a';
                    e.target.style.borderColor = '#48484a';
                  }}
                >
                  <i className="bi bi-box-arrow-right me-2"></i>
                  Logout
                </button>
              ) : (
                <button 
                  className="btn btn-primary rounded-pill px-4" 
                  onClick={() => dispatch(login())}
                  style={{
                    backgroundColor: currentCtx.color,
                    borderColor: currentCtx.color,
                    transition: 'all 0.2s ease',
                    fontSize: '0.9rem'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-1px)';
                    e.target.style.boxShadow = `0 4px 12px ${currentCtx.color}40`;
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <i className="bi bi-box-arrow-in-right me-2"></i>
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Bootstrap JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .navbar-nav .nav-link:hover {
          background-color: rgba(0, 122, 255, 0.1) !important;
          color: #007AFF !important;
        }

        .dropdown-toggle::after {
          display: none;
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .navbar-brand {
            font-size: 1rem !important;
          }
          
          .navbar-brand .me-3 {
            width: 32px !important;
            height: 32px !important;
          }
        }

        /* Smooth transitions */
        .nav-link {
          transition: all 0.2s ease !important;
        }

        /* Dropdown animations */
        .position-absolute {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
}