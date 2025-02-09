import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LanguageProvider, ThemeProvider } from './contexts'
import App from './App.tsx'
import './main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </StrictMode>,
)
