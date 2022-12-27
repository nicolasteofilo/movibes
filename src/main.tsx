import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { SearchProvider } from './contexts/SearchContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>,
)
