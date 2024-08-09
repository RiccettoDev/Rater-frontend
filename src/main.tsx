import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import GlobalStyles from './globalStyles'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
)
