import React from 'react';

import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

import Register from './pages/Register';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Form from './pages/Form';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path='/index' element={<Home />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>

          </Route>
            <Route index path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/form' element={<Form />}></Route>
          <Route path="/register" element={<Register />}></Route>


        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
