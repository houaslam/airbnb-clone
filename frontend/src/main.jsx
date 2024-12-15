import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import './style.css'

console.log( "what the heeeel" )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
