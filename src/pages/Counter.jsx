import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../features/counter/counterSlice';
import { Link } from 'react-router-dom';

export default function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ 
      backgroundColor: '#000000', 
      minHeight: '100vh',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      <div className="container-fluid px-4 py-5">
        {/* Breadcrumb */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb" style={{ backgroundColor: 'transparent', padding: 0 }}>
                <li className="breadcrumb-item">
                  <Link to="/" style={{ color: '#007AFF', textDecoration: 'none' }}>
                    <i className="bi bi-grid-3x3-gap me-2"></i>Catálogo Starters
                  </Link>
                </li>
                <li className="breadcrumb-item active" style={{ color: '#a1a1a6' }}>
                  Counter App Demo
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            
            {/* Header */}
            <div className="text-center mb-5">
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
                <i className="bi bi-calculator" style={{ fontSize: '2rem', color: '#007AFF' }}></i>
              </div>
              <h1 className="display-4 fw-bold mb-3" style={{ 
                color: '#ffffff',
                letterSpacing: '-0.02em'
              }}>
                Counter App Demo
              </h1>
              <p className="lead mb-4" style={{ color: '#a1a1a6' }}>
                Demo interactivo de una aplicación contador desarrollada con React y Redux. 
                Ejemplo de starter perfecto para aplicaciones de estado global.
              </p>
              
              {/* Tech Stack */}
              <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
                <span className="badge" style={{ 
                  backgroundColor: 'rgba(0, 122, 255, 0.1)', 
                  color: '#007AFF',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  fontSize: '0.875rem'
                }}>React</span>
                <span className="badge" style={{ 
                  backgroundColor: 'rgba(52, 199, 89, 0.1)', 
                  color: '#34c759',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  fontSize: '0.875rem'
                }}>Redux Toolkit</span>
                <span className="badge" style={{ 
                  backgroundColor: 'rgba(255, 159, 10, 0.1)', 
                  color: '#ff9f0a',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  fontSize: '0.875rem'
                }}>Bootstrap</span>
                <span className="badge" style={{ 
                  backgroundColor: 'rgba(255, 69, 58, 0.1)', 
                  color: '#ff453a',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  fontSize: '0.875rem'
                }}>React Router</span>
              </div>
            </div>
            
            {/* Main Counter Card */}
            <div className="card border-0 mb-5" style={{
              backgroundColor: '#1c1c1e',
              borderRadius: '24px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}>
              <div className="card-body p-5 text-center">
                
                {/* Counter Display */}
                <div className="mb-5">
                  <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" style={{
                    width: '120px',
                    height: '120px',
                    backgroundColor: 'rgba(0, 122, 255, 0.1)',
                    border: '2px solid rgba(0, 122, 255, 0.2)'
                  }}>
                    <span className="display-2 fw-bold" style={{ 
                      color: '#007AFF',
                      fontVariantNumeric: 'tabular-nums'
                    }}>
                      {count}
                    </span>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="mb-3">
                    <span className={`badge rounded-pill px-3 py-2 ${
                      count > 0 ? 'text-success' : count < 0 ? 'text-danger' : 'text-secondary'
                    }`} style={{
                      backgroundColor: count > 0 ? 'rgba(52, 199, 89, 0.1)' : 
                                      count < 0 ? 'rgba(255, 69, 58, 0.1)' : 
                                      'rgba(142, 142, 147, 0.1)',
                      border: `1px solid ${count > 0 ? 'rgba(52, 199, 89, 0.2)' : 
                                          count < 0 ? 'rgba(255, 69, 58, 0.2)' : 
                                          'rgba(142, 142, 147, 0.2)'}`,
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}>
                      {count > 0 ? '+ Positivo' : count < 0 ? '- Negativo' : 'Neutral'}
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="progress mb-3" style={{ 
                    height: '6px', 
                    backgroundColor: 'rgba(142, 142, 147, 0.2)',
                    borderRadius: '3px'
                  }}>
                    <div 
                      className="progress-bar" 
                      style={{
                        width: `${Math.min(Math.abs(count) * 5, 100)}%`,
                        backgroundColor: count >= 0 ? '#34c759' : '#ff453a',
                        borderRadius: '3px',
                        transition: 'width 0.3s ease'
                      }}
                    ></div>
                  </div>
                </div>
                
                {/* Control Buttons */}
                <div className="d-flex justify-content-center gap-3 mb-4">
                  <button 
                    className="btn btn-lg rounded-circle d-flex align-items-center justify-content-center"
                    onClick={() => dispatch(decrement())}
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#ff453a',
                      borderColor: '#ff453a',
                      color: '#ffffff',
                      transition: 'all 0.2s ease',
                      border: 'none'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#d70015';
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = '#ff453a';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    <i className="bi bi-dash-lg" style={{ fontSize: '1.5rem' }}></i>
                  </button>
                  
                  <button 
                    className="btn btn-lg rounded-circle d-flex align-items-center justify-content-center"
                    onClick={() => dispatch(reset())}
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#8e8e93',
                      borderColor: '#8e8e93',
                      color: '#ffffff',
                      transition: 'all 0.2s ease',
                      border: 'none'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#6d6d70';
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = '#8e8e93';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    <i className="bi bi-arrow-clockwise" style={{ fontSize: '1.25rem' }}></i>
                  </button>
                  
                  <button 
                    className="btn btn-lg rounded-circle d-flex align-items-center justify-content-center"
                    onClick={() => dispatch(increment())}
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#34c759',
                      borderColor: '#34c759',
                      color: '#ffffff',
                      transition: 'all 0.2s ease',
                      border: 'none'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#248a3d';
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = '#34c759';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    <i className="bi bi-plus-lg" style={{ fontSize: '1.5rem' }}></i>
                  </button>
                </div>
                
                {/* Action Labels */}
                <div className="d-flex justify-content-center gap-5 mb-4">
                  <small style={{ color: '#a1a1a6', fontWeight: '500' }}>Decrementar</small>
                  <small style={{ color: '#a1a1a6', fontWeight: '500' }}>Reset</small>
                  <small style={{ color: '#a1a1a6', fontWeight: '500' }}>Incrementar</small>
                </div>

                {/* Demo Actions */}
                <div className="border-top pt-4" style={{ borderColor: '#2c2c2e !important' }}>
                  <h6 className="fw-semibold mb-3" style={{ color: '#ffffff' }}>
                    <i className="bi bi-code-square me-2"></i>
                    Explora este Starter
                  </h6>
                  <div className="d-flex justify-content-center gap-3 flex-wrap">
                    <button className="btn btn-outline-primary rounded-pill px-4" style={{
                      borderColor: '#007AFF',
                      color: '#007AFF',
                      fontWeight: '500'
                    }}>
                      <i className="bi bi-github me-2"></i>
                      Ver Código
                    </button>
                    <button className="btn btn-outline-secondary rounded-pill px-4" style={{
                      borderColor: '#48484a',
                      color: '#a1a1a6',
                      fontWeight: '500'
                    }}>
                      <i className="bi bi-download me-2"></i>
                      Descargar
                    </button>
                    <Link 
                      to="/agency"
                      className="btn btn-primary rounded-pill px-4"
                      style={{
                        backgroundColor: '#007AFF',
                        borderColor: '#007AFF',
                        color: 'white',
                        fontWeight: '500',
                        textDecoration: 'none'
                      }}
                    >
                      <i className="bi bi-rocket me-2"></i>
                      Personalizar
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="row g-4 mb-5">
              <div className="col-md-4">
                <div className="text-center p-4" style={{
                  backgroundColor: '#1c1c1e',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <i className="bi bi-gear-fill mb-3" style={{ fontSize: '2rem', color: '#34c759' }}></i>
                  <h6 className="fw-semibold mb-2" style={{ color: '#ffffff' }}>Redux Toolkit</h6>
                  <p style={{ color: '#a1a1a6', fontSize: '0.9rem', margin: 0 }}>
                    Gestión de estado global simplificada y eficiente
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center p-4" style={{
                  backgroundColor: '#1c1c1e',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <i className="bi bi-shield-check mb-3" style={{ fontSize: '2rem', color: '#007AFF' }}></i>
                  <h6 className="fw-semibold mb-2" style={{ color: '#ffffff' }}>Rutas Protegidas</h6>
                  <p style={{ color: '#a1a1a6', fontSize: '0.9rem', margin: 0 }}>
                    Sistema de autenticación y autorización incluido
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center p-4" style={{
                  backgroundColor: '#1c1c1e',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <i className="bi bi-palette mb-3" style={{ fontSize: '2rem', color: '#ff9f0a' }}></i>
                  <h6 className="fw-semibold mb-2" style={{ color: '#ffffff' }}>Diseño Moderno</h6>
                  <p style={{ color: '#a1a1a6', fontSize: '0.9rem', margin: 0 }}>
                    UI inspirado en Apple con animaciones fluidas
                  </p>
                </div>
              </div>
            </div>

            {/* Back to Catalog */}
            <div className="text-center">
              <Link 
                to="/"
                className="btn btn-outline-light rounded-pill px-4"
                style={{
                  borderColor: '#48484a',
                  color: '#a1a1a6',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
              >
                <i className="bi bi-arrow-left me-2"></i>
                Volver al Catálogo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}