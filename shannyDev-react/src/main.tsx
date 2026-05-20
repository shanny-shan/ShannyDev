import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/assets/css/style.scss'
import '@/assets/css/light.scss'
import '@/assets/css/dark.scss'
import '@/assets/css/scrollbar.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
