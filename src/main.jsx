import React, { Suspense, useState } from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
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
        {showApp ? <div><App /></div> : <Fallback handleClick={handleClick} />}
      </Suspense>
    </React.StrictMode>
  );
};

// Use createRoot to render your application
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<Main />);
