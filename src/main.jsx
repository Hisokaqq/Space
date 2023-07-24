import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Fallback from './components/Fallback.jsx';
import './index.css';

import Fallback2 from './components/Fallback2.jsx';


const Main = () => {
  const [showApp, setShowApp] = useState(false);
  
  const handleClick = () => {
    setShowApp(true);
  };

  return (
    <React.StrictMode>
      <Suspense fallback={<Fallback2 />}>
        
      {showApp ? <div><App /></div> : <Fallback handleClick={handleClick}/>}
      </Suspense>
    </React.StrictMode>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
