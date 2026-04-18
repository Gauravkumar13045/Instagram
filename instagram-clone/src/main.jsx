import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD:instagram-clone/src/main.jsx
   
    <App />
    
=======
    <BrowserRouter>
    <App />
    </BrowserRouter>
>>>>>>> c746a1d935cb62456c8cabb7335b7df5ef6ebb92:src/main.jsx
  </StrictMode>,
)
