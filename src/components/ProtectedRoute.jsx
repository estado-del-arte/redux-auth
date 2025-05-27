import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { login } from '../features/auth/authSlice';

export default function ProtectedRoute() {
  const { isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setShowModal(true);
    }
  }, [isAuthenticated, location]);

  const handleLogin = () => {
    dispatch(login());
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
    // Pequeño delay para que el modal se cierre antes de navegar
    setTimeout(() => {
      window.history.back();
    }, 300);
  };

  if (isAuthenticated) {
    return <Outlet />;
  }

  return (
    <>
      {/* Backdrop oscuro */}
      <div style={{ 
        backgroundColor: '#000000', 
        minHeight: '100vh',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
      }}>
        <div className="container-fluid px-4 py-5">
          <div className="row justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <div className="col-lg-6 text-center">
              <i className="bi bi-lock-fill mb-4" style={{ 
                fontSize: '4rem', 
                color: '#8e8e93' 
              }}></i>
              <h2 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
                Contenido Protegido
              </h2>
              <p className="lead" style={{ color: '#a1a1a6' }}>
                Autenticación necesaria para visualizar este contenido.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Login */}
      {showModal && (
        <>
          {/* Backdrop */}
          <div 
            className="modal-backdrop show"
            style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(20px)'
            }}
          ></div>
          
          {/* Modal */}
          <div 
            className="modal show d-block" 
            tabIndex="-1" 
            style={{ 
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              zIndex: 1055
            }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div 
                className="modal-content border-0" 
                style={{
                  backgroundColor: '#1c1c1e',
                  borderRadius: '20px',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
                }}
              >
                {/* Header */}
                <div className="modal-header border-0 pb-0">
                  <button 
                    type="button" 
                    className="btn-close btn-close-white ms-auto" 
                    onClick={handleClose}
                    style={{
                      filter: 'invert(1)',
                      opacity: 0.6
                    }}
                  ></button>
                </div>
                
                {/* Body */}
                <div className="modal-body text-center px-4 pb-4">
                  {/* Icon */}
                  <div className="mb-4">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: 'rgba(255, 69, 58, 0.1)',
                        border: '2px solid rgba(255, 69, 58, 0.2)'
                      }}
                    >
                      <i className="bi bi-shield-exclamation" style={{ 
                        fontSize: '2rem', 
                        color: '#ff453a' 
                      }}></i>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h4 className="fw-bold mb-3" style={{ 
                    color: '#ffffff',
                    letterSpacing: '-0.01em'
                  }}>
                    Autenticación Requerida
                  </h4>
                  
                  {/* Message */}
                  <p className="mb-4" style={{ 
                    color: '#a1a1a6',
                    lineHeight: '1.5',
                    fontSize: '1rem'
                  }}>
                    Debes iniciar sesión para acceder al Contador. Por favor, ingresa con tu cuenta para continuar.
                  </p>
                  
                  {/* Buttons */}
                  <div className="d-flex gap-3 justify-content-center">
                    <button 
                      className="btn btn-outline-secondary rounded-pill px-4"
                      onClick={handleClose}
                      style={{
                        borderColor: '#48484a',
                        color: '#a1a1a6',
                        backgroundColor: 'transparent',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#48484a';
                        e.target.style.color = '#ffffff';
                        e.target.style.borderColor = '#48484a';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#a1a1a6';
                        e.target.style.borderColor = '#48484a';
                      }}
                    >
                      <i className="bi bi-arrow-left me-2"></i>
                      Ir Atrás
                    </button>
                    
                    <button 
                      className="btn btn-primary rounded-pill px-4"
                      onClick={handleLogin}
                      style={{
                        backgroundColor: '#007AFF',
                        borderColor: '#007AFF',
                        fontWeight: '500',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#0056CC';
                        e.target.style.borderColor = '#0056CC';
                        e.target.style.transform = 'translateY(-1px)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#007AFF';
                        e.target.style.borderColor = '#007AFF';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      <i className="bi bi-box-arrow-in-right me-2"></i>
                      Login Now
                    </button>
                  </div>
                  
                  {/* Additional Info */}
                  <div className="mt-4 pt-3" style={{ borderTop: '1px solid #2c2c2e' }}>
                    <small style={{ color: '#8e8e93' }}>
                      <i className="bi bi-info-circle me-1"></i>
                      No requiere registro. Haz clic en Iniciar sesión para acceder a todas las funciones.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}