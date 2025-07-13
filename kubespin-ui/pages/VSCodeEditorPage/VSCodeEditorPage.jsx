import React, { useState, useEffect } from 'react'
import styles from './VSCodeEditorPage.module.css'

const VSCodeEditorPage = ({ pluginApi }) => {
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
      <div className={styles.loadingContainer}>
        <div className={styles.loadingIcon}>🚀</div>
        <div>Loading VS Code Server...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorIcon}>⚠️</div>
        <div className={styles.errorMessage}>{error}</div>
        <button 
          onClick={() => window.location.reload()}
          className={styles.retryButton}
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>VS Code Server</h1>
          <p className={styles.subtitle}>
            Web-based development environment
          </p>
        </div>
        <button 
          onClick={openVSCodeServer}
          className={styles.openButton}
        >
          Open VS Code Server
        </button>
      </div>
      
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroIcon}>💻</div>
          <h2 className={styles.heroTitle}>
            VS Code Server Ready
          </h2>
          <p className={styles.heroDescription}>
            Your web-based VS Code development environment is ready to use. 
            Click the button above to open the full VS Code Server interface.
          </p>
        </div>
        
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🔧</div>
            <h3 className={styles.featureTitle}>Development</h3>
            <p className={styles.featureDescription}>
              Full VS Code experience in your browser
            </p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>📁</div>
            <h3 className={styles.featureTitle}>Workspace</h3>
            <p className={styles.featureDescription}>
              Access your project files and folders
            </p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🔌</div>
            <h3 className={styles.featureTitle}>Extensions</h3>
            <p className={styles.featureDescription}>
              Pre-installed development extensions
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VSCodeEditorPage 