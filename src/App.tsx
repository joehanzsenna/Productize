import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ExploreIndex from './Pages/Explore/ExploreIndex/ExploreIndex';
import Cart from './Pages/Cart/index';
// import HomeIndex from './Pages/Home/HomeIndex/HomeIndex'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={ExploreIndex} />

        <Route path='/cart' Component={Cart} />
        {/* <Cart /> */}
        {/* <HomeIndex/> */}
      </Routes>
    </Router>
  );
};

export default App;
