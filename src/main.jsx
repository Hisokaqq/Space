import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Loader from './components/Loader.jsx'
import './index.css';

const Fallback = () => {
  return (
    <div className='fallback'>
      <Loader />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Fallback/> } >
     <App />
    </Suspense>
  </React.StrictMode>,
)
