import React from 'react';
import './App.css'
import  ExploreIndex  from './Pages/Explore/ExploreIndex/ExploreIndex'
import ExDesignIndex from './Pages/Explore/ExploreDesign/ExDesignIndex/ExDesignIndex';
// import HomeIndex from './Pages/Home/HomeIndex/HomeIndex'


const App: React.FC = () => {

  return (
    <div>
        <ExploreIndex/>
        {/* <ExDesignIndex/> */}
        {/* <HomeIndex/> */}
    </div>
  )
}

export default App
