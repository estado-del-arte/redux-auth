import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../features/counter/counterSlice';

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
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            
            {/* Header */}
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold mb-3" style={{ 
                color: '#ffffff',
                letterSpacing: '-0.02em'
              }}>
                Counter App
              </h1>
              <p className="lead" style={{ color: '#a1a1a6' }}>
                Contador minimalista y refinado, con un estilo contemporáneo.
              </p>
            </div>
            
            {/* Main Counter Card */}
            <div className="card border-0 mb-4" style={{
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
                      {count > 0 ? '+ Positivo' : count < 0 ? '- Negativo' : 'Cero'}
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="progress mb-3" style={{ 
                    height: '6px', 
                    backgroundColor:'rgb(152, 152, 153)',
                    borderRadius: '3px'
                  }}>
                    <div 
                      className="progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%" 
                      style={{
                        width: `${Math.min(Math.abs(count) * 2, 100)}%`,
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
                <div className="d-flex justify-content-center gap-5">
                  <small style={{ color: '#a1a1a6', fontWeight: '500' }}>Decrementar</small>
                  <small style={{ color: '#a1a1a6', fontWeight: '500' }}>Reset</small>
                  <small style={{ color: '#a1a1a6', fontWeight: '500' }}>Incrementar</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}