import React from 'react'

const VSCodeQuickAccess = () => {
  const openVSCodeServer = () => {
    window.open('http://vscode-server:8080', '_blank')
  }

  const openInNewTab = () => {
    window.open('http://vscode-server:8080', '_blank')
  }

  return (
    <div style={{
      padding: '16px',
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid #e9ecef',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '12px'
      }}>
        <div style={{ fontSize: '20px', marginRight: '8px' }}>💻</div>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>
          Quick Access
        </h3>
      </div>
      
      <div style={{ marginBottom: '12px' }}>
        <p style={{ 
          margin: '0 0 8px 0', 
          fontSize: '12px', 
          color: '#666' 
        }}>
          Access your VS Code development environment
        </p>
      </div>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <button 
          onClick={openVSCodeServer}
          style={{
            padding: '8px 12px',
            backgroundColor: '#007acc',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: '500'
          }}
        >
          Open VS Code Server
        </button>
        
        <button 
          onClick={openInNewTab}
          style={{
            padding: '6px 12px',
            backgroundColor: 'transparent',
            color: '#007acc',
            border: '1px solid #007acc',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '11px'
          }}
        >
          Open in New Tab
        </button>
      </div>
      
      <div style={{
        marginTop: '12px',
        padding: '8px',
        backgroundColor: '#f8f9fa',
        borderRadius: '4px',
        fontSize: '11px',
        color: '#666'
      }}>
        <div style={{ marginBottom: '4px' }}>
          <strong>Default Password:</strong> vscode
        </div>
        <div>
          <strong>Workspace:</strong> /workspace
        </div>
      </div>
    </div>
  )
}

export default VSCodeQuickAccess 