import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/auth/authSlice';

export default function Navbar() {
  const { isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      <nav className="navbar navbar-expand-lg navbar-dark" style={{
        backgroundColor: '#1a1a1a',
        borderBottom: '1px solid #333',
        backdropFilter: 'blur(20px)',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
      }}>
        <div className="container-fluid px-4">
          <Link className="navbar-brand fw-semibold d-flex align-items-center" to="/" style={{
            fontSize: '1.25rem',
            color: '#ffffff'
          }}>
            <i className="bi bi-lightning-charge-fill me-2" style={{ color: '#007AFF' }}></i>
            ReactApp
          </Link>
          
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link 
                  className={`nav-link px-3 py-2 rounded-pill mx-1 ${location.pathname === '/' ? 'active' : ''}`} 
                  to="/"
                  style={{
                    color: location.pathname === '/' ? '#007AFF' : '#e5e5e7',
                    backgroundColor: location.pathname === '/' ? 'rgba(0, 122, 255, 0.1)' : 'transparent',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <i className="bi bi-house me-2"></i>
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link px-3 py-2 rounded-pill mx-1 ${location.pathname === '/agency' ? 'active' : ''}`} 
                  to="/agency"
                  style={{
                    color: location.pathname === '/agency' ? '#007AFF' : '#e5e5e7',
                    backgroundColor: location.pathname === '/agency' ? 'rgba(0, 122, 255, 0.1)' : 'transparent',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <i className="bi bi-code-square me-2"></i>
                  Agencia Dev
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link px-3 py-2 rounded-pill mx-1 ${location.pathname === '/counter' ? 'active' : ''}`} 
                  to="/counter"
                  style={{
                    color: location.pathname === '/counter' ? '#007AFF' : '#e5e5e7',
                    backgroundColor: location.pathname === '/counter' ? 'rgba(0, 122, 255, 0.1)' : 'transparent',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <i className="bi bi-calculator me-2"></i>
                  Counter
                </Link>
              </li>
            </ul>
            
            <div className="d-flex">
              {isAuthenticated ? (
                <button 
                  className="btn btn-outline-light rounded-pill px-4" 
                  onClick={() => dispatch(logout())}
                  style={{
                    border: '1px solid #48484a',
                    color: '#ff453a',
                    backgroundColor: 'transparent',
                    transition: 'all 0.2s ease'
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
                    backgroundColor: '#007AFF',
                    borderColor: '#007AFF',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#0056CC';
                    e.target.style.borderColor = '#0056CC';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#007AFF';
                    e.target.style.borderColor = '#007AFF';
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
    
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}