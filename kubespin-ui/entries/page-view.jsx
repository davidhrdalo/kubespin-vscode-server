import React from 'react'
import ReactDOM from 'react-dom/client'
import VSCodePageView from '../pages/editor.jsx'

// Initialize the page view
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<VSCodePageView />)

// Export for external use
window.VSCodePageView = VSCodePageView 