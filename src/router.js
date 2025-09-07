import React, { use, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage/homePage';
import Features from './components/features/feature';
import Counter from './components/counter/counter';

function Router({features}) {
  useEffect(() => { console.log(features) }, [features]);
  return (
    <BrowserRouter>
      <Routes>// 100 cities* 100restaurantc *50 rdishes
        <Route path="/home" element={<HomePage />} />
        <Route path="/features" element={<Features features={features} />} />
        <Route path="/counter" element={<Counter />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

//router for citied
//router for restaurants
//router for dishes 