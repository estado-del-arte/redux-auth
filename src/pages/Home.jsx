export default function Home() {
  return (
    <div style={{ 
      backgroundColor: '#000000', 
      minHeight: '100vh',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      <div className="container-fluid px-4 py-5">
        {/* Hero Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="mb-4">
              <i className="bi bi-lightning-charge-fill" style={{ 
                fontSize: '4rem', 
                color: '#007AFF',
                filter: 'drop-shadow(0 0 20px rgba(0, 122, 255, 0.3))'
              }}></i>
            </div>
            <h1 className="display-3 fw-bold mb-4" style={{ 
              color: '#ffffff',
              background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em'
            }}>
              Bienvenido a Counter App
            </h1>
            <p className="lead mb-5" style={{ 
              color: '#a1a1a6',
              fontSize: '1.25rem',
              fontWeight: '400',
              lineHeight: '1.5'
            }}>
              Una aplicación de contador, desarrollada con React y Redux, inspirada en el diseño estético de Apple.
            </p>
            
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <button className="btn btn-primary btn-lg rounded-pill px-5 py-3" style={{
                backgroundColor: '#007AFF',
                borderColor: '#007AFF',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}>
                <i className="bi bi-play-fill me-2"></i>
                Iniciar
              </button>
              <button className="btn btn-outline-light btn-lg rounded-pill px-5 py-3" style={{
                borderColor: '#48484a',
                color: '#ffffff',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}>
                <i className="bi bi-info-circle me-2"></i>
                Aprender más
              </button>
            </div>
          </div>
        </div>
        
        {/* Features Cards */}
        <div className="row g-4 mb-5">
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0" style={{
              backgroundColor: '#1c1c1e',
              borderRadius: '20px',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div className="card-body p-4 text-center">
                <div className="mb-3">
                  <i className="bi bi-speedometer2" style={{ 
                    fontSize: '3rem', 
                    color: '#34c759' 
                  }}></i>
                </div>
                <h5 className="card-title fw-semibold mb-3" style={{ color: '#ffffff' }}>
                  Alto Performance
                </h5>
                <p className="card-text" style={{ 
                  color: '#a1a1a6',
                  lineHeight: '1.6'
                }}>
                  Desarrollada con React y optimizada para interacciones fluidas y receptivas en todos los dispositivos.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0" style={{
              backgroundColor: '#1c1c1e',
              borderRadius: '20px',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div className="card-body p-4 text-center">
                <div className="mb-3">
                  <i className="bi bi-shield-check" style={{ 
                    fontSize: '3rem', 
                    color: '#007AFF' 
                  }}></i>
                </div>
                <h5 className="card-title fw-semibold mb-3" style={{ color: '#ffffff' }}>
                  Seguro & Privado
                </h5>
                <p className="card-text" style={{ 
                  color: '#a1a1a6',
                  lineHeight: '1.6'
                }}>
                  Protección de datos integrada, con autenticación y rutas seguras implementadas en el núcleo del sistema.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0" style={{
              backgroundColor: '#1c1c1e',
              borderRadius: '20px',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div className="card-body p-4 text-center">
                <div className="mb-3">
                  <i className="bi bi-palette" style={{ 
                    fontSize: '3rem', 
                    color: '#ff9f0a' 
                  }}></i>
                </div>
                <h5 className="card-title fw-semibold mb-3" style={{ color: '#ffffff' }}>
                  Diseño Moderno
                </h5>
                <p className="card-text" style={{ 
                  color: '#a1a1a6',
                  lineHeight: '1.6'
                }}>
                  Interfaz limpia y minimalista, inspirada en el diseño de Apple y los estándares web modernos
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0" style={{
              backgroundColor: '#1c1c1e',
              borderRadius: '20px'
            }}>
              <div className="card-body p-5">
                <div className="row text-center">
                  <div className="col-md-4 mb-4 mb-md-0">
                    <h3 className="fw-bold mb-2" style={{ 
                      color: '#34c759',
                      fontSize: '2.5rem'
                    }}>99.9%</h3>
                    <p className="mb-0" style={{ color: '#a1a1a6' }}>Disponibilidad</p>
                  </div>
                  <div className="col-md-4 mb-4 mb-md-0">
                    <h3 className="fw-bold mb-2" style={{ 
                      color: '#007AFF',
                      fontSize: '2.5rem'
                    }}>50ms</h3>
                    <p className="mb-0" style={{ color: '#a1a1a6' }}>Tiempo de respuesta</p>
                  </div>
                  <div className="col-md-4">
                    <h3 className="fw-bold mb-2" style={{ 
                      color: '#ff9f0a',
                      fontSize: '2.5rem'
                    }}>10k+</h3>
                    <p className="mb-0" style={{ color: '#a1a1a6' }}>Usuarios Satisfechos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}