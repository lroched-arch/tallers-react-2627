import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Proveidors from './context/Proveidors.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Proveidors>
      <App />
    </Proveidors>
       
  </StrictMode>,
)
