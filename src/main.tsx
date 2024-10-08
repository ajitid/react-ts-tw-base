import React from 'react'
import ReactDOM from 'react-dom/client'

import './fonts.css'
import './index.css'
// import './debug.css';

import { App } from './components/app.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
