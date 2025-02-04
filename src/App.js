import React from 'react';

import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sign_in from './pages/Sign_in';
import Dashbord from './pages/Dashbord';


function App() {
return (
    <>
   <BrowserRouter>
     <Routes>
     <Route index path='/' element={ <Home/>}></Route>
       <Route path='index' element={ <Home/>}></Route>
       <Route path='login' element={<Sign_in/>}></Route>
      <Route path="dashbord" element={<Dashbord/>}></Route>
     
     </Routes>
     </BrowserRouter>  
</>
   
  );
}

export default App;
