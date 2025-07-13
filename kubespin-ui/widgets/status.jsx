import React, { useState, useEffect } from 'react'

const VSCodeStatus = () => {
  const [status, setStatus] = useState('checking')
  const [lastChecked, setLastChecked] = useState(null)

  const checkStatus = async () => {
    try {
      const response = await fetch('/api/status')
      if (response.ok) {
        setStatus('online')
      } else {
        setStatus('offline')
      }
    } catch (err) {
      setStatus('error')
    }
    setLastChecked(new Date())
  }

  useEffect(() => {
    checkStatus()
    const interval = setInterval(checkStatus, 30000) // Check every 30 seconds
    return () => clearInterval(interval)
  }, [])

  const getStatusColor = () => {
    switch (status) {
      case 'online': return '#28a745'
      case 'offline': return '#dc3545'
      case 'error': return '#ffc107'
      default: return '#6c757d'
    }
  }

  const getStatusText = () => {
    switch (status) {
      case 'online': return 'Online'
      case 'offline': return 'Offline'
      case 'error': return 'Error'
      default: return 'Checking...'
    }
  }

  const getStatusIcon = () => {
    switch (status) {
      case 'online': return '🟢'
      case 'offline': return '🔴'
      case 'error': return '🟡'
      default: return '⚪'
    }
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
        justifyContent: 'space-between',
        marginBottom: '12px'
      }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>
          VS Code Server Status
        </h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ fontSize: '12px' }}>{getStatusIcon()}</span>
          <span style={{ 
            fontSize: '14px', 
            fontWeight: '500',
            color: getStatusColor()
          }}>
            {getStatusText()}
          </span>
        </div>
      </div>
      
      <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>
        Port: 8080
      </div>
      
      {lastChecked && (
        <div style={{ fontSize: '11px', color: '#999' }}>
          Last checked: {lastChecked.toLocaleTimeString()}
        </div>
      )}
      
      <button 
        onClick={checkStatus}
        style={{
          marginTop: '8px',
          padding: '6px 12px',
          backgroundColor: '#007acc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '12px'
        }}
      >
        Refresh
      </button>
    </div>
  )
}

export default VSCodeStatus 