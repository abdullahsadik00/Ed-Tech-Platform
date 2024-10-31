import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './components/core/Auth/SignUp';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path='/contact' element={<Contact />} /> */}
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};

export default App;
