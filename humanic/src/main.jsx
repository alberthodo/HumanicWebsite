// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import CardsSection from './cardsSection.jsx'
// import Pricing from './Pricing.jsx'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <Front /> */}
//     <App />
//     <CardsSection />
//     <Pricing />
//   </StrictMode>,
// )


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import CardsSection from './cardsSection.jsx';
import Pricing from './Pricing.jsx';
import Doctrine from './Doctrine.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/doctrine" element={<Doctrine />} />
      </Routes>
    </Router>
  </StrictMode>
);
