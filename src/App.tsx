import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ExploreIndex from './Pages/Explore/ExploreIndex/ExploreIndex';
import Cart from './Pages/Cart/index';
=======
import './App.css'
import  ExploreIndex  from './Pages/Explore/ExploreIndex/ExploreIndex'
import ExDesignIndex from './Pages/Explore/ExploreDesign/ExDesignIndex/ExDesignIndex';
>>>>>>> b8e2019f063abe1da40706dd523b588b03771670
// import HomeIndex from './Pages/Home/HomeIndex/HomeIndex'

const App: React.FC = () => {
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path='/' Component={ExploreIndex} />
=======
    <div>
        <ExDesignIndex/>
        {/* <ExploreIndex/> */}
        {/* <HomeIndex/> */}
    </div>
  )
}
>>>>>>> b8e2019f063abe1da40706dd523b588b03771670

        <Route path='/cart' Component={Cart} />
        {/* <Cart /> */}
        {/* <HomeIndex/> */}
      </Routes>
    </Router>
  );
};

export default App;
