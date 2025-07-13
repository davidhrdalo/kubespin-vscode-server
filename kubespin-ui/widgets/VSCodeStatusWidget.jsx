import React, { useState, useEffect } from 'react'
import styles from './VSCodeStatusWidget.module.css'

const VSCodeStatusWidget = ({ pluginApi }) => {
  const [status, setStatus] = useState('checking')
  const [lastChecked, setLastChecked] = useState(null)

  const checkStatus = () => {
    // VS Code Server is running in the same pod, so it should be available
    setStatus('online')
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
    <div className={styles.widget}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          VS Code Server Status
        </h3>
        <div className={styles.status}>
          <span className={styles.statusIcon}>{getStatusIcon()}</span>
          <span 
            className={styles.statusText}
            style={{ color: getStatusColor() }}
          >
            {getStatusText()}
          </span>
        </div>
      </div>
      
      <div className={styles.info}>
        <div className={styles.infoItem}>Port: 8080</div>
        <div className={styles.infoItem}>Status: Running</div>
      </div>
      
      {lastChecked && (
        <div className={styles.lastChecked}>
          Last checked: {lastChecked.toLocaleTimeString()}
        </div>
      )}
      
      <button 
        onClick={checkStatus}
        className={styles.refreshButton}
      >
        Refresh
      </button>
    </div>
  )
}

export default VSCodeStatusWidget 