import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeCont from './Context.jsx/ThemeCont.jsx'

createRoot(document.getElementById('root')).render(
 <ThemeCont>
  <App/>
 </ThemeCont>
 
 
)
