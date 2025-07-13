import React from 'react'
import styles from './VSCodeQuickAccessWidget.module.css'

const VSCodeQuickAccessWidget = ({ pluginApi }) => {
  const openVSCodeServer = () => {
    window.open('http://vscode-server:8080', '_blank')
  }

  const openInNewTab = () => {
    window.open('http://vscode-server:8080', '_blank')
  }

  return (
    <div className={styles.widget}>
      <div className={styles.header}>
        <div className={styles.icon}>💻</div>
        <h3 className={styles.title}>
          Quick Access
        </h3>
      </div>
      
      <div className={styles.description}>
        <p>Access your VS Code development environment</p>
      </div>
      
      <div className={styles.actions}>
        <button 
          onClick={openVSCodeServer}
          className={styles.primaryButton}
        >
          Open VS Code Server
        </button>
        
        <button 
          onClick={openInNewTab}
          className={styles.secondaryButton}
        >
          Open in New Tab
        </button>
      </div>
      
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <strong>Default Password:</strong> vscode
        </div>
        <div className={styles.infoItem}>
          <strong>Workspace:</strong> /workspace
        </div>
      </div>
    </div>
  )
}

export default VSCodeQuickAccessWidget 