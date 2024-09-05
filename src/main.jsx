import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Login from './Pages/Login.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider> */}
       <App />
       
    {/* </RouterProvider> */}
  </StrictMode>,
)
