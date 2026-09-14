import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Restore a deep-linked URL (saved by public/404.html) only AFTER the bundle
// has loaded, so Vite's relative ./assets/ paths resolve against the app root.
// Rewriting the URL in index.html's <head> breaks asset loading on 2-level routes.
const redirect = sessionStorage.getItem('redirect')
if (redirect) {
  sessionStorage.removeItem('redirect')
  sessionStorage.removeItem('redirect-attempt')
  if (redirect !== window.location.pathname + window.location.search + window.location.hash) {
    window.history.replaceState(null, '', redirect)
  }
}

// Wrap App with ThemeProvider to share theme state globally

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
