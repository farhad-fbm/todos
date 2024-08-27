import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { ALLContextProvider } from './contexts/ALLContextProvider';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ALLContextProvider>
      <App />
    </ALLContextProvider>
  </StrictMode>,
)

