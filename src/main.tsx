import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SplashCursor from './components/SplashCursor.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SplashCursor />
    <App />
  </StrictMode>,
)
