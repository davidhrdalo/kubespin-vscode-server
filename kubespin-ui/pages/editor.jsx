import React, { useState, useEffect } from 'react'

const VSCodeEditor = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Check if VS Code Server is accessible
    const checkServerStatus = async () => {
      try {
        const response = await fetch('/api/status')
        if (response.ok) {
          setIsLoading(false)
        } else {
          setError('VS Code Server is not available')
          setIsLoading(false)
        }
      } catch (err) {
        setError('Failed to connect to VS Code Server')
        setIsLoading(false)
      }
    }

    checkServerStatus()
  }, [])

  const openVSCodeServer = () => {
    // Open VS Code Server in a new window/tab
    window.open('http://vscode-server:8080', '_blank')
  }

  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column'
      }}>
        <div style={{ fontSize: '24px', marginBottom: '20px' }}>🚀</div>
        <div>Loading VS Code Server...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column'
      }}>
        <div style={{ fontSize: '24px', marginBottom: '20px', color: '#ff6b6b' }}>⚠️</div>
        <div style={{ marginBottom: '20px' }}>{error}</div>
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007acc',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#f8f9fa', 
        borderBottom: '1px solid #e9ecef',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h1 style={{ margin: 0, color: '#333' }}>VS Code Server</h1>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>
            Web-based development environment
          </p>
        </div>
        <button 
          onClick={openVSCodeServer}
          style={{
            padding: '12px 24px',
            backgroundColor: '#007acc',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Open VS Code Server
        </button>
      </div>
      
      <div style={{ 
        flex: 1, 
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '64px', marginBottom: '20px' }}>💻</div>
        <h2 style={{ marginBottom: '10px', color: '#333' }}>
          VS Code Server Ready
        </h2>
        <p style={{ marginBottom: '30px', color: '#666', maxWidth: '500px' }}>
          Your web-based VS Code development environment is ready to use. 
          Click the button above to open the full VS Code Server interface.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          maxWidth: '600px',
          width: '100%'
        }}>
          <div style={{ 
            padding: '20px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '8px',
            border: '1px solid #e9ecef'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>🔧</div>
            <h3 style={{ margin: '0 0 10px 0' }}>Development</h3>
            <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
              Full VS Code experience in your browser
            </p>
          </div>
          
          <div style={{ 
            padding: '20px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '8px',
            border: '1px solid #e9ecef'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>📁</div>
            <h3 style={{ margin: '0 0 10px 0' }}>Workspace</h3>
            <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
              Access your project files and folders
            </p>
          </div>
          
          <div style={{ 
            padding: '20px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '8px',
            border: '1px solid #e9ecef'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>🔌</div>
            <h3 style={{ margin: '0 0 10px 0' }}>Extensions</h3>
            <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
              Pre-installed development extensions
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VSCodeEditor 