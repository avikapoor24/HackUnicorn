import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Lander from '../Pages/Lander';
import Services from '../Pages/Services';
import Vision from '../Pages/Vision';
import About_Us from '../Pages/AboutUs';
function routes() {
    return (
      
       <Routes>
        <Route path='/' element={<Lander/>} />
        <Route path='/services' element={<Services/>} />
        {/* <Route path='/portfolio' element={<Lander/>} /> -- will link it to login button action */}
        <Route path='/vision' element={<Vision/>} />
        <Route path='/about-us' element={<About_Us/>} />
        {/* <Route path='/get-started' element={<Lander/>} />  -- TBD  */}
        </Routes>

  )
}

export default routes;